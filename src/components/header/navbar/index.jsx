import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  House,
  User,
  FolderClosed,
  BriefcaseBusiness,
  MessagesSquare,
} from "lucide-react";

function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" relative group font-bold  text-[#f2f1fb] text-xl flex flex-col md:flex-row justify-center items-center">
        <Link
          to={"/"}
          className="ml-10 hover:text-[#fff] hover:border-b-[2px] mb-5 md:mb-0"
        >
          <div className="flex items-center">
            <House size={30} />
            <span className="ml-1">Ana Sayfa</span>
          </div>
        </Link>
        <Link
          to={"/about"}
          className="ml-6 hover:text-[#fff] hover:border-b-[2px] mb-5 md:mb-0"
        >
          <div className="flex items-center">
            <User size={30} />
            <span className="ml-1">Hakkımda</span>
          </div>
        </Link>
        <Link
          to={"/skills"}
          className="ml-6 hover:text-[#fff] hover:border-b-[2px] mb-5 md:mb-0"
        >
          <div className="flex items-center">
            <BriefcaseBusiness size={30} />
            <span className="ml-1"> Hizmetlerim</span>
          </div>
        </Link>
        <Link
          to={"/projects"}
          className="ml-6 hover:text-[#fff] hover:border-b-[2px] mb-5 md:mb-0 "
        >
          <div className="flex items-center">
            <FolderClosed size={30} />
            <span className="ml-1">Yazılar</span>
          </div>
        </Link>
        <Link
          to={"/contact"}
          className="ml-6 text-[#ff7a00] hover:border-b-[2px] mb-5 md:mb-0"
        >
          <div className="flex items-center">
            <MessagesSquare size={30} />
            <span className="ml-1">İletişim</span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default NavBar;
