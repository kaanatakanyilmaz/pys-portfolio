import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PencilLine } from "lucide-react";
function Write1() {
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
             Nedir Yaşamak?
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-5 sm:p-15 leading-relaxed text-base sm:text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                Belki beş dakika, belki elli gün, belki de elli yıl kaldı
                ömrümüzden bize, ne fark eder ki? Belki son kahkahamızı
                atacağız, belki son gözyaşımızı dökeceğiz hiç farkında olmadan.
                Son nefesi verdiğimizde yarım kalacak bütün her şey; evlilikler,
                aşklar, çocuklar, dostluklar, umutlar, hayaller. Dünya yarım
                kalma yeridir. Hepimiz bir cesedi sırtlamış ufacık bir ruhuz.
                Ayrılacağı zaman bu ruhumuz, kubbesinde güvercinlerin uçuştuğu,
                şadırvanında telaşlarla abdestlerin alındığı bir camide, tahta
                gıcırtılı bir tabutta uzanırken bulacağız kendimizi. Er kişi
                diye niyetlenir omuzlanıp götürülürsün sıra mezarlılarından
                birine. Ölüyü bırak dirisi bile kaybolur, bu üstü çiçek altı
                ceset kaynayan mezarlıkta. İki metrelik derin çukurda
                sevdiklerin atacak kürek kürek toprağı üzerine. Ne kadar da
                basitmiş veda etmek, son kez bile sarılamadan onlara.
                Arkadaşların bir ay, dostların üç beş ay, ailen birkaç sene
                sonra ağır ağır unutacaklar. Büyük nimettir unutmak. Yoksa
                kalanlar yaşayabilir miydi? Veya gidenler. Elli sene sonra
                tamamen çürümüş ve kimsesiz toprak yığını haline dönüşürsün.
                Belki yeni umutların arandığı bir evde, tozlanmış bir çerçevenin
                içerisinde kalır fotoğrafın. Yarım kalan emeklerin, başarıların,
                hırsların, zaferlerin, kazanma uğruna harcadıkların, kaybetme
                uğruna varlığını güvence altında tuttukların. Yüreğinin avcuna
                sığmadığı zamanlar, gözünden yaşların dinmediği günler, sevdiğin
                sevildiğin insanlar, yaşama tutunmak için umut taşıyan kalbin,
                tökezlediğinde elinden tuttuğun dostun, gözlerine bakmaya
                doyamadığın sevdiğin, hastane koridorlarında korkulu bekleyişin,
                elleri üşümesin diye eldiven ördüğün evladın, seni pamuk
                ipliğine sarıp sarmalayan ailen, mutlu olmak uğruna kazandığın
                paralar, hayallerini gerçekleştirme uğruna edindiğin meslek,
                yüreğini cam kırıklarıyla kesen anlar, harcadığımız bir ömür.
                Bir kuru çınarın gözyaşları gibi usul usul akıp gider
                yaprakları, artık hepsi yok olmuştur. Oysa nedir yaşamak?
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

export default Write1;
