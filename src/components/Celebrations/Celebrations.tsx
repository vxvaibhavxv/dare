import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

interface CelebrationsProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Celebrations(props: CelebrationsProps) {
  const { step, setStep } = props;

  const [showConfetti, setShowConfetti] = useState<boolean>(true);

  useEffect(() => {
    if (!showConfetti) return;

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        setShowConfetti(false);
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  });

  return <div>Celebrations Component</div>;
}

export default Celebrations;
