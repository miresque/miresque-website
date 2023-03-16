import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselItem = ({ itemData, i }) => {
  const [item, setItem] = useState({
    title: "",
    desc: "",
    img_url: "/assets/hero-placeholder.png",
  });

  useEffect(() => {
    setItem(itemData)
  }, [itemData])

  return (
    <article className="relative inline-flex w-full align-text-center h-full ">
      <h1 className="absolute right-[38%] top-[0%] text-[9rem] text-gray-300 z-[-1] font-medium">0{i+1}</h1>
      <Image
        src={item.img_url}
        alt="hero graphic of boy jumping"
        width={420}
        height={200}
      />
      <div className="w-full pl-[10%] whitespace-normal pt-20">
        <h2 className="mb-8">{item.title}</h2>
        <p>{item.desc} 
        <br/>
        <br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt adipisci et officia dicta dolor labore, asperiores quidem illum a vitae qui architecto aut cum eligendi consequatur obcaecati! Dicta, quod!
        </p>
        <p className="absolute bottom-2 right-4">View Project &rarr;</p>
      </div>
    </article>
  );
};

export default CarouselItem;
