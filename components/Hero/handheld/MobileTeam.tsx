import React from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/future/image";
import { SliderData } from "./Sliderdata";
//Grave Images
//console.log(typeof SliderData);
const MobileTeam: React.FC = () => {
  const [current, setCurrent] = React.useState<number>(0);

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };
  //Hibaellenőrzés
  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className="mt-[230vw] flex min-h-[160vw] flex-col bg:hidden">
      <div className="relative flex items-center justify-center">
        <ArrowSmallLeftIcon
          className="s:h-13 s:w-13 absolute top-[40%] left-1 z-10 h-9 w-9 select-none font-[100] text-white selection:cursor-pointer hover:text-stone-400 s:left-4"
          onClick={prevSlide}
        />
        <ArrowSmallRightIcon
          className="s:h-13 s:w-13 absolute top-[40%] right-1 z-10 h-9 w-9 select-none rounded-xl text-white selection:cursor-pointer hover:text-stone-400 s:right-4"
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "scale-[1.025] opacity-[1] duration-1000"
                  : "opacity-0 duration-1000 ease-in"
              }
              key={index}
            >
              {index === current && (
                <a href={slide.link} target="_blank">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={300}
                    height={300}
                    draggable="false"
                    className="box relative z-10 h-[80vw] w-[80vw] object-contain"
                  />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileTeam;
