import React, { useState } from "react";
import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";

function Write3() {
  return (
    <div className="bg-[#f2f1fb]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-5 px-20 flex flex-col w-full  "
      >
        <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
          <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
            Beklemek Kavuşmanın Köprüsüdür.
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-5 sm:p-15 leading-relaxed text-base sm:text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                 Aylardan ocak. Gökyüzü mağrur, bulutlar müphem... Çağırıyoruz
                en içtenlikle baharı. sevdiğimizden değil, özlediğimizden. Çok
                farklıdır sevmek ve özlemek. Özlemek için hasret gerekir.
                Yeterince çekersen o hasreti özlersin ancak o zaman. Gökyüzünü
                özledik. O meltemin sıcak dokunuşunu özledik yüzümüze. Belki bir
                kuş cıvıltısını özledik. Baharda uçan kuşlar mıydı, umutlar
                mıydı yoksa? Ne uzaksa onu özledik efendim. Oğuz Atay'ın da
                dediği gibi:  Baharda kışı, kışın da baharı özler insan. Ne
                uzaksa onu özler. Kavuşmak şart mı? Boş ver! Bazı şeyler yokken
                güzel. Şart mıdır sizce kavuşmak? Kavuşmak şart olsaydı Mecnun,
                Mecnun olur muydu? Ya da  Ferhat, Ferhat olur muydu? Kalır mıydı
                o acı hayat hikayeleri? Kavuşmak bir yana beklemek bir yana."
                Beklemek kavuşmanın köprüsüdür." Beklemek olmazsa özlemek olmaz,
                özlemek olmazsa kavuşmak olmaz. Zordur ki beklemek, kavuşmak bu
                yüzden yüce olsun. Beklemenin ne kadar zor olduğunu şöyle
                anlatmış William Shakespeare: "Beklemek cehennemdir." Ve sonra
                eklemiş" Ama beklerim seni." beklemek de biter. Kavuşmak vardır
                yine sonunda; en kötüsü toprağa.. En acısı da budur işte;
                "Mahşere kalmış kavuşmaların baharıdır ölüm." "Beklemenin
                dünyaya ,özlemenin insana, kavuşmanın da mahşere kalmaması
                dileğiyle." esen kalın.
              </p>
              <div className="flex items-center gap-5 my-5">
                <PencilLine size={20} className=" text-[#ff7a00]" />
                <span>Psk.Ömer Ünal </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Write3;
