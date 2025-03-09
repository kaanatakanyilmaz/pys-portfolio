import React from "react";
import {
  Instagram,
  Mail,
  BriefcaseBusiness,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col  items-center  shadow-md bg-[#263755] text-white py-8  px-4 border-t-3 border-[#d26400]"
    >
      <div className=" text-center">
        <p className="mb-3">
          "Psikolojik destek, daha iyi bir yaşamın başlangıcıdır."
        </p>
        <div className="flex justify-center gap-0 sm:gap-2 md:gap-4">
          <Link to={"/skills"} className=" hover:bg-[#ff7a00] rounded-lg p-2">
            <a href="mailto:pskomerunal@gmail.com" className="text-lg">
              <BriefcaseBusiness size={35} />
            </a>
          </Link>

          <a
            href="https://www.instagram.com/psk.omerunal/"
            target="_blank"
            className="text-lg"
          >
            <div className="hover:bg-[#ff7a00] rounded-lg p-2">
              <Instagram className="" size={35} />
            </div>
          </a>

          <div className=" hover:bg-[#ff7a00] hover:text-[#fff] rounded-lg p-2">
            <a href="mailto:pskomerunal@gmail.com" className="text-lg">
              <Mail size={35} />
            </a>
          </div>
          <Link to={"/contact"} className=" hover:bg-[#ff7a00] rounded-lg p-2">
            <a href="mailto:pskomerunal@gmail.com" className="text-lg">
              <MessageSquare size={35} />
            </a>
          </Link>
        </div>
        <div className="mt-4">
          <p>© 2025 Designed by Kaan Atakan Yılmaz.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
