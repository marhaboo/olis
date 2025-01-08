import React from "react";
import Card from "../card/card";
import firstImgOne from "@/images/021   Gears Cutting.svg"
import firstImgTwo from "@/images/Group 109.svg"
import firstImgThree from "@/images/Group.svg"
import firstImgFour from "@/images/XMLID 1119.svg"
import firstImgFive from "@/images/flask 1.svg"
import firstImgSix from "@/images/wheat (3) 1.svg"
import secondImgOne from "@/images/0_9 1.png"
import secondImgTwo from "@/images/Mask Group.png"
import secondImgThree from "@/images/ВСМ-1000 1.png"
import secondImgFour from "@/images/НЗ 1.png"
import secondImgFive from "@/images/ОМП-1 1.png"
import secondImgSix from "@/images/Слой 0 1.png"

const Equipment = () => {
  return (
    <div className="p-8">
      <h1 className="font-semiblod text-4xl ">
        Наше оборудование
      </h1>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
        <Card text="Зерноочистительное оборудование" firstImg={firstImgOne} secondImg={secondImgOne} />
        <Card text="Зерноочистительное оборудование" firstImg={firstImgTwo} secondImg={secondImgTwo} />
        <Card text="Зерноочистительное оборудование" firstImg={firstImgThree} secondImg={secondImgThree} />
        <Card text="Зерноочистительное оборудование" firstImg={firstImgFour} secondImg={secondImgFour} />
        <Card text="Зерноочистительное оборудование" firstImg={firstImgFive} secondImg={secondImgFive} />
        <Card text="Зерноочистительное оборудование" firstImg={firstImgSix} secondImg={secondImgSix} />

      </div>
    </div>
  );
};

export default Equipment;
