import { AboutText } from "../computer/AboutText";
const MobileAbout: React.FC = () => {
  return (
    <section className="mx-[4vw] flex min-h-[425vw] flex-col gap-[15vw] px-[1vw] text-justify sm:hidden">
      <p
        className=" shadowmobile | animation ml-[2vw] max-w-[85%] text-[4.5vw] leading-snug 
        tracking-tight transition-transform sm:text-[3.5vw]"
      >
        {AboutText[0].paragraph}
      </p>
      <p
        className=" shadowmobile | animation2 max-w-[65%] self-end text-[4.5vw] leading-snug tracking-tight 
        transition-transform sm:text-[3.5vw] mt-[-5vw]"
      >
        {AboutText[1].paragraph}
      </p>
      <p
        className=" shadowmobile | animation ml-[2vw] max-w-[85%] text-[4.5vw] leading-snug 
        tracking-tight transition-transform sm:text-[3.5vw] mt-[-5vw]"
      >
        {AboutText[2].paragraph}
      </p>
    </section>
  );
};

export default MobileAbout;
