import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  images?: string[];
  headline?: string;
  subheadline?: string;
}

const HeroSection = ({
  images = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
  ],
  headline = "Discover Inner Peace in South America",
  subheadline = "Luxury wellness retreats in the most serene locations",
}: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[900px] w-full overflow-hidden bg-gray-900">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl"
        >
          {subheadline}
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={previousImage}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
