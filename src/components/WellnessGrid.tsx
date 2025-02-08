import React from "react";
import WellnessCard from "./WellnessCard";
import { motion } from "framer-motion";

interface WellnessGridProps {
  offerings?: Array<{
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const WellnessGrid = ({
  offerings = [
    {
      title: "Yoga Retreat",
      description:
        "Experience transformative yoga sessions in the heart of the Andes mountains.",
      imageUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    },
    {
      title: "Meditation Sessions",
      description:
        "Find inner peace with guided meditation in serene natural settings.",
      imageUrl:
        "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80",
    },
    {
      title: "Spa Treatments",
      description:
        "Rejuvenate your body and soul with traditional South American spa therapies.",
      imageUrl:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    },
    {
      title: "Nature Walks",
      description:
        "Connect with nature through guided walks in pristine rainforests.",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    },
    {
      title: "Healing Ceremonies",
      description:
        "Participate in traditional healing ceremonies led by local practitioners.",
      imageUrl:
        "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80",
    },
    {
      title: "Mindful Cuisine",
      description:
        "Savor organic, locally-sourced meals prepared with mindful intention.",
      imageUrl:
        "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80",
    },
  ],
}: WellnessGridProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-[800px] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Wellness Offerings
          </h2>
          <p className="text-xl text-gray-600">
            Discover our curated selection of transformative experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WellnessCard
                title={offering.title}
                description={offering.description}
                imageUrl={offering.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WellnessGrid;
