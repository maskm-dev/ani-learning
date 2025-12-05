"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2
                 w-[90%] max-w-5xl rounded-2xl px-6 py-3
                 flex items-center justify-between
                 backdrop-blur-md bg-white/30 shadow-lg border border-white/20 z-10"
    >
      {/* ซ้าย: Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* กลาง: Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/lessons">Lessons</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/resources">Resources</Link>
      </div>

      {/* ขวา: About */}
      <div>
        <Link
          href="/about"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <BookMarked size={18} />
          About
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
