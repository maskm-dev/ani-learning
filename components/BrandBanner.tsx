"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BrandBanner = () => {
  const logos = [
    { src: "/svgs/duolingo-logo.svg", alt: "Duolingo", width: 80 },
    { src: "/svgs/microsoft-logo.svg", alt: "Microsoft", width: 100 },
    { src: "/svgs/google-logo.svg", alt: "Google", width: 100 },
    // เพิ่ม Logo อื่นๆ ตรงนี้ได้เลย
  ];

  return (
    <section className="w-full overflow-hidden">
      {/* Trusted By / Partner Section */}
      <div className="w-full bg-linear-to-r from-purple-600 to-indigo-300 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <span className="block text-white font-semibold text-center mb-6">
            Trusted By
          </span>

          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            {/* ก้อนที่ 1: วิ่งจาก 0 ไป -100% */}
            <motion.div
              className="flex gap-12 pr-12 shrink-0" // pr-12 คือระยะห่างระหว่างก้อนที่ 1 กับ 2 ให้เท่ากับ gap
              animate={{ x: "-200%" }}
              transition={{
                repeat: Infinity,
                duration: 20, // ปรับความเร็วตรงนี้ (เลขมาก = ช้า)
                ease: "linear",
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[100px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="object-contain h-8 sm:h-10" // responsive height
                  />
                </div>
              ))}
            </motion.div>

            {/* ก้อนที่ 2: วิ่งตามกันมาติดๆ (เหมือนก้อนแรกเป๊ะ) */}
            <motion.div
              className="flex gap-12 pr-12 shrink-0"
              animate={{ x: "-200%" }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex items-center justify-center min-w-[100px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="object-contain h-8 sm:h-10"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandBanner;
