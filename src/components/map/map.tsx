import React from "react";
import ImageSrc from "@/images/map.png";
import Image from "next/image";
const Map = () => {
  return (
    <div className="flex gap-16 p-9">
      <Image src={ImageSrc} alt="about" />
      <div className="flex flex-col gap-4 justify-center">
        <h1 className=" font-semiblod text-6xl  p-2">
          В каких странах мы работаем
        </h1>
        <p className="text-[14px] p-2">
          Технологический уровень и организация нашего производства позволяет
          обеспечить высокое качество изделий по убедительным ценам и поставлять
          их более чем в 30 стран ближнего и дальнего зарубежья.
        </p>
        <button className="text-white py-3 px-8 w-[320px]  bg-[#FEAD04]">
          Открыть карту готовых проектов
        </button>
      </div>
    </div>
  );
};

export default Map;
