import React from "react";
import ImgOne from "@/images/services/Group 204.png"
import ImgTwo from "@/images/services/Group 205.png"
import ImgThree from "@/images/services/Group 206.png"
import ImgFour from "@/images/services/Group 208.png"
import ImgFive from "@/images/services/Group 209.png"
import ImgSix from "@/images/services/Group 209 (1).png"
import SerCard from "../sercard/serCard";

const Services = () => {
  return (
    <div className="p-8">
      <h1 className="font-semiblod text-4xl ">
        Услуги
      </h1>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
        <SerCard text="Монтаж" image={ImgOne}  />
        <SerCard text="Сервис" image={ImgTwo}  />
        <SerCard text="Гарантийное" image={ImgThree}  />
        <SerCard text="Инжиниринг " image={ImgFour}  />
        <SerCard text="Реконструкции " image={ImgFive}  />
        <SerCard text="Автоматизация" image={ImgSix}  />
      </div>
    </div>
  );
};

export default Services;
