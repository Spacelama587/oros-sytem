"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(springScrollY, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(springScrollY, [0, 0.3], [0.6, 1]);
  const titleY = useTransform(springScrollY, [0, 0.3], [50, 0]);
  const videoReveal = useTransform(springScrollY, [0.1, 0.3], [0, 100]);
  const videoMaskOpacity = useTransform(springScrollY, [0.1, 0.3], [1, 0]);

  // Video control handlers
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

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Auto-play video when it's visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.error("Autoplay failed:", error);
          });
        } else if (!entry.isIntersecting && videoRef.current && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-36 overflow-hidden bg-zinc-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <motion.div
          className="absolute top-1/3 -left-10 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-10 h-96 w-96 rounded-full bg-[#FFE14D] opacity-5 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          style={{ y: titleY, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 rounded-full bg-zinc-800/60 px-3 py-1 text-sm backdrop-blur-sm mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FFE14D]"></span>
            <span className="text-zinc-300">Watch & Learn</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            See How Our AI Technology <span className="text-[#FFE14D]">Works</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-zinc-400"
          >
            Discover how our platform identifies early opportunities and provides AI-driven insights for smarter real estate investments.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          style={{ scale, opacity }}
        >
          {/* Video Element */}
          <div className="aspect-video relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              loop
              muted={isMuted}
              playsInline
            >
              <source src="Oroshiuri-Systems-720p-h264.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent pointer-events-none"></div>
            
            {/* Scroll Reveal Effect */}
            <motion.div
              className="absolute inset-0 bg-zinc-900 origin-bottom pointer-events-none"
              style={{ 
                height: `${100 - videoReveal.get()}%`,
                opacity: videoMaskOpacity 
              }}
            ></motion.div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex flex-col">
              {/* Progress Bar */}
              <div className="w-full h-1 bg-zinc-700/50 rounded-full mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-[#FFE14D]"
                  style={{ width: `${progress}%` }}
                ></motion.div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
                
                <button
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -right-4 -top-4 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-800 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFE14D] font-medium">AI Property Analysis</span>
          </motion.div>
          
          <motion.div
            className="absolute -left-4 -bottom-4 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-800 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-300 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Live Demo
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;