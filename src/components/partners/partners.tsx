import React from "react";
import Card from "../card/card";
import logoOne from "@/images/partners/logo 31.svg"
import logoTwo from "@/images/partners/logo 32.svg"
import logoThree from "@/images/partners/logo 33.svg"
import logoFour from "@/images/partners/logo 34-1.svg"
import logoFive from "@/images/partners/logo 34.svg"
import logoSix from "@/images/partners/logo 35.svg"
import Image from "next/image";

const Partners = () => {
  return (
    <div className="p-8">
      <h1 className="font-semiblod text-4xl ">
        Наши партнёры
      </h1>
      
        <div className="flex justify-evenly mt-4">
          <Image src={logoOne} alt="logo"/>
          <Image src={logoTwo} alt="logo"/>
          <Image src={logoThree} alt="logo"/>
          <Image src={logoFour} alt="logo"/>
          <Image src={logoFive} alt="logo"/>
          <Image src={logoSix} alt="logo"/>
        </div>
      </div>

  );
};

export default Partners;
