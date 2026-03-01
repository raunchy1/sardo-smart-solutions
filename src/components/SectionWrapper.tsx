import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-4 ${className}`}
    >
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </motion.section>
  );
}
