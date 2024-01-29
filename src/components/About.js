// About.js

import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { INSTA_URL, FB_URL } from "../utils/constants.js";
import aboutImg from "../media/about.jpeg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Content */}
      <div className="flex-grow flex">
        {/* Left side - Image */}
        <div className="w-1/2">
          <img
            src={aboutImg}
            alt="Dance Academy"
            className="object-cover w-1/2 h-1/2"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 p-8">
          <div className="shadow-lg shadow-red-300 text-white text-center p-4 text-xl mb-8 font-bold">
            <h1>About Omkara Dance Academy</h1>
          </div>
          <p className="text-white text-lg ">
            Anupama Iyengar has been teaching dance for the last 18 years. She
            teaches Bharatnatyam and Bollywood dances. Anupama Iyengar has
            teached in India for many kids and her students have won state level
            and district level competitions. She has teached in San Diego for 12
            years and performed in BalBoa every year and Leading and
            Representing State Karnataka. Then moved to Columbus Ohio , there
            students performed in the competition(Vindya Cultural Association)
            and won the competition 1st and 2nd place. Now she has moved to
            Houston to be able to teach here and enjoy more students.
            Anupama Iyengar has been teaching dance for the last 18 years. She
            teaches Bharatnatyam and Bollywood dances. Anupama Iyengar has
            teached in India for many kids and her students have won state level
            and district level competitions. She has teached in San Diego for 12
            years and performed in BalBoa every year and Leading and
            Representing State Karnataka. Then moved to Columbus Ohio , there
            students performed in the competition(Vindya Cultural Association)
            and won the competition 1st and 2nd place. Now she has moved to
            Houston to be able to teach here and enjoy more students.
          </p>

          <div className="shadow-lg shadow-red-300 text-white text-center p-4 text-xl mb-8 mt-24 font-bold">
            <h1>About Instructor</h1>
          </div>
          <p className="text-white text-lg"> 
            Anupama Iyengar has been teaching dance for the last 18 years. She
            teaches Bharatnatyam and Bollywood dances. Anupama Iyengar has
            teached in India for many kids and her students have won state level
            and district level competitions. She has teached in San Diego for 12
            years and performed in BalBoa every year and Leading and
            Representing State Karnataka. Then moved to Columbus Ohio , there
            students performed in the competition(Vindya Cultural Association)
            and won the competition 1st and 2nd place. Now she has moved to
            Houston to be able to teach here and enjoy more students.
            Anupama Iyengar has been teaching dance for the last 18 years. She
            teaches Bharatnatyam and Bollywood dances. Anupama Iyengar has
            teached in India for many kids and her students have won state level
            and district level competitions. She has teached in San Diego for 12
            years and performed in BalBoa every year and Leading and
            Representing State Karnataka. Then moved to Columbus Ohio , there
            students performed in the competition(Vindya Cultural Association)
            and won the competition 1st and 2nd place. Now she has moved to
            Houston to be able to teach here and enjoy more students.
          </p>

          <div className="shadow-lg shadow-red-300 text-white text-center p-4 text-xl mb-8 mt-24 font-bold">
            <h1>Contact Us</h1>
          </div>

          <div >
            <p className="bg-gradient-to-tr from-yellow-400 to-red-400 w-16  rounded-sm p-1">
              Venue :
            </p>
            <p className="text-white mt-2">
              17920 Huffmeister Rd Ste. 310, Cypress, TX 77429
            </p>
            <div className="my-2">
              <p className="bg-gradient-to-tr from-yellow-400 to-red-400 w-28  rounded-sm p-1 ">
                Follow us on :
              </p>

              <p className="text-white inline-flex my-2">
                <FaInstagram className="text-2xl flex text-white mr-2" />{" "}
                UserName: anuiyengar
              </p>
              <p className="flex text-white">
                <FaPhone className="text-2xl mr-2" /> (619) 621-1848
              </p>
              <p className="flex text-white mt-2">
                <FaFacebook className="text-2xl mr-2" /> Omkara Dance Academy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <div className="flex items-center">
          {/* Instagram icon */}
          <Link
            to={INSTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaInstagram className="text-2xl" />
          </Link>

          {/* Facebook icon */}
          <Link
            to={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebook className="text-2xl" />
          </Link>
        </div>

        <p className="ml-4">
          © 2024 Omkara Dance Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
