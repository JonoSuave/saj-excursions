import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import WellnessGrid from "./WellnessGrid";
import ContactForm from "./ContactForm";

const Home = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleContactSubmit = (data: any) => {
    console.log("Contact form submitted:", data);
    setIsContactFormOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-white"
    >
      <Navigation onContactClick={handleContactClick} />
      <HeroSection />
      <WellnessGrid />
      <ContactForm isOpen={isContactFormOpen} onSubmit={handleContactSubmit} />
    </motion.div>
  );
};

export default Home;
