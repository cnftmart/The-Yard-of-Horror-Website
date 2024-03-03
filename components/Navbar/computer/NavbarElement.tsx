import { Hrefs } from "../handheld/DropdownItem";
import React from "react";
const NavbarElement: React.FC = () => {
  return (
    <>
      {/* Right */}
      <div className="hidden bg:block">
        <ul className="flex items-center space-x-[2vw] p-[1vw] text-[1.5vw] font-bold 4xl:p-[2vw]">
          {Hrefs.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <a href={item.href} target="_blank">
                  <li className="  shadowmobile | navanimation p-2 transition-transform">
                    {item.name}
                  </li>
                </a>
              </React.Fragment>
            );
          })}
          {/* Mint Button */}
          {/* <button
            className="navanimation mintanimation ml-4 hidden rounded-2xl border-2 border-solid border-opacity-50 px-5 py-[0.125rem] font-bold
            sm:inline-block
            lg:px-8 lg:text-[1.3vw] 4xl:px-16 4xl:py-4"
          >
            Mint
          </button> */}
        </ul>
      </div>
    </>
  );
};

export default NavbarElement;
