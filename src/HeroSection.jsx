import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black w-screen min-h-screen p-5">
    <div className="max-w-7xl mx-auto">
       <div>
        <a className="text-lg font-semibold flex justify-end text-[#cd7f32] font-lora hover:text-blue-600">Contact Me</a>
       </div>

      <div>
        <h1 className="text-4xl py-4 font-royale">
            <span className="text-white">Hi,</span><br/>
            <span className="text-[#cd7f32] font-dancing">I'm Sarah</span>
        </h1>

        <p className="text-white font-garamond text-md md:text-xl leading-relaxed">
            A Software Developer based in Ghana. I have a serious <br/> passion for
            solving problems, developing, and creating <br/> software applications.
          </p>
          <p className="text-white font-garamond text-md md:text-xl leading-relaxed mt-2">
            Well-organized person, problem solver, independent <br/> employee with
            high attention to detail.
          </p>
          <p className="text-white font-garamond text-md md:text-xl leading-relaxed mt-2">
            Interested in the entire development spectrum and working <br/> on
            ambitious projects with positive people.
          </p>
      </div>
    </div>
    </div>
    
    
  );
};

export default HeroSection;
