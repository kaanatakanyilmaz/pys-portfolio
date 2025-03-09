import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Content() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center mt-12"
    >
      <div className="flex flex-col items-center leading-20">
        <div className="flex flex-row items-center ">
          <h1 className=" text-[20px] md:text-[50px] text-[#15202b] font-bold md:font-normal">
            Psikolog
          </h1>
          <h1 className="font-extrabold text-[30px] md:text-[70px] text-[#ff7a00] ml-6">
            Ömer Ünal
          </h1>
        </div>
        <TypeAnimation
          className="font-bold text-[18px] md:text-[30px] text-[#15202b] max-w-[90%] text-center"
          sequence={[
            "Bireysel ve Online Danışmanlık",
            1500,
            "Çift Evlilik Danışmanlığı",
            1500,
            "Aile Danışmanlığı",
            1500,
            "Cinsel Terapi",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <div className="flex flex-col items-center mt-10 mb-10">
          <p className="leading-8 text-lg font-medium p-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-center w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px]">
            Psikolog Ömer Ünal, Bilişsel Davranışçı Terapi (BDT), Kabul ve
            Kararlılık Terapisi (ACT) ve Cinsel Terapi alanlarında uzmanlaşmış;
            yetişkin, çocuk ve ergenlere bilimsel temelli psikolojik destek
            sunmaktadır. Bireylerin duygu ve düşüncelerini sağlıklı şekilde
            yönetmelerine yardımcı olmak, psikolojik iyi oluşlarını güçlendirmek
            ve yaşam kalitelerini artırmalarına rehberlik etmektir. Güvenilir,
            etik ve etkili bir terapi süreciyle yüzyüze ve online şekilde
            danışanların kendilerini keşfetmelerine destek olmayı
            hedeflemektedir.
          </p>
          <Link
            to={"/about"}
            className="bg-[#1e3042] text-xl rounded-2xl px-18 py-3 font-bold  text-white mt-5 shadow-lg hover:bg-[#23313f] border-3 hover:border-[#ff7a00]"
          >
            Daha Fazlası
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Content;
