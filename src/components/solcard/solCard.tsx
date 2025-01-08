import Image, { StaticImageData } from "next/image"

interface Card {
  text: string,
  image: StaticImageData | string
}

export default function SolCard({image, text}:Card) {
  return(
    <>
    <div className="flex bg-custom-bg justify-end">
      <h2 className="bg-[#FEAD04] py-1 px-4 h-8 w-full top-8  text-white relative left-4" >{text}</h2>
      <Image src={image} alt={text} />
    </div>
    </>
  )
}