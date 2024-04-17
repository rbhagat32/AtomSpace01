import React from "react";
import Button3 from "./Button3";

function Find() {
  return (
    <div className="text-[#D9D9D9] flex flex-col bg-black">
      <div className="flex justify-between ml-40 my-24">
        <div className="flex flex-col justify-start gap-8">
          <div className="flex gap-8">
            <img src="04.png" />
            <p className="max-w-96">
              Lorem ipsum dolor sit amet consectetur. Et arcu habitasse
              dignissim turpis faucibus mi sagittis duis tortor.{" "}
            </p>
          </div>
          <Button3 />
        </div>
        <div>
          <p className="max-w-2xl text-4xl z-20">
            Lorem ipsum dolor sit amet consectetur. Et arcu habitasse dignissim
            turpis
          </p>
        </div>
      </div>

      <div className="flex z-20 justify-evenly items-center bg-black">
        <img src="05.png" />
        <img src="06.png" />
        <img src="07.png" />
        <img src="08.png" />
        <img src="05.png" />
        <img src="06.png" />
      </div>
    </div>
  );
}

export default Find;
