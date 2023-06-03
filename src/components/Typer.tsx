import React, { useState, useEffect, useMemo } from "react";

const Typer: React.FC = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const stringList = [
      "I am a Developer Advocate",
      "I am DevRel",
      "I love IoT",
      "I love open-source",
      "I love to build useless IoT projects",
      "I teach people how to use technology",
      "I love dogs ... probably more than people",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharIndex((prevIndex) => {
        if (prevIndex < stringList[currentStringIndex].length - 1) {
          return prevIndex + 1;
        } else {
          const randNum = Math.floor(Math.random() * 7);
          setCurrentStringIndex(randNum);
          // setCurrentStringIndex(
          //   (prevIndex) => (prevIndex + 1) % stringList.length
          // );
          return 0;
        }
      });
    }, 250); // 1 second

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStringIndex]);

  return (
    <div style={{textAlign: 'center', color: 'white', fontSize: '24px'}}>{stringList[currentStringIndex].slice(0, currentCharIndex + 1)} |</div>
  );
};

export default Typer;
