import Image from "next/image";
import Logo from "@/images/Слой 0 1.svg";
import { Phone, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-evenly text-[12px]  p-6 items-center">
        <Image src={Logo} alt="olis-logo" width={150} height={60} />
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center text-[12px] border-b border-black py-2">
            <p>О компании <span className="inline-block rotate-90">&gt;</span></p>
            <p>Обьекты <span className="inline-block rotate-90">&gt;</span></p>
            <p>Пресс-центр <span className="inline-block rotate-90">&gt;</span></p>
            <p>Видео <span className="inline-block rotate-90">&gt;</span></p>
            <p>Контакты <span className="inline-block rotate-90">&gt;</span></p>
          </div>
          <div className="flex gap-4 justify-center text-[12px]  py-2">
            <p>Комплексные решения <span className="inline-block rotate-90">&gt;</span></p>
            <p>Наше оборудование <span className="inline-block rotate-90">&gt;</span></p>
            <p>Оснащение лабораторий <span className="inline-block rotate-90">&gt;</span></p>
            <p>Услуги компании <span className="inline-block rotate-90">&gt;</span></p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 items-center">
        <Search />
        <div className="bg-white p-3 rounded-md shadow-md">
          <select className="font-bold text-lg" name="language" id="language-select">
            <option value="ru">Ru</option>
          </select>
        </div>
        <div className="flex flex-col ">
          <p>Наши номера</p>
          <div className="flex items-center gap-2">
            <Phone />
            <p className="font-bold text-[12px] ">+38 (067) 822-85-58</p>
            <span className="inline-block rotate-90 font-bold text-lg">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
