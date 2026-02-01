import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

import RunAwayButton from "./RunAwayButton/RunAwayButton";

interface ProposalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Proposal(props: ProposalProps) {
  const { step, setStep } = props;

  const [showCard, setShowCard] = useState<boolean>(false);

  const handleSuccess = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    if (showCard) return;

    const duration = 3 * 1000;
    const showCardTime = Date.now() + duration;

    let skew = 1;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeElapsed = showCardTime - Date.now();

      if (timeElapsed <= 0) {
        setShowCard(true);
        clearInterval(interval);
      }

      const ticks = 250;
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ["#f43f5e", "#fb7185"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });
    }, 10);
  });

  if (!showCard) {
    return null;
  }

  return (
    <div className="tw:w-full tw:h-full tw:flex tw:items-center tw:justify-center tw:z-5000">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="tw:p-8 tw:bg-card tw:rounded-xl tw:w-150 tw:z-50"
      >
        <p className="tw:mb-6 tw:text-text-primary tw:font-bold tw:text-2xl">
          I like spending time with you and I really like what we have. You've
          quietly become someone I really look forward to seeing. And, it's time
          I ask you out properly.
        </p>
        <p className="tw:mb-6 tw:text-text-primary tw:font-bold tw:text-2xl">
          So, my dear Angry Bird, all baddie energy with a sweet heart, would
          you like to go out on a date with me?
        </p>
        <div className="tw:flex tw:gap-4 tw:relative">
          <div
            className="tw:cursor-pointer tw:bg-border tw:hover:bg-border-secondary tw:text-white tw:px-4 tw:py-2 tw:rounded-lg tw:flex-1 tw:text-center tw:text-lg tw:font-semibold"
            onClick={handleSuccess}
          >
            Yes
          </div>
          <RunAwayButton />
        </div>
      </motion.div>
    </div>
  );
}

export default Proposal;
