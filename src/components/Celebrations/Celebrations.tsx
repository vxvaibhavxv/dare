import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import Card from "./Card/Card";

function Celebrations() {
  const [showCard, setShowCard] = useState<boolean>(false);

  useEffect(() => {
    const duration = 1 * 1000;
    const showCardTime = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    setInterval(function () {
      const timeElapsed = showCardTime - Date.now();

      if (timeElapsed <= 0) {
        setShowCard(true);
      }

      const particleCount = 50;

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
      });
    }, 350);
  });

  if (!showCard) {
    return null;
  }

  return (
    <div className="tw:w-full tw:h-full tw:flex tw:items-center tw:justify-center">
      <Card />
    </div>
  );
}

export default Celebrations;
