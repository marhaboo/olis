import React from "react";
import man from "@/images/Mask Group (2).png";
import Image from "next/image";
const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      date: "15.06.2021",
      title: "Компания ОЛИС запустила в Турции завод",
      description:
        'Компания "ОЛИС" в 2020 году поставила комплектую линию производства зерновых хлопьев',
      link: "#",
    },
    {
      id: 2,
      date: "15.06.2021",
      title: "Компания ОЛИС запустила в Турции завод",
      description:
        'Компания "ОЛИС" в 2020 году поставила комплектую линию производства зерновых хлопьев',
      link: "#",
    },
    {
      id: 3,
      date: "15.06.2021",
      title: "Компания ОЛИС запустила в Турции завод",
      description:
        'Компания "ОЛИС" в 2020 году поставила комплектую линию производства зерновых хлопьев',
      link: "#",
    },
    {
      id: 4,
      date: "15.06.2021",
      title: "Компания ОЛИС запустила в Турции завод",
      description:
        'Компания "ОЛИС" в 2020 году поставила комплектую линию производства зерновых хлопьев',
      link: "#",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6">
          Последние новости
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <div className="relative">
                <Image src={man} alt={item.title} className="w-full h-40 " />
                <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.date}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Читать подробнее &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
