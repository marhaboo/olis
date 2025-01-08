import React from "react";
import ImgOne from "@/images/solutions/hemp-growing-in-california-desert-A9YADCA 2.png"
import ImgTwo from "@/images/solutions/image 45 1.png"
import ImgThree from "@/images/solutions/image 45 1.png"
import ImgFour from "@/images/solutions/М-30 1.png"
import ImgFive from "@/images/solutions/ОПТИМАТИК-К-30 1.png"
import ImgSix from "@/images/solutions/крупоцех переработка ОВСА 2.png"
import SolCard from "../solcard/solCard";

const Solutions = () => {
  return (
    <div className="p-8">
      <h1 className="font-semiblod text-4xl ">
        Комплексные решения
      </h1>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
        <SolCard text="Зерноочистительные" image={ImgOne}  />
        <SolCard text="Крупозаводы" image={ImgTwo}  />
        <SolCard text="Мельницы" image={ImgThree}  />
        <SolCard text="Комплексное " image={ImgFour}  />
        <SolCard text="Переработка " image={ImgFive}  />
        <SolCard text="Переработка" image={ImgSix}  />
      </div>
    </div>
  );
};

export default Solutions;
