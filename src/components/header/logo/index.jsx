import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className=" font-extrabold leading-12 text-3xl text-[#133a9f] p-3"
      >
        <Link to={"/"} class="relative group">
          <div className=" flex flex-row md:flex-col items-center text-gray-100 text-3xl md:text-2xl   font-bold relative mb-16 lg:mb-4">
            <div className="flex flex-col items-center">
              <img src="/images/logo.png" alt="" className=" h-25 rounded-xl" />

              <div className="   text-[#f2f1fb]">Psk. Ömer Ünal</div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Logo;
