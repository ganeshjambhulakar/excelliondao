# Production Deployment Guide

## Memory Issues Fix

If you encounter WebAssembly memory errors (`RangeError: WebAssembly.instantiate(): Out of memory`), use the following solutions:

### Solution 1: Use Production Start Script (Recommended)

```bash
npm run start:prod
```

This script includes:
- Increased heap size: `--max-old-space-size=4096` (4GB)
- Increased WebAssembly memory: `--max-wasm-size=16777216` (16MB)
- Production environment flag

### Solution 2: Manual Node.js Flags

If the production script doesn't work, run with explicit memory flags:

```bash
NODE_ENV=production node --max-old-space-size=4096 --max-wasm-size=16777216 server.js
```

### Solution 3: Disable Standalone Mode

If memory issues persist, disable standalone output mode:

1. Set environment variable:
   ```bash
   export DISABLE_STANDALONE=true
   ```

2. Rebuild:
   ```bash
   npm run build
   ```

3. Start server:
   ```bash
   npm start
   ```

### Solution 4: Use PM2 with Memory Limits

Install PM2:
```bash
npm install -g pm2
```

Create `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'excelliondao-website',
    script: './server.js',
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '2G',
    node_args: '--max-old-space-size=4096 --max-wasm-size=16777216',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

Start with PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Required variables:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Set to `production` for production
- `NEXT_PUBLIC_SITE_URL` - Your production URL

## Deployment Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Set environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your production values
   ```

4. **Start the server:**
   ```bash
   npm run start:prod
   ```

   Or with PM2:
   ```bash
   pm2 start ecosystem.config.js
   ```

## Troubleshooting

### Memory Errors
- Use `start:prod` script with increased memory limits
- Consider disabling standalone mode if issues persist
- Ensure your server has at least 2GB RAM available

### Port Already in Use
- Change `PORT` in `.env` file
- Or kill the process using the port:
  ```bash
  lsof -ti:3000 | xargs kill -9
  ```

### Build Errors
- Clear `.next` directory: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

## Health Check

Once the server is running, check health:
```bash
curl http://localhost:3000/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-12-08T...",
  "uptime": 123.45,
  "environment": "production"
}
```

