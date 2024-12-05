import React, { useState } from "react";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen); 
  };

  return (
<div className="bg-black w-screen min-h-screen p-5">
  <div className="max-w-7xl mx-auto">
       
  <div className="flex justify-end py-5">
      <button onClick={togglePopup} className="text-lg font-semibold text-[#cd7f32] font-lora hover:text-blue-600">
        Contact Me
      </button>
  </div>

<div className="flex flex-col lg:flex-row justify-center gap-5 items-center mb-10">
      <div className="px-4 pt-12 md:px-12 lg:px-2">
        <img src ="/src/assets/Avatar.svg" alt="avatar" className="w-full h-full rounded-full" />
      </div>

      <div>
      <h1 className="text-4xl py-4 font-royale">
        <span className="text-white">Hi,</span>
          <br />
        <span className="text-[#cd7f32] font-dancing">I'm Sarah</span>
      </h1>

      <div className="px-6 pt-8 pb-24 md:px-12 lg:w-2/3 lg:px-6">

      <p className="text-white font-garamond text-lg md:text-2xl leading-relaxed">
            A Software Developer based in Ghana. I have a serious <br /> passion
            for solving problems, developing, and creating <br /> software
            applications.
        </p>

        <p className="text-white font-garamond text-lg md:text-2xl leading-relaxed mt-2">
            Well-organized person, problem solver, independent <br /> employee
            with high attention to detail.
        </p>
        <p className="text-white font-garamond text-lg md:text-2xl leading-relaxed mt-2">
            Interested in the entire development spectrum and working <br /> on
            ambitious projects with positive people.
        </p>
      </div> 
      </div>
</div> <br/><br/>

<div className="my-10">
    <h2 className="text-[#cd7f32] font-lora font-bold text-2xl text-center">
      Technologies I use
    </h2>

  <div className="mt-10">
    <p className="text-[#cd7f32] font-lora font-semibold text-lg text-center mt-5">Frontend Development</p>

<div className="flex justify-center gap-10 items-center">
      <div>
        <img src="src/assets/HTML.png" alt="HTML" className="w-24 h-24"/>
      </div>

      <div>
        <img src="src/assets/css-logo.png" alt="CSS" className="w-24 h-24"/>
      </div>

      <div>
        <img src="src/assets/react.png" alt="React"className="w-24 h-24"/>
      </div>

    <div>
        <img src="src/assets/Tailwind CSS.png" alt="Tailwind CSS" className="w-24 h-24"/>
    </div>
    </div>
    </div>
    </div>

        {isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="relative bg-white p-6 rounded shadow-lg w-80">

        <h2 className="text-lg font-bold mb-4 text-[#cd7f32]">Send Me a Message</h2>

        <button onClick={togglePopup} className="absolute top-3 right-3 text-red-500 font-bold text-xl hover:text-red-700">&times;</button>

    <form className="space-y-3">
        <input type="text" placeholder="Full Name"className="w-full border border-gray-300 p-2 rounded"/>
        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded"/>

        <textarea placeholder="Message" className="w-full border border-gray-300 p-2 rounded"></textarea>

        <button type="submit"className="bg-[#cd7f32] text-white w-full py-2 rounded hover:bg-[#b66d2b]">Send Message</button>
    </form>
    </div>
    </div>
  )}
    </div>
  </div>
  );
};

export default HeroSection;

