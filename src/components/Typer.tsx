import React, { useState, useEffect, useMemo } from "react";

const Typer: React.FC = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isForward, setIsForward] = useState(true); // Track forward/backward state
  const [typeSpeed, setTypeSpeed] = useState<number>(200); // 200 milliseconds

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

    const typeString = () => {
      setCurrentCharIndex((prevIndex) => {
        const currentString = stringList[currentStringIndex];
        const stringLength = currentString.length;

        if (isForward) {
          // Type the string forwards
          if (prevIndex < stringLength - 1) {
            return prevIndex + 1;
          } else {
            setIsForward(false); // Switch to typing backwards
            setTypeSpeed(75); // Wait 100 milliseconds
            return prevIndex;
          }
        } else {
          // Type the string backwards
          if (prevIndex > 0) {
            return prevIndex - 1;
          } else {
            setIsForward(true); // Switch to typing forwards
            setTypeSpeed(200); // Wait 200 milliseconds
            const randNum = Math.floor(Math.random() * 7);
            setCurrentStringIndex(randNum); // Move to the next string
            return 0;
          }
        }
      });
    };

    const timer = setInterval(typeString, typeSpeed); // 200 milliseconds

    return () => {
      clearInterval(timer);
    };
  }, [currentStringIndex, isForward]);



  return (
    <div style={{textAlign: 'center', color: 'white', fontSize: '24px'}}>{stringList[currentStringIndex].slice(0, currentCharIndex + 1)}{isForward ? '✎' : '✐'}</div>
  );
};

export default Typer;
