import React from "react";
import {
  GraduationCap,
  Heart,
  Brain,
  MessageCircleHeart,
  Speech,
  Armchair,
  Baby,
  Waypoints,
} from "lucide-react";
import { motion } from "framer-motion";
function Service() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col mb-14 "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          Hizmetlerim
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className=" lg:mr-4 leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4">
            <Heart size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-xl font-bold ml-3 ">Cinsel Terapi</h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Cinsel işlev bozuklukları, cinsel kimlik ve yönelim konuları, ilişki
            dinamikleri ve cinsel isteksizlik gibi konularda bireylerin ve
            çiftlerin yaşadıkları sorunları ele alır. Cinsel sağlığı ve tatmini
            artırmaya yönelik bilimsel ve terapötik yöntemler kullanılarak
            bilinçli farkındalık kazandırılır.
          </p>
        </div>
        <div className=" leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4">
            <Baby size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">Aile Danışmanlığı:</h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Aile içi iletişim problemleri, evlilikle ilgili çatışmalar, boşanma
            süreci, ebeveyn-çocuk ilişkileri ve aile içi rol dengeleri gibi
            konularda destek sunar. Aile bireylerinin birbirini daha iyi
            anlamasına, empati geliştirmesine ve sağlıklı sınırlar koymasına
            yardımcı olur.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className=" lg:mr-4 leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4 ">
            <Waypoints size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">EMDR Terapisi:</h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Travma, kaygı bozuklukları, fobiler ve stresle başa çıkmada etkili
            bir yöntemdir. Göz hareketleriyle duyarsızlaştırma ve yeniden işleme
            tekniği sayesinde bireyin geçmişte yaşadığı olumsuz deneyimlerin
            etkisini azaltır ve duygusal iyileşme sürecini destekler.
          </p>
        </div>
        <div className=" leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4">
            <Speech size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">
              Kabul ve Kararlılık Terapisi (ACT):
            </h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Kişinin zorlayıcı duygu ve düşüncelerle mücadele etmek yerine onları
            kabul etmesine ve değerleri doğrultusunda bilinçli seçimler
            yapmasına odaklanır. Stres, kaygı ve depresyon gibi durumlarla başa
            çıkma becerilerini geliştirerek psikolojik dayanıklılığı artırır.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className=" lg:mr-4 leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4 ">
            <Brain size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">
              Bilişsel Davranışçı Terapi (BDT):
            </h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Duygu, düşünce ve davranışlar arasındaki ilişkiyi ele alarak bireyin
            olumsuz düşünce kalıplarını fark etmesini ve değiştirmesini amaçlar.
            Depresyon, kaygı bozuklukları, obsesif kompulsif bozukluk (OKB) ve
            stres yönetimi gibi alanlarda etkili bir terapi yaklaşımıdır.
          </p>
        </div>
        <div className=" leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4 ">
            <Armchair size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">
              Grup ve Bireysel Danışmanlık:
            </h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Bireysel danışmanlık sürecinde kişiye özel hedefler doğrultusunda
            psikolojik destek sağlanırken, grup danışmanlığı bireylerin ortak
            yaşadığı sorunlar üzerine farkındalık kazanmasını ve sosyal destek
            sistemlerinden yararlanmasını amaçlar. Kendini anlama, ilişki
            yönetimi ve problem çözme becerilerini geliştirmeye yönelik
            çalışmalar içerir.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className=" lg:mr-4 leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4 ">
            <GraduationCap size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">Öğrenci Koçluğu:</h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Akademik başarıyı artırmak, motivasyonu yükseltmek, sınav kaygısını
            azaltmak ve etkili çalışma alışkanlıkları geliştirmek için destek
            sunar. Zaman yönetimi, odaklanma becerileri, öğrenme stratejileri ve
            kariyer planlama konularında rehberlik ederek öğrencilerin
            hedeflerine ulaşmalarına yardımcı olur.
          </p>
        </div>
        <div className=" leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center mt-4 ">
            <MessageCircleHeart size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">Şema Terapisi:</h1>
          </div>

          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Şema Terapi, bireylerin çocukluk döneminde oluşan derin, yerleşik
            düşünce kalıplarını (şemalar) keşfederek, bu kalıpların günümüzdeki
            davranış, duygu ve ilişki sorunlarını nasıl etkilediğini
            anlamalarına yardımcı olan bir terapi yöntemidir. Jeffrey Young
            tarafından geliştirilen bu terapi, özellikle travmalar, kişilik
            bozuklukları ve uzun süreli psikolojik zorluklar yaşayan kişiler
            için etkili bir yaklaşımdır.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Service;
