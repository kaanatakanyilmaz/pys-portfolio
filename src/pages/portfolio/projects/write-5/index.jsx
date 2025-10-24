import React, { useState } from "react";
import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";

function Write5() {
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
            Bir Toplumun Ruhsuzlaşması
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-5 sm:p-15 leading-relaxed text-base sm:text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                Bir zamanlar söz, senet yerine geçerdi. İnsanlar el
                sıkıştığında, kâğıtlara dökülmüş binlerce anlaşmadan daha sağlam
                bir güven inşa edilirdi. Bir komşunun çocuğu herkesin çocuğuydu,
                bir kapı çalındığında ikram edilmeden kapı kapanmazdı. Vicdan,
                toplumsal hayatın görünmez yasasıydı; kimse başkasının hakkını
                almayı düşünmez, erdem sahibi olmak bir övünç değil, sıradan bir
                yaşam biçimiydi. Bugünse manzara çok farklı. Sözler boşaldı,
                güven ilişkilerdeki en kırılgan değer haline geldi. Dostluklar
                çıkarla ölçülür, iyilik şüpheyle karşılanır oldu. Erdem, artık
                safdillikle eş tutuluyor; “fazla iyi olmak” küçümseniyor.
                İnsanlar birbirine yaslanmak yerine duvarlar örüyor, toplumsal
                bağlar sessizce çözülüyor. Eskiden ahlak, vicdan ve güven bizi
                bir arada tutan görünmez ipliklerdi. Şimdi o iplikler tek tek
                kopuyor, yerini bencilliğin ve kayıtsızlığın sert dokusu alıyor.
                Bu sadece bireysel bir kayıp değil; toplumun ruhunu eriten,
                yavaş ama derin bir çöküştür. Belki de bugün en çok ihtiyacımız
                olan şey, büyük teoriler ya da büyük sözler değil. Küçük,
                insanca hatırlayışlar… Birine güvenmeyi göze almak, bir iyilik
                karşılığında hesap yapmamak, erdemi “zayıflık” değil, yeniden en
                büyük güç bilmek. Çünkü insanlığı kaybedince kazandığımız her
                şey, aslında elimizdeki hiçbir şeye değmeyecek.
                <p className="mt-2">
                  Eskiden saflık, temiz kalplilik kötü bir şey değildi. İnsanlar
                  birbirine güvenince kaybetmeyi değil, kazanmayı düşünürdü.
                  Birine inanmak, kandırılmak değil; insana duyulan saygının
                  göstergesiydi. Temiz kalpli olmak, hayatın doğal akışının
                  parçasıydı ve kimse bundan utanmazdı. Bugünse “uyanıklık”
                  alkışlanıyor. İnsanların başkalarının açığını bulması, üç
                  kuruş için güveni harcaması, “zekâ” ya da “hayatta kalma
                  becerisi” diye pazarlanıyor. Oysa uyanıklık çoğu zaman sadece
                  kurnazlık; kısa vadeli kazanç uğruna uzun vadeli insanlığı
                  kaybetmekten başka bir şey değil. Saflık küçümseniyor,
                  temizliğe enayi damgası vuruluyor. Oysa toplumun çimentosu,
                  tam da bu “saf” görünen güven duygusuydu. Kimsenin birbirini
                  kandırmaya gerek duymadığı, çıkarın değil samimiyetin söz
                  konusu olduğu ilişkiler insanı insan yapıyordu. Belki de asıl
                  uyanıklık, erdemi terk etmemekte gizlidir. Çünkü saflık
                  zayıflık değildir; en saf görünen güven, en güçlü bağları
                  kurar. Ve unutmayalım: Uyanık olmak insanı yalnızlaştırır, saf
                  kalmaksa insanı insan kılar.
                </p>{" "}
                <p className="mt-3">
                  Eskiden birine yardım eli uzatmak, insan olmanın en doğal
                  refleksiydi. Modern hayatta ise kötülük gittikçe
                  normalleşiyor. İnsanlar kötülüklerini birbiriyle yarıştıracak
                  bir ahlaki çöküntü içerisine giriyor
                </p>
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

export default Write5;
