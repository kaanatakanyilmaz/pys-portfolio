import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PencilLine, Notebook } from "lucide-react";

function ContentRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 sm:p-1 flex flex-col w-full sm:mb-2 "
    >
      <div className="flex flex-col  items-center">
        <Link
          to={"/write3"}
          className=" lg:mr-4 leading-8  font-medium p-5 mt-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] shadow-lg text-left w-[250px] sm:w-[500px]  md:w-[700px]   "
        >
          <div>
            <div className="flex items-center gap-2">
              <Notebook size={20} className=" text-[#ff7a00]" />

              <p className="text-[#15202b]">
                BEKLEMEK KAVUŞMANIN KÖPRÜSÜDÜR.  
              </p>
            </div>
            <p className="text-[#455769]">
               Aylardan ocak. Gökyüzü mağrur, bulutlar müphem...
            </p>
            <div className="flex items-center gap-2 mt-2">
              <PencilLine size={20} className=" text-[#ff7a00]" />
              <p className="text-[#15202b] text-xs sm:text-base">
                Psk. Ömer Ünal
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/write4"}
          className=" lg:mr-4 leading-8  font-medium p-5 mt-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] shadow-lg text-left w-[250px] sm:w-[500px]  md:w-[700px]   "
        >
          <div>
            <div className="flex items-center gap-2">
              <Notebook size={20} className=" text-[#ff7a00]" />

              <p className="text-[#15202b]"> GEÇMİŞ İNSANIN GÖLGESİDİR. </p>
            </div>
            <p className="text-[#455769]">Kolay mıdır bu kadar kaçmak?</p>
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

export default ContentRight;
