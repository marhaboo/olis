import React from "react";
import zavod from "@/images/zavod OLIS viveska 1.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4 justify-center ml-28">
        <h1 className="text-[#FEAD04] font-semiblod text-6xl border-b p-2 border-black">
          ТЕХНОЛОГИИ И ОБОРУДОВАНИЕ
        </h1>
        <p className="text-4xl p-2">
          для очистки, переработки и контроля качества зерна
        </p>
        <button className="text-white py-3 px-8 w-[200px]  bg-[#FEAD04]" >Oставить заявку</button>
      </div>

      <Image src={zavod} alt="zavod"  />
    </div>
  );
};

export default Hero;
