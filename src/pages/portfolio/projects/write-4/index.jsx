import React, { useState } from "react";
import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";

function Write4() {
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
            Geçmiş İnsanın Gölgesidir.
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-5 sm:p-15 leading-relaxed text-base sm:text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                 Kolay mıdır bu kadar kaçmak? Hunharca koşmak, bakmaksızın
                arkasına… Bırakır mısın tüm geçmişi arkanda? Yoksa kendinden mi
                kaçmaya çalışırsın en çok? Geçmişinden kurtulabilir misin
                gerçekten diye sorarsak şöyle cevaplar İbrahim Tenekeci. “Geçmiş
                insanın gölgesi gibidir. Bazen arkamızdan gelir, bazen önümüzden
                yürür. Geçmiş asla geçmez, geçen ömürdür’.  Kendimizden,
                geçmişimizden kurtulmaya çalışırken ömrümüzden kaybederiz.
                Yıllar düşündürdükçe geçmişi aslında bir o kadar gelecekten
                kısarız zamanı. Şöyle demişti Nilgün Marmara; “Biz niye kendi
                zamanlarımızı yaşayamıyoruz? Niye hep başka zamanlar ve hep
                başka kendimiz?” Kemal Sayar’ın da dediği gibi “Geçmiş olan
                geçip gitmiştir. Geçmiş gelmek üzeredir.” Arkaya bakarken düz
                yürümek mümkün değildir. Irvin D. Yalom’un varoluşçu
                psikoterapisinde de görürüz benzer açıklamayı. “Nevrotik kişi
                geçmişi gelecekte bulmaya çalışarak yaşadığı anı yok eder.”
                Şüphesiz hayat hep yolda olmaktır. Yolun sonu göründüğü halde
                halen yolda olmaktır. ”Bazen hüzün girdabı içine çekiliriz. Bin
                bir soru yaklaşır zihnimize. Oturduğumuz yerde soluk soluğa
                kalırız. Toparlanmak isteriz. Bunun için bir söz bekleriz, güçlü
                bir söz. Doğan Cüceloğlu’ndan; Sen hüzünlüsün diye dünya durup
                sana yol vermeyecek.”(Yağız Gönüler)  Peki ya devam etmek o
                kadar kolay mıdır? İbn Haldun “geçmişler geleceğe, suyun suya
                benzemesinden daha çok benzer”. Dediği halde. Yaşantıların,
                geçmişin izi hem önünde hem arkandayken. Yolculuğun güzel
                olduğunu bilirsin fakat ulaşacağını da, yolculuğun biteceğini de
                bilirsin sonunda. Anın içinde oyalarsın kendini. Geçmişten,
                gelecekten kurtulmak istersin fakat kurtulabilir misin onlardan?
                Halka zincirler gibidir insan ve zaman. Ne insan zamandan kopar
                ne de zaman insandan. Ne geçmişten kurtulabilir insan ne de
                geleceğinden. En zoru ise düşündükçe geçmişe saplanmasıdır
                hayatın. Ne kadar kaçsan da, koşsan da atamazsın kafanın
                içindekileri, kurtulamazsın onlardan. Keskin bir söz bırakıyor
                Gazap Üzümleri adlı yapıtında John Steinberg “Ancak yeni doğan
                bir bebek baştan başlayabilir. Sen, ben… Biz artık geçmiş
                zamanız.”   İzlemek kalır insana en çok. Hayatın onu nasıl
                savurduğunu zamandan zamana. Elden gelmez maalesef bir şey.
                Kurtulamayacağımız geçmişi özetlemiş Nabakov: “Geçmiş en soylu
                yakacaktır. Kişi önünü (geleceğini) görmek için yakar geçmişini.
                Kimi ise sadece ısıtmak için biraz olsun hayatla olan buz tutmuş
                ilişkisini. 
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

export default Write4;
