import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  House,
  User,
  FolderClosed,
  BriefcaseBusiness,
  MessagesSquare,
} from "lucide-react";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: "/", label: "Ana Sayfa", icon: <House size={30} /> },
    { to: "/about", label: "Hakkımda", icon: <User size={30} /> },
    {
      to: "/skills",
      label: "Hizmetlerim",
      icon: <BriefcaseBusiness size={30} />,
    },
    { to: "/projects", label: "Yazılar", icon: <FolderClosed size={30} /> },
    { to: "/contact", label: "İletişim", icon: <MessagesSquare size={30} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group font-bold text-[#f2f1fb] text-xl flex flex-col md:flex-row justify-center items-center">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`ml-6 mb-5 md:mb-0 hover:text-white flex items-center transition-all ${
              currentPath === item.to
                ? "text-[#ff7a00] border-b-2 border-[#ff7a00]"
                : ""
            }`}
          >
            {item.icon}
            <span className="ml-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default NavBar;
