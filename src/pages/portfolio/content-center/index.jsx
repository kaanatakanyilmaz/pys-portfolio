import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PencilLine, Notebook } from "lucide-react";

function ContentCenter() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full mb-14 "
    >
      <div className="flex flex-col  items-center">
        <Link
          to={"/write5"}
          className=" lg:mr-4 leading-8  font-medium p-5  rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] shadow-lg text-left w-[250px] sm:w-[500px]  md:w-[700px]   "
        >
          <div>
            <div className="flex items-center gap-2">
              <Notebook size={20} className=" text-[#ff7a00]" />

              <p className="text-[#15202b]">BİR TOPLUMUN RUHSUZLAŞMASI.</p>
            </div>
            <p className="text-[#455769]">
               Bir zamanlar söz, senet yerine geçerdi...
            </p>
            <div className="flex items-center gap-2 mt-2">
              <PencilLine size={20} className=" text-[#ff7a00]" />
              <p className="text-[#15202b] text-xs sm:text-base">
                Psk. Ömer Ünal
              </p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default ContentCenter;
