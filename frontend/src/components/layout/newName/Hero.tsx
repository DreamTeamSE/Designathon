"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}  
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          className="pt-[60px] pb-[48px] flex flex-col justify-center items-center"
        >
            <h1 className="text-2xl md:text-[4em] font-bayon select-none relative group">
                SCHEDULE
            </h1>
        </motion.div>
    );
}
