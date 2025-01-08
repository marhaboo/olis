import Image from "next/image";
import React from "react";
import Logo from "@/images/Слой 0 1.svg";

const Footer = () => {
  return (
    <div className="flex justify-between p-8 text-[12px]">
      <div className="flex flex-col gap-4">
        <Image src={Logo} alt="logo" />
        <p>© 2021 ООО «ОЛИС». Все права защищены</p>
        <p className="text-[#FEAD04]">Карта сайта</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[16px]">Подпишись на рассылку</p>
        <input className="p-4 border-gray-400 rounded" type="text" placeholder="E-mail" name="" id="" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[16px]">Наша компания</p>
        <p>Как мы работаем</p>
        <p>Отзывы о компании</p>
        <p>Новинки компании</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[16px]">Пресс-центр</p>
        <p>Новости</p>
        <p>Статьи</p>
        <p>Выставки</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[16px]">Контакты</p>
        <div className="flex gap-7">
          <div>
            <p className="font-bold">Телефон</p>
            <p>+38 (067) 822-85-58</p>
            <p className="font-bold">Звонки из СНГ</p>
            <p>+38 (067) 822-85-58</p>
          </div>
          <div>
            <p className="font-bold">Email</p>
            <p>olis1@ukr.net</p>
            <p>olis1@ukr.net</p>
            <p className="font-bold">Время работы</p>
            <p>с 8:00 - до 17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
