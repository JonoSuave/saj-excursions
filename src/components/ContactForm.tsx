import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  isOpen?: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = ({
  onSubmit = (data) => console.log("Form submitted:", data),
  isOpen = true,
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
    >
      <Card className="w-full max-w-[480px] bg-white/95 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-gray-800">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Input
                {...register("name")}
                placeholder="Your Name"
                className="bg-white/50 border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className="bg-white/50 border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                {...register("message")}
                placeholder="Your Message"
                className="min-h-[120px] bg-white/50 border-gray-200"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
