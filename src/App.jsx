import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Find from "./Components/Find";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="w-full h-full font-Work-Sans">
      <img src="01.png" className="absolute -z-10 top-0 right-0" />
      <NavBar />
      <img src="02.png" className="absolute -z-20 w-full h-full top-12" />
      <Hero />
      <hr className="mt-[200px] blur-3xl h-2 bg-black" />
      <Find />
      <img src="09.png" className="absolute w-full z-10 top-[300px] right-0" />
      <Contact />
    </div>
  );
}

export default App;
