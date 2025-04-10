import React from "react";
import { motion } from "framer-motion";


const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );

export default AnimatedSection;
  