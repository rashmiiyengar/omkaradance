// Body.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { INSTA_URL, FB_URL } from "../utils/constants.js";
import bbimg from "../media/bg_image.jpeg"
const Body = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    // Navigate to the "about" page
    navigate("/about");
  };
  return (
    <div>
      <div className="grid grid-rows-2 min-h-screen overflow-y-auto relative">
        {/* First row */}
        <div
          className="relative bg-cover bg-center h-screen flex items-center text-white "
          style={{
            backgroundImage:
            `url(${bbimg})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center shadow-2xl shadow-red-300">
            <div className="text-center">
              <h2 className="text-4xl font-semibold mb-4 shadow-neutral-400">
                Welcome to Omkara Dance Academy
              </h2>
              <p className="text-lg mx-4 md:mx-44">
                {/* Adjust the margin for mobile and larger screens */}
                Bharata Natyam is considered to be a 'fire dance' — the mystic
                manifestation of the metaphysical element of fire in the human
                body. It is one of the five major styles (one for each element)
                that includes Odissi (element of water), Mohiniattam (element of
                air), Kuchipudi (element of earth) and Kathakali (element of
                sky). The movements of an authentic Bharata Natyam dancer
                resemble the movements of a dancing flame. Contemporary Bharata
                Natyam is rarely practiced as Natya Yoga, a sacred meditational
                tradition, except by a few orthodox schools. Bharata Natyam
                proper is a solo dance, with two aspects, lasya, the graceful
                feminine lines and movements, and tandava Ananda Thandavam
                (Tamil) (the dance of Shiva), masculine aspect, which is
                identical to the Yin and Yang in the Chinese culture.
              </p>
              <motion.div
                className="box bg-gradient-to-tr from-yellow-400 to-red-400 w-40 items-center mt-4 md:mt-24 rounded-3xl mx-auto whitespace-nowrap"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="justify-center border-white p-4 md:p-6">
                  <button
                    className="text-black hover:cursor-pointer"
                    onClick={handleAboutClick}
                  >
                    About Instructor
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="bg-black shadow-2xl">
          {/* Centering content */}
          <h1 className="h-6 text-6xl text-center text-white mt-6">
            Our Classes
          </h1>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-16">
            <motion.div
              className="box "
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-center">
                <h1 className="text-2xl text-white text center m-6">Fitness</h1>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Bharata_Natyam_Performance_DS.jpg"
                  alt=""
                  className="w-full h-48 md:h-96 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="box "
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-center">
                <h1 className="text-2xl text-white text center m-6">
                  Bollywood
                </h1>
                <img
                  src="https://static.prepp.in/public/image/76929df88ed8666ff1f8c07fbbe54570.jpeg?tr=w-350,h-401,c-force"
                  alt=""
                  className="w-full h-48 md:h-96 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="box "
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-center">
                <h1 className="text-2xl text-white text center m-6">
                  Freestyle
                </h1>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Bharata_Natyam_Performance_DS.jpg"
                  alt=""
                  className="w-full h-48 md:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="bg-black shadow-2xl shadow-red-300">
            {/* Centering content */}

            <div className="text-white  text-center py-8"></div>
          </div>
        </div>

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
    </div>
  );
};

export default Body;
