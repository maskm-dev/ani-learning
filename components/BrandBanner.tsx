"use client";

import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const BrandBanner = () => {
  const logos = [
    { src: "/svgs/github.png", alt: "Github", width: 100 },
    { src: "/svgs/microsoft.png", alt: "Microsoft", width: 100 },
    { src: "/svgs/google.svg", alt: "Google", width: 100 },
    { src: "/svgs/netflix.png", alt: "Netflix", width: 100 },
    { src: "/svgs/pinterest.png", alt: "Pinterest", width: 100 },
  ];

  return (
    <section className="w-full">
      <div className="w-full bg-linear-to-r from-purple-700 to-indigo-30 py-6">
          <span className="block text-white text-2xl font-semibold text-center mb-6">
            Trusted By
          </span>

          <Slider
            width="200px" // ความกว้างของแต่ละ slide
            duration={20} // ความเร็ว (เลขมาก = ช้า)
            pauseOnHover={false} // หยุดเมื่อ hover
            blurBorders={false} // เบลอขอบ
            toRight={false} // เลื่อนจากซ้ายไปขวา (false = ซ้าย→ขวา, true = ขวา→ซ้าย)
          >
            {logos.map((logo, index) => (
              <Slider.Slide key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={40}
                  className={`object-contain ${logo.alt === "Netflix" ? "h-12 sm:h-16" : "h-8 sm:h-10"}`}
                />
              </Slider.Slide>
            ))}
          </Slider>
      </div>
    </section>
  );
};

export default BrandBanner;
