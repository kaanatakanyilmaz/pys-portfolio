import React from "react";
import { motion } from "framer-motion";

function Content() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          Hakkımda
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>
      <div className="flex justify-center">
        <p className="text-[#15202b] p-8 leading-relaxed text-sm sm:text-lg text-left font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg  w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          2002 yılında Sivas’ta doğdum. 2025 yılında Düzce Üniversitesi
          Psikoloji Bölümü’nden mezun oldum. Üniversite yıllarımda Düzce
          Üniversitesi Psikoloji Topluluğu’nu kurarak üç yıl boyunca başkanlık
          yaptım ve il müdürlüğü ile üniversite iş birliğinde çeşitli projeler
          gerçekleştirdim. Sosyal ve akademik faaliyetler düzenleyerek psikoloji
          alanında farkındalık yaratmaya katkıda bulundum. Lisans sürecimde
          umutsuzluk, mutsuzluk ve depresyon üzerine yoğunlaşarak bu alanlarda
          araştırmalar yaptım. Formea Yaşam Merkezi’nde stajımı tamamladım.
          Hâlen akademik yazılar yazmaya devam etmekte, dergi ve makalelere
          katkı sağlamaktayım. Ayrıca çeşitli söyleşilere katılarak psikoloji
          alanındaki bilgi ve deneyimlerimi paylaşmaktayım. Çevrimiçi ve yüzyüze
          terapilerle hizmet vermekteyim.
        </p>
      </div>
    </motion.div>
  );
}

export default Content;
