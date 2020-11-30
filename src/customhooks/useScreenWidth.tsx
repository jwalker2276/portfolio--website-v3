import { useState, useEffect } from "react";

const useScreenWidth = (maxWidth = 768): string => {
  const [screenLayoutType, setScreenLayoutType] = useState("large");

  const isClient = typeof window === "object";

  useEffect(() => {
    const updatedLayoutSize = (): void => {
      if (window.innerWidth < maxWidth) {
        setScreenLayoutType("small");
      } else {
        setScreenLayoutType("large");
      }
    };

    if (isClient) {
      updatedLayoutSize();

      // Add event for resize
      window.addEventListener("resize", updatedLayoutSize);

      // Cleanup on unmount
      return (): void => {
        window.removeEventListener("resize", updatedLayoutSize);
      };
    }
  }, [isClient]);
  return screenLayoutType;
};

export default useScreenWidth;
