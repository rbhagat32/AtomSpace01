import React from "react";
import Button4 from "./Button4";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center text-[#D9D9D9] bg-[#05060a] py-36 gap-8">
      <h1 className="text-5xl font-extrabold">Contact Us</h1>
      <p className="max-w-xl text-xl text-center">
        Ready for a space adventure like no other? Join Atom Space, where your
        work can revolutionize the entire industry. Click below – destiny
        beckons.
      </p>
      <Button4 />
      <img src="10.png" />
    </div>
  );
}

export default Contact;
