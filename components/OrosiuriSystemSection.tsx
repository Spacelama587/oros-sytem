'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { TrendingUp, Clock, Brain, Layers, Users, Sliders } from 'lucide-react';

const OrosiuriSystemSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative min-h-screen overflow-hidden font-sans">
      <SectionTitle scrollYProgress={scrollYProgress} />
      <SectionFeatures scrollYProgress={scrollYProgress} />
    </main>
  );
};

const SectionTitle = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div 
      style={{ scale, rotate, opacity }} 
      className="sticky top-0 h-screen bg-gradient-to-b from-slate-900 to-black flex flex-col items-center justify-center pb-[10vh] rounded-full"
    >
      <div className="relative">
        <motion.div 
          className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-16 -right-8 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <h1 className="text-[13vw] md:text-[8vw] font-thin tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-300 leading-none text-center">
          OROSHIURI
        </h1>
        <p className="text-[4vw] md:text-[2.5vw] font-light uppercase tracking-[0.2em] text-white/70 text-center mt-2">
          SYSTEM
        </p>
      </div>
      
      <p className="text-[2.5vw] md:text-[1.5vw] text-white/80 text-center mt-8 max-w-lg px-6 font-light">
        A Strategic Approach to Real Estate Investing
      </p>
      
      <motion.div 
        className="absolute bottom-[15vh] text-white/50 text-sm flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p>Powered by AI</p>
        <div className="w-6 h-10 border border-white/20 rounded-full mt-2 flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionFeatures = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const systemFeatures = [
    {
      title: "PROVEN PRINCIPLES",
      description: "Leveraging compounding, strategic leverage, and growth exposure for optimized returns.",
      color: "from-purple-600 to-indigo-800",
      icon: TrendingUp,
      position: "col-span-12 md:col-span-6 lg:col-span-4"
    },
    {
      title: "RAPID COMPLETION",
      description: "Swift development of new estates drives exceptional growth through market stimulation.",
      color: "from-blue-500 to-cyan-600",
      icon: Clock,
      position: "col-span-12 md:col-span-6 lg:col-span-4"
    },
    {
      title: "AI-POWERED",
      description: "Advanced algorithms identify prime opportunities and optimize portfolio management.",
      color: "from-teal-500 to-emerald-600",
      icon: Brain,
      position: "col-span-12 md:col-span-6 lg:col-span-4"
    },
    {
      title: "STRUCTURED PROCESS",
      description: "Systematic workflow eliminates guesswork and enables efficient scaling of investments.",
      color: "from-amber-500 to-orange-600",
      icon: Layers,
      position: "col-span-12 md:col-span-6 lg:col-span-6"
    },
    {
      title: "COLLABORATIVE APPROACH",
      description: "Strategic partnerships ensure cost efficiency and premium development quality.",
      color: "from-rose-500 to-pink-600",
      icon: Users,
      position: "col-span-12 md:col-span-6 lg:col-span-6"
    },
    {
      title: "PERFECTLY TAILORED",
      description: "Customized for your specific goals, risk profile, and investment experience.",
      color: "from-indigo-500 to-blue-600",
      icon: Sliders,
      position: "col-span-12"
    }
  ];

  return (
    <motion.div 
      style={{ scale, rotate, opacity }}
      className="relative  bg-gradient-to-b from-black to-slate-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-12 gap-6">
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`${feature.position} overflow-hidden`}
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-3xl h-full overflow-hidden relative group`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Glowing orb decoration */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-white/10 blur-xl" />
                
                <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-thin text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <feature.icon className="text-white/90 w-8 h-8 flex-shrink-0 ml-4" />
                  </div>
                  
                  <p className="text-white/80 font-light flex-grow">
                    {feature.description}
                  </p>
                  
                  <motion.div 
                    className="w-12 h-1 bg-white/30 mt-6"
                    whileHover={{ width: 40 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto"
        >
          <p className="text-white/90 text-lg text-center font-light">
            The Oroshiuri System blends proven strategies with cutting-edge technology, delivering an adaptable framework that optimizes your real estate investment returns.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrosiuriSystemSection;