import React, { useState } from "react";
import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";

function Write2() {
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
            Yoğun Koşuşturmacalar.
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-5 sm:p-15 leading-relaxed text-base sm:text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                Düşünmek isterim. Biz ne kadar yaşıyoruz? Hayallerimize ne kadar
                yakınız? İstediğimiz hayatı yaşayabiliyor muyuz? Hepsine olumlu
                cevap vermek isterdim şahsım olarak lakin öyle bir zamanda
                yaşıyoruz ki insanlar sabah sekiz akşam beşe kurulmuş bir alarm
                gibi. Monoton bir hayat üzerine kurgulanmış ufak şeyler mutlu
                ediyor bizleri. Bunu mu hak ediyoruz. Neden duygularımızı ve
                hayatımızı yaşayamıyoruz. Tüm duyguları içimize bastırarak;
                çalışıyoruz, çalışıyoruz ve ölüyoruz. Evet ölüyoruz. Kaç yıl
                yaşayacağımız, kaç ay, kaç dakika yaşayacağımız belirli değilken
                bir kapitalist sistem uğruna hayatı yaşamamak nedir? Her insanın
                aynı hayatı neden yaşar? Neden maddi unsurlarla birbirleriyle
                mukayese yaparlar. Nerede maneviyat, nerede huzur, sevgi,
                anlayış, empati. Sistemin kurguladığı birer piyon oluyoruz
                sadece. Yoğun koşuşturmacalar, her bir yere yetişme çabaları,
                gecikmişliğin hüsranı, yetişememenin öfkesi üzerimizde.
                Öleceğimizi bildiğimiz halde. Yüz sene sonra ismimizin,
                mezarımızın unutulacağını bildiğimiz halde neden bu
                koşuşturmaca? Saygıdeğer hocamız İoanna Kuçuradi’ nin de
                söylediği gibi: ”İnsanların robotlaştırıldığı, robotların da
                insanlaştırılmaya çalışıldığı bir dönemde yaşıyoruz”.  Her şey
                aşikar. Öleceğiz insanoğlu. Kaç saat ömrümüzün kaldığını
                bilmeden. Ömrümüzü dolu dolu, tüm duyguları bastırılmadan,
                sistemlerin bir parçası olmadan yaşayacağımız günlere ulaşmak
                dileğiyle. Hoşçakalın
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

export default Write2;
