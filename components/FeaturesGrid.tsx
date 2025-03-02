"use client";

import { useState } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JSX } from "react/jsx-runtime";
import { TrendingUp, Brain, Home, Lightbulb } from "lucide-react";

interface PricingCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  chartType: "line-graph" | "network" | "flow-chart" | "radar";
  image?: string;
  badge?: string;
  span?: string;
  bgColor?: string;
}

interface FeaturesGridProps {
  scrollYProgress?: MotionValue<number>;
}

const pricingCards: PricingCard[] = [
  {
    id: 1,
    title: "ORO BOT",
    subtitle: "Generative AI",
    description: "AI-powered assistant with comprehensive support for all members.",
    icon: Brain,
    chartType: "network",
    image: "/bot1.jpg",
    span: "md:col-span-2",
    bgColor: "bg-zinc-950/50",
    badge: "NEW"
  },
  {
    id: 2,
    title: "WEALTH BOT",
    subtitle: "Financial Strategies",
    description: "Advanced tools and insights for building long-term wealth.",
    icon: TrendingUp,
    chartType: "line-graph",
    image: "/bot2.jpg",
    bgColor: "bg-zinc-950/50"
  },
  {
    id: 3,
    title: "HOME BOT",
    subtitle: "Home Futures",
    description: "Revolutionary approach to home ownership in Australia.",
    icon: Home,
    chartType: "flow-chart",
    image: "/bot3.jpg"
  },
  {
    id: 4,
    title: "OPPORTUNITIES BOT",
    subtitle: "Future Assets",
    description: "Identify and capitalize on emerging opportunities for wealth creation.",
    icon: Lightbulb,
    chartType: "radar",
    image: "/bot4.jpg",
    span: "md:col-span-2",
    bgColor: "bg-zinc-950/50"
  },
];

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ scrollYProgress }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Animation values derived from scroll if provided
  const scale = useTransform(scrollYProgress || new MotionValue(), [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress || new MotionValue(), [0.3, 0.6], [0.7, 1]);
  return (
    <motion.div 
      style={{ scale, opacity }}
      className="py-16 bg-gradient-to-b from-black to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-mono tracking-tight text-white text-center mb-12"
        >
          INTELLIGENT <span className="text-red-500 font-bold">AI ECOSYSTEM</span>
          <motion.div 
            className="h-1 w-20 bg-red-500 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {pricingCards.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-container-${card.id}`}
              className={`${card.span || ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: card.id * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <Card
                className={`${card.bgColor || "bg-zinc-900"} border-zinc-800 p-8 h-full backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-zinc-800/50 relative overflow-hidden group`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Grid paper background */}
                <div className="absolute inset-0 bg-[linear-gradient(#333333_1px,transparent_1px),linear-gradient(90deg,#333333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 to-transparent"
                  initial={false}
                  animate={{ 
                    opacity: hoveredCard === card.id ? 1 : 0,
                    background: hoveredCard === card.id 
                      ? "linear-gradient(to bottom right, rgba(39, 39, 42, 0.8), transparent)" 
                      : "linear-gradient(to bottom right, rgba(39, 39, 42, 0), transparent)"
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated sketch line */}
                <motion.div 
                  className="absolute top-0 left-0 h-[2px] bg-red-500/80"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + card.id * 0.1 }}
                />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    {card.image && (
                      <motion.div 
                        className="w-16 h-16 mb-4 relative"
                        initial={false}
                        animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={64}
                          height={64}
                          className="rounded-full border-2 border-zinc-700"
                        />
                        {/* Pulsing circle effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-red-500/50"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 0, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      </motion.div>
                    )}
                    <card.icon className="text-red-500 w-8 h-8 flex-shrink-0 ml-auto" />
                  </div>
                  
                  {card.title && (
                    <h3 className="text-lg font-mono tracking-tight text-white relative font-bold">
                      {card.title}
                      <div className="absolute -bottom-2 left-0 w-full h-[2px]">
                        <motion.div 
                          className="h-full bg-red-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + card.id * 0.1 }}
                        />
                      </div>
                    </h3>
                  )}
                  
                  {card.subtitle && (
                    <motion.h2
                      className="text-3xl font-bold leading-none tracking-tight text-white"
                      initial={false}
                      animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.subtitle}
                    </motion.h2>
                  )}
                  
                  {card.description && (
                    <p className="text-zinc-400 text-sm">{card.description}</p>
                  )}
                  
                  {/* Chart/Visualization Area */}
                  <div className="mt-4 h-24 relative overflow-hidden">
                    {card.chartType === "line-graph" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Grid lines */}
                        <g stroke="#333333" strokeWidth="0.5">
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
                          stroke="red"
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
                            fill="red"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                          />
                        ))}
                      </svg>
                    )}
                    
                    {card.chartType === "network" && (
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
                            fill="#1A1A1A"
                            stroke="red"
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
                            stroke="red"
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
                    
                    {card.chartType === "flow-chart" && (
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
                              fill="#1A1A1A"
                              stroke="red"
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
                              fill="red"
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
                                stroke="red"
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
                              stroke="red"
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
                            <polygon points="0 0, 4 2, 0 4" fill="red" />
                          </marker>
                        </defs>
                      </svg>
                    )}
                    
                    {card.chartType === "radar" && (
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        {/* Radar background */}
                        {[1, 2, 3].map((radius, i) => (
                          <motion.circle
                            key={i}
                            cx="50"
                            cy="25"
                            r={radius * 8}
                            fill="none"
                            stroke="#333333"
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
                              stroke="#333333"
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
                              fill="red"
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
                          stroke="red"
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
                  <div className="absolute bottom-3 right-3">
                    <motion.svg
                      width="50"
                      height="24"
                      viewBox="0 0 50 24"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5 + card.id * 0.1 }}
                    >
                      <path
                        d="M2,12 C5,8 15,4 25,8 C35,12 45,8 48,5"
                        fill="none"
                        stroke="red"
                        strokeWidth="0.8"
                        strokeDasharray="2,1"
                      />
                      <text x="40" y="22" fontSize="6" fill="red" fontStyle="italic">
                        +41%
                      </text>
                    </motion.svg>
                  </div>
                </div>
                
                {/* Badge */}
                {card.badge && (
                  <motion.div
                    className="absolute bottom-4 right-6 bg-red-500 px-4 py-1 rounded-full text-black font-medium"
                    initial={false}
                    animate={{ 
                      scale: hoveredCard === card.id ? 1.1 : 1,
                      y: hoveredCard === card.id ? -5 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.badge}
                  </motion.div>
                )}
                
                {/* Glass reflection effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === card.id ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
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
          className="mt-12 bg-zinc-950 border border-zinc-800 rounded-md p-8 shadow-lg max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Notepaper lines */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent,transparent_23px,#222222_23px,#222222_24px)] bg-[size:100%_24px]" />
          
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
              stroke="red"
              strokeWidth="1"
              strokeDasharray="3,2"
            />
          </motion.svg>
          
          <p className="text-white text-lg text-center font-mono relative z-10">
            Our AI ecosystem integrates cutting-edge technology with human expertise, delivering personalized solutions that adapt to your evolving needs.
          </p>
          
          {/* Hand-drawn underline */}
          <motion.div
            className="w-32 h-1 bg-red-500 mx-auto mt-4 relative z-10"
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

export default FeaturesGrid;