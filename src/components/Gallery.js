// Gallery.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://placekitten.com/1200/800",
  "https://placekitten.com/1201/800",
  "https://placekitten.com/1202/800",
  // Add more image URLs as needed
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen">
      <AnimatePresence initial={false} wait>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-tr from-yellow-400 to-red-500 text-black p-2 rounded-l-lg"
        onClick={prevImage}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-tr from-yellow-400 to-red-500 text-black p-2 rounded-r-lg"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Gallery;
