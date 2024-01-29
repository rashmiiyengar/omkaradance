import React from "react";
import VedioBackground from "../media/VedioBackground.mp4"; // Adjust the path

const Body = () => {
  return (
    <div className="grid grid-rows-2 h-screen">
      {/* First Row */}
      <div className="grid grid-cols-2 col-span-2 overflow-hidden">
        {/* First Column */}
        <div className="col-span-1 flex ">
          <div className="flex-grow h-full max-h-full ">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-sm">
              <source src={VedioBackground} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-span-1 flex bg-slate-900" >
          <div className="flex-grow ml-4">
            <h1 className="text-white font-bold text-2xl mb-4 text-shadow-lg text-center">Welcome to Omkara Dance Academy</h1>
            <p className="text-white text-shadow-md">  
              Bharata Natyam is considered to be a 'fire dance' - the mystic manifestation of the metaphysical element of the fire in the human body. It is one of the five major styles (one for each element) 
              that includes Odissi (element of water), Mohiniattam (eklement of air), Kuchupudi (element of earth) and Kathakali (element of sky). The movements of an authentic Bharatha Natyam dancer resemble
              the movements of a dancing flame. Contemparary Bharata Natyam is rarely peractised as Natya Yoga, a sacred medidtational tradition except by a few orthodox schools.
              Bharata Natyam proper is a solo dance. with two aspects, lasya, the graceful feminine lines and movemenrts, and tandava Ananda Thandavam (Tamil) (the dance of Shiva), 
              masculine aspect, which is identical to the Yin and Yang in the Chinese Culture.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="col-span-2">
        <h1>Text</h1>
      </div>
    </div>
  );
};

export default Body;
