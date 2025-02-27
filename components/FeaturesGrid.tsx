"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image"; // Import the Image component from Next.js

interface PricingCard {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: JSX.Element;
  badge?: string;
  image?: string; // Add image path for each bot
  price?: {
    current: string;
    old?: string;
  };
  span?: string;
  bgColor?: string;
}

const pricingCards: PricingCard[] = [
  {
    id: 1,
    title: "Oro Bot",
    subtitle: "Generative AI for the Benefit of Members",
    description:
      "AI-powered assistant for supporting members.",
    image: "/bot1.jpg", // Replace with the actual path to the Oro Bot image
    span: "md:col-span-2",
    bgColor: "bg-zinc-950/50",
  },
  {
    id: 2,
    title: "Wealth Creation Bot",
    subtitle: "Financial strategies for members",
    description:
      "Empowering members with wealth-building tools.",
    image: "/bot2.jpg", // Replace with the actual path to the Wealth Creation Bot image
    bgColor: "bg-zinc-950/50",
  },
  {
    id: 3,
    title: "Home Bot",
    subtitle: "Home Futures: The Future of Homes",
    description:
      "Revolutionizing home ownership in Australia.",
    image: "/bot3.jpg", // Replace with the actual path to the Home Bot image
  },
  {
    id: 4,
    title: "Opportunities Bot",
    subtitle: "Opportunities Futures: Build Tomorrow's Wealth Today",
    description:
      "Unlocking opportunities for future wealth creation.",
    image: "/bot4.jpg", // Replace with the actual path to the Opportunities Bot image
    span: "md:col-span-2",
    bgColor: "bg-zinc-950/50",
  },
];

const FeaturesGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-center mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min lg:max-w-7xl lg:w-full">
        {pricingCards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            className={`${card.span || ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: card.id * 0.1 }}>
            <Card
              className={`${card.bgColor || "bg-zinc-900"} border-zinc-800 p-8 h-full backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-zinc-800/50 relative overflow-hidden group`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: hoveredCard === card.id ? 1 : 0 }}
              />
              <div className="space-y-4 relative z-10">
                {card.image && (
                  <div className="w-16 h-16 mb-4">
                    <Image
                      src={card.image}
                      alt={card.title || "Bot Image"}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                )}
                {card.title && (
                  <motion.h3
                    className="text-xl font-semibold text-white"
                    initial={false}
                    animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}>
                    {card.title}
                  </motion.h3>
                )}
                {card.subtitle && (
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold leading-none tracking-tight text-[#FFE14D]"
                    initial={false}
                    animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}>
                    {card.subtitle}
                  </motion.h2>
                )}
                {card.description && (
                  <p className="text-zinc-400 text-sm">{card.description}</p>
                )}
              </div>
              {card.badge && (
                <motion.div
                  className="absolute bottom-4 cursor-pointer right-6 bg-[#FFE14D] px-4 py-1 lg:py-2 rounded-full text-black font-medium"
                  initial={false}
                  animate={{ scale: hoveredCard === card.id ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}>
                  {card.badge}
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesGrid;