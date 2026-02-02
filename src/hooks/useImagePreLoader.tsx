import { useEffect } from "react";

import Image1 from "../images/bouquet-flower.png";
import Image2 from "../images/lily.png";
import Image3 from "../images/sakura.png";
import Image4 from "../images/smile.png";
import Image5 from "../images/sunflower.png";

const imagesToPreload = [Image1, Image2, Image3, Image4, Image5];

const useImagePreloader = () => {
  useEffect(() => {
    const cacheImages = async (srcArray: string[]) => {
      const promises = srcArray.map((src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          img.src = src;
          img.onload = () => resolve(undefined);
          img.onerror = () => reject(undefined);
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {}
    };

    cacheImages(imagesToPreload);
  }, []);

  return;
};

export default useImagePreloader;
