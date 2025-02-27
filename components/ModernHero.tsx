/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Building, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Animated circles */}
        <motion.div
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#FFE14D] opacity-5 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 rounded-full bg-zinc-800/60 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#FFE14D]"></span>
                <span className="text-zinc-300">AI-Powered Real Estate</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
                AI-Enhanced Investing: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f11f10] to-red-500">
                  Secure Early Property Opportunities
                </span>
              </h1>

              <p className="text-lg text-zinc-300 max-w-2xl">
                Gain early access to high-potential real estate opportunities with AI-driven insights. Plan ahead, invest smarter, and reduce costs for better outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-[#FFE14D] hover:bg-yellow-400 text-black font-medium rounded-lg px-6 text-base py-6 cursor-pointer">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-zinc-700 text-slate-700 hover:bg-zinc-800/70 hover:text-slate-50 rounded-lg px-6 text-base py-6 cursor-pointer">
                  View Properties
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
                {[
                  { icon: <Cpu className="h-5 w-5" />, text: "AI Analysis" },
                  { icon: <Building className="h-5 w-5" />, text: "Prime Properties" },
                  { icon: <BarChart3 className="h-5 w-5" />, text: "Market Insights" },
                  { icon: <Shield className="h-5 w-5" />, text: "Secure Investments" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-zinc-400"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* 3D-ish visual element representing buildings/real estate with AI overlay */}
              <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                {/* Building visual */}
                <div className="absolute bottom-0 left-6 right-6 h-3/4">
                  <div className="grid grid-cols-3 h-full gap-3">
                    {[0.85, 1, 0.7].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-zinc-700/50 backdrop-blur-sm rounded-t-lg border-t border-x border-zinc-600/30"
                        style={{ height: `${height * 100}%` }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 4,
                          delay: i * 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        {/* Windows */}
                        <div className="p-2 grid grid-cols-2 gap-2 h-full">
                          {Array(8).fill(0).map((_, j) => (
                            <div
                              key={j}
                              className="bg-blue-400/20 rounded-sm"
                              style={{
                                opacity: Math.random() > 0.3 ? 0.8 : 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-zinc-900/90">
                  <div className="absolute inset-x-0 top-8 flex justify-center">
                    <div className="px-4 py-1 bg-blue-500/20 text-blue-300 text-xs backdrop-blur-sm rounded-full border border-blue-500/30">
                      AI Analysis Active
                    </div>
                  </div>
                  
                  {/* Data points */}
                  {[
                    { x: "20%", y: "30%", value: "+12%" },
                    { x: "65%", y: "45%", value: "A+" },
                    { x: "40%", y: "70%", value: "$1.2M" },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white/10 backdrop-blur-md rounded-lg px-2 py-1 text-xs font-medium text-white border border-white/20"
                      style={{ left: point.x, top: point.y }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                    >
                      {point.value}
                    </motion.div>
                  ))}
                  
                  {/* Scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan"></div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -right-6 -top-6 bg-[#FFE14D] text-black font-medium py-2 px-4 rounded-xl shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI-Powered
              </motion.div>
              
              {/* Bottom stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-xl p-3 text-sm"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-xs">Growth Potential</div>
                    <div className="text-white font-medium">34% above market</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add a subtle parallax effect based on scroll */}
      <style jsx global>{`
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ModernHero;