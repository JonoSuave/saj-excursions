import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";

interface WellnessCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const WellnessCard = ({
  title = "Yoga Retreat",
  description = "Experience transformative yoga sessions in the heart of the Andes mountains.",
  imageUrl = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
  onClick = () => {},
}: WellnessCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="h-[480px] w-[380px] cursor-pointer bg-white"
      onClick={onClick}
    >
      <Card className="h-full overflow-hidden border-none shadow-lg">
        <div
          className="h-[240px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WellnessCard;
