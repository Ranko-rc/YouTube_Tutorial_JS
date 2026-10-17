import { useEffect, useState } from "react";

export function useWindowsResize(handler) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function handleResize() {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      setWindowSize(size);
      if (handler) {
        handler(size);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handler]);

  return windowSize;
}
