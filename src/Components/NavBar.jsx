import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function NavBar() {
  return (
    <div className="bg-[#E0E0E0] w-3/5 mx-auto rounded-full">
      <div className="flex justify-between items-center text-lg font-semibold mt-16 px-8 py-3">
        <a href="#" className="z-50">
          <IoMenu />
        </a>
        <div className="font-Work-Sans flex justify-center items-center gap-8">
          <a href="#" className="z-50">
            <h2>Home</h2>
          </a>
          <a href="#" className="z-50">
            <h2>Collections</h2>
          </a>
          <a href="#" className="z-50">
            <h2>Blog</h2>
          </a>
          <a href="#" className="z-50">
            <h2>About Us</h2>
          </a>
          <a href="#" className="z-50">
            <h2>Join Now</h2>
          </a>
        </div>
        <a href="#" className="z-50">
          <FaRegUser />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
