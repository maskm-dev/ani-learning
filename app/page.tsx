import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white pt-24 bg-linear-to-b from-blue-300 to-blue-100">
      <Image
        src="/images/blueskywhite.png"
        alt="CloudsBg"
        width={1200}
        height={300}
        className="absolute top-0 w-full object-cover opacity-80"
      />
      {/* ส่วนเนื้อหาหลัก แบ่งเป็น 2 ฝั่ง */}
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
