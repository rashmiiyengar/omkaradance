import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaDotCircle, FaPhone } from "react-icons/fa";
import { INSTA_URL, FB_URL } from "../utils/constants.js";
import { motion } from "framer-motion";

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const BulletIcon = ({ text }) => {
  return (
    <motion.div
      className="flex items-center m-2 bg-gradient-to-tr from-yellow-400 to-amber-700 text-lg rounded-2xl"
      variants={bulletVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-4 h-4 bg-gray-700 rounded-full shadow-md mr-2"></div>
      <p className="text-white">{text}</p>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Content */}
      <div className="p-4 md:p-8">
        <div className="shadow-lg shadow-red-300 text-white text-center p-4 text-xl mb-8">
          <h1>Benefits of Bharatnatyam</h1>
        </div>
        <div className="bg-black text-white p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={bulletVariants}
            className="m-4"
          >
            <h1 className="text-xl font-semibold bold">
              A brief history of Bharatanatyam
            </h1>
            <BulletIcon text="It is believed by the legends and many others that Bharatnatyam was revealed by Lord Brahma to Bharata who encoded the dance form in Natya Shastra. Bharatnatyam includes Nrita, Nritya, and Nattya. Nrita includes pure dancing, movements, and gestures of hand and foot. Nritya comprises expressions, and Nattya includes play. The dancers are accompanied by music, singer, and a guru who conducts the performance and directs the dancers." />
            <BulletIcon
              text="Improves flexibility. Mudras are an important part of Bharatnatyam. They are created by different body parts that enhance flexibility. Bharatnatyam is associated with expressions and gestures which help in communicating the message and feelings. Mudras and expressions help in talking with the audience through the dance and also help in improving flexibility."
            />
            <BulletIcon
              text="Increases stamina. Like various other dance forms, Bharatnatyam too has many movements that help in making the muscles strong. These body movements are sometimes tough, and the postures are needed to be held for some seconds. Bharatnatyam is no less than yoga or exercise so a few hours of practice and movement of limbs help in boosting stamina."
            />
            <BulletIcon
              text="Improves balance. Bharatnatyam includes different postures, poses, and movements. The different body movements are called Karanas which help in improving the balance of the body. There can be different postures such as standing on one foot that needs to be held on for a few seconds to improve the balance. Bharatnatyam is as beneficial to the body as yoga."
            />
            <BulletIcon
              text="Provides a healthy heart. Dancing helps in keeping your heart healthy. It helps in circulating blood faster and pumping it. Just like many other dance forms, Bharatnatyam demands a lot of energy and ultimately it increases the blood circulation in the body. Dance and fitness always go side by side."
            />
            <BulletIcon
              text="Improves concentration. While performing Bharatnatyam, one needs to remember the mudras, karanas, and hastas to perform well. It requires a lot of concentration and attention to remember all this correctly. A dancer needs to remember different movements, steps, the rhythm and beats, and expressions while performing. Ultimately Bharatnatyam helps in improving mental skills, concentration, and mental alertness."
            />
          </motion.div>
        </div>
      </div>

      {/* Dance for Fitness Section */}
      <div className="p-4 md:p-8">
        <div className="shadow-lg shadow-red-300 text-white text-center p-4 text-xl mb-8">
          <h1>Dance for Fitness</h1>
        </div>
        <p className="text-white">
          Ever thought about taking up dance as a way to keep fit? Dancing is not only a fantastic way for people to get and stay in shape, but it has been proven to boost your memory, improve flexibility, and reduce stress. One major advantage of hip hop dance is that it’s a full-body workout which provides a tremendous impact on your overall flexibility, strength, endurance level, and emotional well-being. Many Excel Dance goers have looked to dancing as a way to exercise and improve fitness levels and sociability. Take a look at our top ten super benefits of Dance.
        </p>
        <div className="text-white mt-2">
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Calorie Burner
          </p>
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Mental Stimulation
          </p>
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Improved Balance
          </p>
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Improved flexibility
          </p>
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Socially Satisfying
          </p>
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Healthy Heart & Lungs
          </p>
          <p className="flex">
            <FaDotCircle className="text-red-400 m-2" />Stamina
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="p-4 md:p-8">
        <div className="shadow-lg shadow-red-300 text-white text-center p-4 text-xl mb-8 mt-52">
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

export default Benefits;
