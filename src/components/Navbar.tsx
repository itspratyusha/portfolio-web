"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Scrolling down
    if (current > previous && current > 100) {
      setHidden(true);
    }

    // Scrolling up
    else if (current < previous) {
      setHidden(false);
    }

    // At the very top
    if (current <= 100) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{
        y: hidden ? -100 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-2 py-3 md:h-20 md:flex-row md:justify-between md:px-8 md:py-0">

        {/* Logo */}
        <a
          href="#home"
          className="hidden text-sm font-bold tracking-tight text-cobalt md:block md:text-base lg:text-lg"
        >
          Frontend Developer
        </a>

        {/* Navigation */}
        <div className="flex rounded-full border border-white/60 bg-white/65 px-1 py-1 shadow backdrop-blur-xl sm:px-1.5 md:px-2 lg:px-3 lg:py-2">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-0 md:gap-0.5 lg:gap-1">

              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold text-cobalt transition-all hover:bg-[#31543f] hover:text-white sm:px-4 sm:py-2.5 sm:text-sm md:px-5"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-foreground/70 transition-all hover:bg-[#31543f] hover:text-white sm:px-4 sm:py-2.5 sm:text-sm md:px-5"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Projects */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-foreground/70 transition-all hover:bg-[#31543f] hover:text-white sm:px-4 sm:py-2.5 sm:text-sm md:px-5"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Skills */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#skills"
                  className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-foreground/70 transition-all hover:bg-[#31543f] hover:text-white sm:px-4 sm:py-2.5 sm:text-sm md:px-5"
                >
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="hidden rounded-full px-5 py-2.5 text-sm font-medium text-foreground/70 transition-all hover:bg-[#31543f] hover:text-white sm:block"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Get in touch */}
              <NavigationMenuItem className="ml-1 sm:ml-2">
                <NavigationMenuLink
                  href="#contact"
                  className="whitespace-nowrap rounded-full bg-cobalt px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-cobalt-600 hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm lg:px-5"
                >
                  Get in touch
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

      </nav>
    </motion.header>
  );
}