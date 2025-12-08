const express = require('express');
const next = require('next');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// Increase max listeners to prevent memory warnings
if (typeof process.setMaxListeners === 'function') {
  process.setMaxListeners(0);
}

// Log memory usage for debugging
if (process.env.NODE_ENV === 'production') {
  const used = process.memoryUsage();
  console.log('Memory usage at startup:', {
    rss: `${Math.round(used.rss / 1024 / 1024)}MB`,
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024)}MB`,
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024)}MB`,
    external: `${Math.round(used.external / 1024 / 1024)}MB`,
  });
  
  // Warn if memory is low
  if (used.heapTotal < 100 * 1024 * 1024) { // Less than 100MB
    console.warn('WARNING: Low heap memory detected. Consider using --max-old-space-size=4096');
  }
}

// Determine environment
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || 'localhost';

// Initialize Next.js app
const app = next({ 
  dev,
  hostname,
  port,
});

const handle = app.getRequestHandler();

// Prepare Next.js app and start Express server
app.prepare().then(() => {
  const server = express();

  // Security middleware - Helmet
  server.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"], // Required for Next.js
        connectSrc: ["'self'", "https://api.excelliondao.com", "wss:", "https:"],
      },
    },
    crossOriginEmbedderPolicy: false, // Required for Next.js
  }));

  // CORS configuration
  const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:3000', 'https://excelliondao.com'];

  server.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1 || dev) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  }));

  // Compression middleware
  server.use(compression());

  // Body parsing middleware
  server.use(express.json({ limit: '10mb' }));
  server.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Request logging middleware
  if (dev) {
    server.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
      next();
    });
  } else {
    // Production logging
    server.use((req, res, next) => {
      const start = Date.now();
      res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
      });
      next();
    });
  }

  // Health check endpoint
  server.get('/health', (req, res) => {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    });
  });

  // API routes can be added here before Next.js handler
  // Example: server.use('/api/custom', customRouter);

  // Handle all other requests with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start server
  server.listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start server:', err);
      process.exit(1);
    }
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> Environment: ${dev ? 'development' : 'production'}`);
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    console.log(`\n${signal} received. Starting graceful shutdown...`);
    
    server.close(() => {
      console.log('HTTP server closed.');
      
      app.close(() => {
        console.log('Next.js app closed.');
        process.exit(0);
      });
    });

    // Force shutdown after 10 seconds
    setTimeout(() => {
      console.error('Forced shutdown after timeout');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  // Handle uncaught errors
  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    shutdown('uncaughtException');
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    shutdown('unhandledRejection');
  });

}).catch((ex) => {
  console.error('Failed to start server:', ex);
  process.exit(1);
});

