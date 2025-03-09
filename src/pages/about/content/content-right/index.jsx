import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContentLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center  mb-20 lg:mt-5 ">
        <div className="relative  w-50 h-50 sm:w-80 sm:h-80 rounded-2xl flex justify-center items-center  ">
          <img
            src="/images/profile-foto.jpg"
            alt="Profile"
            className="absolute p-0.5 top-0.5 left-0.5 border-3 border-[#ff7a00] shadow-lg h-50 sm:h-80 rounded-xl  "
          />
          <Link
            to={"/contact"}
            className="absolute top-45 sm:top-70   font-bold text-normal sm:text-xl bg-[#15202b]  text-white py-2 px-20 sm:px-33 border-3 hover:border-[#ff7a00] hover:bg-[#23313f] rounded-xl shadow-lg
              "
          >
            İletişim
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ContentLeft;
