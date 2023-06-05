import React, { useState, useEffect } from "react";
import dg1 from "../assets/images/dg/dg1.png";
import dg2 from "../assets/images/dg/dg2.png";
import dg3 from "../assets/images/dg/dg3.png";
import dg4 from "../assets/images/dg/dg4.png";
import dg5 from "../assets/images/dg/dg5.png";
import dg6 from "../assets/images/dg/dg6.png";
import dg7 from "../assets/images/dg/dg7.png";
import {
  AnimatePresence,
  motion,
} from "framer-motion"

const ImageRotator: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    dg1,
    dg2,
    dg3,
    dg4,
    dg5,
    dg6,
    dg7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum = Math.floor(Math.random() * 7);
      setCurrentImageIndex(randNum);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3250); // 4 seconds

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1.25, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["50%", "30%", "50%", "30%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1.25
      }}
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <AnimatePresence>
        <motion.img
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "white",
          }}
          animate={{ scale: [1.25, 1, 1, 1.25] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1.25
          }}
          key={currentImageIndex}
          src={imageList[currentImageIndex]}
          alt=""
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default ImageRotator;
