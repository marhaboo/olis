import React from 'react';
import AdvantageItem from '../AdvantageItem/AdvantageItem';

const AdvantagesList: React.FC = () => {
  const advantages = [
    { value: '30', description: 'Стран, в которых работают наши объекты' },
    { value: '16', description: 'Лет опыта разработок и внедрения' },
    { value: '200', description: 'Наименований выпускаемого оборудования' },
    { value: '3000', description: 'Работающих производств в мире' },
  ];

  return (
    <div className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-center">ПРЕИМУЩЕСТВА</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {advantages.map((advantage, index) => (
          <AdvantageItem
            key={index}
            value={advantage.value}
            description={advantage.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesList;
