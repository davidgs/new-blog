import React, { useEffect, useState } from "react";

const useDebouncedResize = (delay: number) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const debouncedResize = debounce(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [delay]);

  return size;
};

function debounce(fn: (...args: any[]) => void, ms: number): () => void {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    clearTimeout(timer!);
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, ms);
  };
}

export default useDebouncedResize;
