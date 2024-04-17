import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

function Hero() {
  return (
    <div className="text-[#D9D9D9] flex flex-col justify-center items-center mt-[124px]">
      <img
        src="03.png"
        className="absolute z-0 w-full h-full top-12 bg-clip-text"
      />
      <h1 className="text-[180px] font-RedHat-Display font-black">
        Atom Space
      </h1>
      <p className="w-1/2 text-xl text-center">
        Lorem ipsum dolor sit amet consectetur. Et arcu habitasse dignissim
        turpis faucibus mi sagittis duis tortor. Aliquam adipiscing nam tellus
        sem sem lorem.
      </p>
      <div className="flex gap-16 mt-8">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

export default Hero;
