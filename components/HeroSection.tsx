"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import "./css/CTAButton.css";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden top-1/2">
      {/* Logo Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="/svgs/animation.svg"
          alt="Logo"
          width={80}
          height={80}
          className="bg-white rounded-l-4xl rounded-r-4xl p-4 shadow-md"
        />
      </motion.div>

      {/* Headline */}
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
        Learn With <span className="text-blue-600">Fun Animations</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        สนุกกับการเรียนรู้ผ่านภาพเคลื่อนไหว เข้าใจง่าย
        เหมาะสำหรับเด็กและผู้เริ่มต้น
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 mb-12 items-center">
        <Link href="/courses" className="primary-button flex rounded-full">
          Get Started
        </Link>

        <motion.button whileHover={{ scale: 1.05 }} className="flex">
          <Link
            href="/about"
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold
                 bg-white text-gray-700 shadow transition-all duration-300
                 hover:bg-gray-100"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Play size={22} />
            </motion.div>
            Watch Video
          </Link>
        </motion.button>
      </div>

      <motion.div
        className="absolute top-1/3 left-10 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium"
        initial={{ rotate: -11, opacity: 0 }}
        animate={{ rotate: -11, opacity: 1, y: -15 }}
        transition={{
          delay: 0.9,
          duration: 1, // ความเร็วช้า ๆ
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut", // เคลื่อนไหวเนียน
        }}
      >
        #Drawing
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-12 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium"
        initial={{ rotate: 8, opacity: 0 }}
        animate={{ rotate: 8, opacity: 1, y: -20 }}
        transition={{
          delay: 1,
          duration: 2, // ความเร็วช้า ๆ
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut", // เคลื่อนไหวเนียน
        }}
      >
        #Artwork
      </motion.div>
      <motion.div
        className="absolute top-1/6 left-1/3 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium"
        initial={{ rotate: -5, opacity: 0 }}
        animate={{ rotate: -5, opacity: 1, y: -15 }}
        transition={{
          delay: 1.2,
          duration: 1, // ความเร็วช้า ๆ
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut", // เคลื่อนไหวเนียน
        }}
      >
        #Creative
      </motion.div>
      <motion.div
        className="absolute top-1/6 right-1/5 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium"
        initial={{ rotate: 6, opacity: 0 }}
        animate={{ rotate: 6, opacity: 1, y: -20 }}
        transition={{
          delay: 1.5,
          duration: 2, // ความเร็วช้า ๆ
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut", // เคลื่อนไหวเนียน
        }}
      >
        #VisualArt
      </motion.div>
    </section>
  );
};

export default HeroSection;
