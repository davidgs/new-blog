import React, { useState, useEffect } from "react";
import dg1 from "../assets/images/dg/dg1.png";
import dg2 from "../assets/images/dg/dg2.png";
import dg3 from "../assets/images/dg/dg3.png";
import dg4 from "../assets/images/dg/dg4.png";
import dg5 from "../assets/images/dg/dg5.png";
import dg6 from "../assets/images/dg/dg6.png";
import dg7 from "../assets/images/dg/dg7.png";

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
      // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // 4 seconds

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <img
        src={imageList[currentImageIndex]}
        alt="Rotating heads"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ImageRotator;
