import React from "react";
import ImageSrc from "@/images/image 20 (1).png";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4 justify-center ml-28">
        <h1 className=" font-semiblod text-6xl  p-2">
          О нас
        </h1>
        <p className="text-[14px] p-2">
          Лидер зерноочистительного оборудования в Украине. Наша компания
          специализируется в разработке, производстве и внедрении в
          промышленность технологий и оборудования для переработки зерна.
          Сегодня мы обладаем оригинальными современными технологиями и
          оборудованием по всем основным направлениям очистки зерна,
          производства муки и крупы, что подтверждается более чем 30-ю патентами
          в указанной области. ООО «ОЛИС» выпускает около 200-т наименований
          оборудования и располагает возможностью производства различных
          зерноочистительных комплексов, мельниц и крупоцехов от этапа
          разработки до ввода в эксплуатацию.
        </p>
        <button className="text-white py-3 px-8 w-[200px]  bg-[#FEAD04]">
          Cкачать каталог
        </button>
      </div>

      <Image src={ImageSrc} alt="about" />
    </div>
  );
};

export default About;
