import React from 'react';

interface AdvantageItemProps {
  value: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col items-center text-center mt-6">
      <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-8 border-yellow-400 bg-gradient-to-b from-yellow-400 to-gray-700">
        <span className="text-2xl font-bold text-black">{value}</span>
      </div>
      <p className="mt-3 w-60 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default AdvantageItem;
