"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ContactHeader() {
  return (
    <div className="relative mb-12 flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[200px] w-[200px]"
      >
        <Image
          src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/434977858_920154906785150_3660562040701610950_n.jpg"
          alt="SRN Photography"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-center text-3xl font-bold sm:text-4xl"
      >
        Get in Touch
      </motion.h1>
    </div>
  );
}