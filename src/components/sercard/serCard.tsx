import Image, { StaticImageData } from "next/image"

interface Card {
  text: string,
  image: StaticImageData | string
}

export default function SerCard({image, text}:Card) {
  return(
    <>
    <div className="">
      <Image src={image} alt={text} />
    </div>
    </>
  )
}