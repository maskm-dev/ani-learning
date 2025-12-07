"use client";

import { Search, GraduationCap, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const CourseSearch = () => {
  const [focused, setFocused] = useState(false);

  return (
    <section className="w-full flex flex-col mb-10">
      <div className="w-full py-12 flex justify-center px-4">
        <motion.div
          initial={{ borderRadius: 30 }}
          animate={{ borderRadius: focused ? 8 : 30 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center w-full max-w-xl mx-auto bg-gray-100 px-10 py-2"
        >
            <Search size={22} />
          {/* Input */}
          <input
            type="text"
            placeholder="Search Courses..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 px-6 py-4 text-base bg-transparent border-none 
                     focus:outline-none placeholder-gray-400"
          />

          {/* Search Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1, color: "#6d28d9" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center text-gray-400"
          >
            
          </motion.button>

          {/* Animated Border */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: focused ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-600 origin-center"
          />
        </motion.div>
      </div>

      {/* Features / Benefits Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* gap-2: ลดระยะห่างรูปลง (จากเดิม gap-4) */}
          {/* p-3: ลดระยะขอบเส้นประลงนิดหน่อยเพื่อให้กระชับกับรูป */}
          <div className="grid grid-cols-2 gap-2 border-2 border-dashed border-gray-500 rounded-2xl p-3">
            <Image
              src="/images/person1.jpg"
              alt="Student 1"
              width={200}
              height={200}
              // w-36 h-36: ขนาดมือถือใหญ่ขึ้น
              // sm:w-48 sm:h-48: ขนาดจอใหญ่ขยายขึ้นอีก
              className="rounded-2xl object-cover w-36 h-36 sm:w-48 sm:h-48 mx-auto"
            />
            <Image
              src="/images/person2.jpg"
              alt="Student 2"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-36 h-36 sm:w-48 sm:h-48 mx-auto"
            />
            <Image
              src="/images/person3.jpg"
              alt="Student 3"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-36 h-36 sm:w-48 sm:h-48 mx-auto"
            />
            <Image
              src="/images/person4.jpg"
              alt="Student 4"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-36 h-36 sm:w-48 sm:h-48 mx-auto"
            />
          </div>
        </div>

        {/* Right: Text & Benefits */}
        <div className="flex flex-col gap-6 lg:mt-0 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Benefits From Our Online Learning
          </h2>
          <ul className="space-y-6">
            {" "}
            {/* เพิ่ม space-y ให้หัวข้อห่างกันนิดนึงให้อ่านง่าย */}
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Online Degrees
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Earn accredited degrees from top institutions worldwide.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <BookOpen className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Short Courses
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Learn specific skills quickly and effectively for your career.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <Users className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Community Support
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Join a vibrant community of learners and experts.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseSearch;
