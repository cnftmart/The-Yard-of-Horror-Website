import dynamic from "next/dynamic";
import React from "react";
import { AboutText } from "./AboutText";

const MobileAbout = dynamic(() => import("../handheld/MobileAbout"));

const About: React.FC = () => {
  return (
    <>
      <section className="shadowmobile | mx-[2vw] mt-[2em] hidden min-h-[190vw] flex-col gap-[10vw] px-[2vw] pt-[4vw] text-[1.5em] sm:mt-0 sm:text-[1.4vw] bg:flex">
        <p className="mr-[20%] mt-[2vw] max-w-[30%] self-end text-justify">
          {AboutText[0].paragraph}
        </p>
        <p className="ml-[25%] mt-[1vw] max-w-[40%] text-justify">
          {AboutText[1].paragraph}
        </p>
        <p className="ml-[17%] mt-[1vw] max-w-[40%] text-justify">
          {AboutText[2].paragraph}
        </p>
      </section>
      <MobileAbout />
    </>
  );
};

export default About;
