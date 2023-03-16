import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = projectItems.length - 1;
    } else if (newIndex >= projectItems.length) {
      newIndex = 0;
    }
    console.log(activeIndex);

    setActiveIndex(newIndex);
  };

  // TODO: Put projectItems into its own .js file
  const projectItems = [
    {
      title: "Champion Tooltips",
      desc: "This is a Twitch.tv extension for the online game, League of Legends, where viewers can interact with the live view of the stream to get detailed information about the abilities being used.",
      img_url: "/assets/test.png",
    },
    {
      title: "Champion Tooltips 2",
      // desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit aut rerum tempora aliquam. Nesciunt alias at amet repellendus adipisci? Expedita?",
      img_url: "/assets/hero-placeholder.png",
    },
    {
      title: "Champion Tooltips 3",
      // desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit aut rerum tempora aliquam. Nesciunt alias at amet repellendus adipisci? Expedita?",
      img_url: "/assets/hero-placeholder.png",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div
        className={`h-[480px] whitespace-nowrap transition duration-150 ease-in-out ${
          activeIndex === 1 ? "translate-x-[-100%]"
          : activeIndex === 2 ? "translate-x-[-200%]" 
          : "translate-x-[0%]"
          }`}
      >
        {projectItems.map((item, index) => {
          return <CarouselItem itemData={item} key={index} i={index} />;
        })}
      </div>
      <div className="flex justify-center place-items-center py-4 gap-4">
        <button
          // className="button-styled rounded-full mr-4 shadow-[1px_1px_0px_0px,2px_2px_0px_0px] active:top-0.5 active:left-0.5"
          className="mr-4"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <HiArrowNarrowLeft />
        </button>

        {projectItems.map((item, index) => {
          return (
            <button
              className={activeIndex === index ? "w-2 h-1 bg-slate-900" : "w-2 h-1 bg-slate-300"}
              onClick={() => updateIndex(index)}
              checked={activeIndex === index}
              key={index}
            />
          );
        })}

        <button
          // className="button-styled rounded-full ml-4 shadow-[1px_1px_0px_0px,2px_2px_0px_0px] active:top-0.5 active:left-0.5"
          className="ml-4"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
