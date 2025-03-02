'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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
    
    function raf(time: number) {
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

// Define the type for the props
interface SectionTitleProps {
  scrollYProgress: MotionValue<number>;
}

const SectionTitle = ({ scrollYProgress }: SectionTitleProps) => {
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

// Define the type for the props
interface SectionFeaturesProps {
  scrollYProgress: MotionValue<number>;
}

const SectionFeatures = ({ scrollYProgress }: SectionFeaturesProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const systemFeatures = [
    {
      title: "PROVEN PRINCIPLES",
      description: "Leveraging compounding, strategic leverage, and growth exposure for optimized returns.",
      icon: TrendingUp,
      chartType: "line-graph",
      position: "col-span-12 md:col-span-6 lg:col-span-4"
    },
    {
      title: "RAPID COMPLETION",
      description: "Swift development of new estates drives exceptional growth through market stimulation.",
      icon: Clock,
      chartType: "timeline",
      position: "col-span-12 md:col-span-6 lg:col-span-4"
    },
    {
      title: "AI-POWERED",
      description: "Advanced algorithms identify prime opportunities and optimize portfolio management.",
      icon: Brain,
      chartType: "network",
      position: "col-span-12 md:col-span-6 lg:col-span-4"
    },
    {
      title: "STRUCTURED PROCESS",
      description: "Systematic workflow eliminates guesswork and enables efficient scaling of investments.",
      icon: Layers,
      chartType: "flow-chart",
      position: "col-span-12 md:col-span-6 lg:col-span-6"
    },
    {
      title: "COLLABORATIVE APPROACH",
      description: "Strategic partnerships ensure cost efficiency and premium development quality.",
      icon: Users,
      chartType: "venn",
      position: "col-span-12 md:col-span-6 lg:col-span-6"
    },
    {
      title: "PERFECTLY TAILORED",
      description: "Customized for your specific goals, risk profile, and investment experience.",
      icon: Sliders,
      chartType: "radar",
      position: "col-span-12"
    }
  ];

  return (
    <motion.div 
      style={{ scale, rotate, opacity }}
      className="relative bg-gradient-to-b from-bg-zinc-950 to-slate-900 flex items-center"
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
              <div className="bg-white rounded-md h-full overflow-hidden relative group border border-zinc-300 shadow-md">
                {/* Grid paper background */}
                <div className="absolute inset-0 bg-[linear-gradient(#e6e6e6_1px,transparent_1px),linear-gradient(90deg,#e6e6e6_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Animated sketch line */}
                <motion.div 
                  className="absolute top-0 left-0 h-[2px] bg-black/70"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                />
                
                <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl text-black font-mono tracking-tight relative">
                      {feature.title}
                      <div className="absolute -bottom-2 left-0 w-full h-[3px]">
                        <motion.div 
                          className="h-full bg-red-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                        />
                      </div>
                    </h3>
                    <feature.icon className="text-black w-8 h-8 flex-shrink-0 ml-4" />
                  </div>
                  
                  <p className="text-black/80 font-mono text-sm flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Different sketch/chart types based on feature */}
                  <div className="mt-4 h-24 relative overflow-hidden">
                    {feature.chartType === "line-graph" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Grid lines */}
                        <g stroke="#e0e0e0" strokeWidth="0.5">
                          {[0, 10, 20, 30, 40, 50].map(y => (
                            <line key={`h-${y}`} x1="0" y1={y} x2="100" y2={y} />
                          ))}
                          {[0, 20, 40, 60, 80, 100].map(x => (
                            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="50" />
                          ))}
                        </g>
                        {/* Chart line */}
                        <motion.path
                          d="M0,50 C10,45 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 90,10 L100,5"
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        {/* Data points */}
                        {[
                          { x: 0, y: 50 },
                          { x: 30, y: 25 },
                          { x: 60, y: 15 },
                          { x: 90, y: 10 },
                          { x: 100, y: 5 }
                        ].map((point, i) => (
                          <motion.circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="1.5"
                            fill="#000"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                          />
                        ))}
                      </svg>
                    )}
                    
                    {feature.chartType === "timeline" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Timeline base */}
                        <motion.line
                          x1="0"
                          y1="25"
                          x2="100"
                          y2="25"
                          stroke="#000"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                        {/* Timeline points */}
                        {[
                          { x: 10, label: "Plan" },
                          { x: 30, label: "Acquire" },
                          { x: 50, label: "Develop" },
                          { x: 70, label: "Launch" },
                          { x: 90, label: "Scale" }
                        ].map((point, i) => (
                          <g key={i}>
                            <motion.circle
                              cx={point.x}
                              cy="25"
                              r="3"
                              fill="#fff"
                              stroke="#000"
                              strokeWidth="1"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                            />
                            <motion.text
                              x={point.x}
                              y="35"
                              fontSize="4"
                              textAnchor="middle"
                              fill="#000"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.7 + i * 0.15 }}
                            >
                              {point.label}
                            </motion.text>
                          </g>
                        ))}
                      </svg>
                    )}
                    
                    {feature.chartType === "network" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Network nodes */}
                        {[
                          { x: 50, y: 25, r: 4 },
                          { x: 30, y: 15, r: 3 },
                          { x: 70, y: 15, r: 3 },
                          { x: 20, y: 35, r: 2 },
                          { x: 40, y: 40, r: 2 },
                          { x: 60, y: 40, r: 2 },
                          { x: 80, y: 35, r: 2 }
                        ].map((node, i) => (
                          <motion.circle
                            key={i}
                            cx={node.x}
                            cy={node.y}
                            r={node.r}
                            fill="#fff"
                            stroke="#000"
                            strokeWidth="1"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                          />
                        ))}
                        {/* Network connections */}
                        {[
                          { x1: 50, y1: 25, x2: 30, y2: 15 },
                          { x1: 50, y1: 25, x2: 70, y2: 15 },
                          { x1: 50, y1: 25, x2: 40, y2: 40 },
                          { x1: 50, y1: 25, x2: 60, y2: 40 },
                          { x1: 30, y1: 15, x2: 20, y2: 35 },
                          { x1: 70, y1: 15, x2: 80, y2: 35 }
                        ].map((line, i) => (
                          <motion.line
                            key={i}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="#000"
                            strokeWidth="0.5"
                            strokeDasharray="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                          />
                        ))}
                      </svg>
                    )}
                    
                    {feature.chartType === "flow-chart" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Flow chart boxes */}
                        {[
                          { x: 10, y: 10, width: 20, height: 10, label: "Input" },
                          { x: 40, y: 10, width: 20, height: 10, label: "Process" },
                          { x: 70, y: 10, width: 20, height: 10, label: "Output" },
                          { x: 40, y: 30, width: 20, height: 10, label: "Feedback" }
                        ].map((box, i) => (
                          <g key={i}>
                            <motion.rect
                              x={box.x}
                              y={box.y}
                              width={box.width}
                              height={box.height}
                              fill="#fff"
                              stroke="#000"
                              strokeWidth="1"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
                            />
                            <motion.text
                              x={box.x + box.width/2}
                              y={box.y + box.height/2 + 1}
                              fontSize="4"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill="#000"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.15 }}
                            >
                              {box.label}
                            </motion.text>
                          </g>
                        ))}
                        {/* Flow chart arrows */}
                        {[
                          { x1: 30, y1: 15, x2: 40, y2: 15 },
                          { x1: 60, y1: 15, x2: 70, y2: 15 },
                          { x1: 50, y1: 20, x2: 50, y2: 30 },
                          { x1: 40, y1: 35, x2: 20, y2: 35, x3: 20, y3: 15 }
                        ].map((arrow, i) => {
                          if (i === 3) {
                            return (
                              <motion.path
                                key={i}
                                d={`M${arrow.x1},${arrow.y1} L${arrow.x2},${arrow.y2} L${arrow.x3},${arrow.y3}`}
                                fill="none"
                                stroke="#000"
                                strokeWidth="1"
                                markerEnd="url(#arrowhead)"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                              />
                            );
                          }
                          return (
                            <motion.line
                              key={i}
                              x1={arrow.x1}
                              y1={arrow.y1}
                              x2={arrow.x2}
                              y2={arrow.y2}
                              stroke="#000"
                              strokeWidth="1"
                              markerEnd="url(#arrowhead)"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                            />
                          );
                        })}
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="4"
                            markerHeight="4"
                            refX="4"
                            refY="2"
                            orient="auto"
                          >
                            <polygon points="0 0, 4 2, 0 4" fill="#000" />
                          </marker>
                        </defs>
                      </svg>
                    )}
                    
                    {feature.chartType === "venn" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        <motion.circle
                          cx="40"
                          cy="25"
                          r="18"
                          fill="none"
                          stroke="#000"
                          strokeWidth="1"
                          initial={{ r: 0 }}
                          whileInView={{ r: 18 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <motion.circle
                          cx="60"
                          cy="25"
                          r="18"
                          fill="none"
                          stroke="#000"
                          strokeWidth="1"
                          initial={{ r: 0 }}
                          whileInView={{ r: 18 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.text
                          x="30"
                          y="25"
                          fontSize="5"
                          textAnchor="middle"
                          fill="#000"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.9 }}
                        >
                          You
                        </motion.text>
                        <motion.text
                          x="70"
                          y="25"
                          fontSize="5"
                          textAnchor="middle"
                          fill="#000"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 1 }}
                        >
                          Partners
                        </motion.text>
                        <motion.text
                          x="50"
                          y="25"
                          fontSize="5"
                          textAnchor="middle"
                          fill="#000"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 1.1 }}
                        >
                          Growth
                        </motion.text>
                      </svg>
                    )}
                    
                    {feature.chartType === "radar" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Radar background */}
                        {[1, 2, 3].map((radius, i) => (
                          <motion.circle
                            key={i}
                            cx="50"
                            cy="25"
                            r={radius * 8}
                            fill="none"
                            stroke="#ccc"
                            strokeWidth="0.5"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                          />
                        ))}
                        {/* Radar axes */}
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                          const radians = (angle * Math.PI) / 180;
                          const x2 = 50 + Math.cos(radians) * 24;
                          const y2 = 25 + Math.sin(radians) * 24;
                          return (
                            <motion.line
                              key={i}
                              x1="50"
                              y1="25"
                              x2={x2}
                              y2={y2}
                              stroke="#ccc"
                              strokeWidth="0.5"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                            />
                          );
                        })}
                        {/* Radar data points */}
                        {[
                          { angle: 0, value: 0.9 },
                          { angle: 60, value: 0.7 },
                          { angle: 120, value: 0.8 },
                          { angle: 180, value: 0.95 },
                          { angle: 240, value: 0.85 },
                          { angle: 300, value: 0.75 }
                        ].map((point, i) => {
                          const radians = (point.angle * Math.PI) / 180;
                          const x = 50 + Math.cos(radians) * 24 * point.value;
                          const y = 25 + Math.sin(radians) * 24 * point.value;
                          return (
                            <motion.circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="1.5"
                              fill="#000"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.9 + i * 0.08 }}
                            />
                          );
                        })}
                        {/* Radar plot line */}
                        <motion.path
                          d="M73.6,25 L60.2,37.8 L36,45.2 L26.4,25 L36,4.8 L60.2,12.2 Z"
                          fill="none"
                          stroke="#000"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 1.3 }}
                        />
                      </svg>
                    )}
                  </div>
                  
                  {/* Hand-drawn annotation */}
                  <div className="absolute bottom-2 right-2">
                    <motion.svg
                      width="50"
                      height="24"
                      viewBox="0 0 50 24"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                    >
                      <path
                        d="M2,12 C5,8 15,4 25,8 C35,12 45,8 48,5"
                        fill="none"
                        stroke="#F00"
                        strokeWidth="0.8"
                        strokeDasharray="2,1"
                      />
                      <text x="40" y="22" fontSize="6" fill="#F00" fontStyle="italic">
                        +41%
                      </text>
                    </motion.svg>
                  </div>
                  
                  {/* Paper edge effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-transparent to-zinc-200" />
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
          className="mt-12 bg-white border border-zinc-300 rounded-md p-8 shadow-md max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Notepaper lines */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent,transparent_23px,#e6e6e6_23px,#e6e6e6_24px)] bg-[size:100%_24px]" />
          
          {/* Hand-drawn circle around text */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <path
              d="M30,10 C60,0 270,0 300,10 C310,30 310,100 300,120 C270,130 60,130 30,120 C20,100 20,30 30,10 Z"
              fill="none"
              stroke="#000"
              strokeWidth="1"
              strokeDasharray="3,2"
            />
          </motion.svg>
          
          <p className="text-black text-lg text-center font-mono relative z-10">
            The Oroshiuri System blends proven strategies with cutting-edge technology, delivering an adaptable framework that optimizes your real estate investment returns.
          </p>
          
          {/* Hand-drawn underline */}
          <motion.div
            className="w-32 h-1 bg-black/80 mx-auto mt-4 relative z-10"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrosiuriSystemSection;


