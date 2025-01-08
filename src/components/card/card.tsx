import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
 text: string;
 firstImg: string | StaticImageData ;
 secondImg: string | StaticImageData
}
const Card: React.FC<CardProps> = ({text, firstImg, secondImg}) => {
  return (
    <div className="flex items-center bg-custom-bg bg-cover bg-center">
      <div className="flex bg-white py-3 px-6">
     <Image style={{marginRight: "15px"}} src={firstImg} alt={text}  />
     <p>{text}</p>
     </div>
     <Image style={{position: "relative", width: "180px", right: "40px" }} src={secondImg} alt={text} />
    </div>
  );
};

export default Card;
