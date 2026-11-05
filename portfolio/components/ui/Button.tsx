"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable button with three styles and gentle hover animation.
 * Red is used only for the primary (most important) actions.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-red text-white hover:bg-red-dark shadow-sm",
      secondary: "bg-turquoise text-white hover:bg-turquoise-dark",
      ghost:
        "bg-transparent text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
export { Button };
