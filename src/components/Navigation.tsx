import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface NavigationProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    subItems?: Array<{ label: string; href: string; description?: string }>;
  }>;
  onContactClick?: () => void;
}

const Navigation = ({
  logo = "Wellness Retreat",
  menuItems = [
    {
      label: "Experiences",
      href: "#experiences",
      subItems: [
        {
          label: "Yoga",
          href: "#yoga",
          description: "Find your inner peace through yoga",
        },
        {
          label: "Meditation",
          href: "#meditation",
          description: "Discover mindfulness practices",
        },
        {
          label: "Spa",
          href: "#spa",
          description: "Rejuvenate your body and soul",
        },
      ],
    },
    { label: "About", href: "#about" },
    { label: "Locations", href: "#locations" },
  ],
  onContactClick = () => {},
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 bg-white",
        {
          "bg-white/80 backdrop-blur-md shadow-sm": isScrolled,
          "bg-transparent": !isScrolled,
        },
      )}
    >
      {/* Logo */}
      <div className="h-16 w-16">
        <img
          src={logo}
          alt="South American Journeys"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.subItems ? (
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href={item.href}
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
                {item.subItems && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <NavigationMenuLink
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.label}
                            </div>
                            {subItem.description && (
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {subItem.description}
                              </p>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          onClick={onContactClick}
          variant="outline"
          className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
        >
          Contact Us
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              variant="outline"
              className="w-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
