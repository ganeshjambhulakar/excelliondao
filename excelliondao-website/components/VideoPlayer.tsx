'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
}

export default function VideoPlayer({ 
  videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video
  posterUrl,
  title = 'Product Demo'
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      
      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            See It In Action
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Watch Our <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            See how easy it is to integrate blockchain payments into your application
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden glass-card group"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => !isPlaying && setShowControls(true)}
        >
          {/* Video */}
          <div className="relative aspect-video bg-dark-900">
            <video
              ref={videoRef}
              src={videoUrl}
              poster={posterUrl}
              className="w-full h-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              muted={isMuted}
              playsInline
              onClick={togglePlay}
            />

            {/* Play Button Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-dark-900/50"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900/90 to-transparent"
                >
                  {/* Progress Bar */}
                  <div
                    className="h-1 bg-dark-700 rounded-full mb-4 cursor-pointer group/progress"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white" fill="white" />
                        )}
                      </button>
                      <button
                        onClick={restart}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-white/70 text-sm">{title}</span>
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Maximize className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Video Features */}
          <div className="p-6 grid grid-cols-3 gap-4 border-t border-dark-800">
            {[
              { label: 'Quick Setup', value: '< 5 min' },
              { label: 'Integration', value: 'Any Platform' },
              { label: 'Support', value: '24/7' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-primary-400 font-semibold">{item.value}</p>
                <p className="text-dark-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

