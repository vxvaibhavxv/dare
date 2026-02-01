import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

import RunAwayButton from "./RunAwayButton/RunAwayButton";
import SunFlower from "../../images/sunflower.png";
import Lily from "../../images/lily.png";

const FLOWERS = [
  {
    src: SunFlower,
    width: 250,
    height: 250,
    top: -250,
    left: "calc(100vw / 2 - 125px)",
    topFinal: -125,
    index: 3,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: -200,
    left: "calc(100vw / 2 - 250px)",
    topFinal: -100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: -200,
    left: "calc(100vw / 2 + 50px)",
    topFinal: -100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: -150,
    left: "calc(100vw / 2 - 350px)",
    topFinal: -75,
    index: 1,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: -150,
    left: "calc(100vw / 2 + 200px)",
    topFinal: -75,
    index: 1,
  },
  {
    src: SunFlower,
    width: 100,
    height: 100,
    top: -100,
    left: "calc(100vw / 2 - 425px)",
    topFinal: -50,
    index: 0,
  },
  {
    src: SunFlower,
    width: 100,
    height: 100,
    top: -100,
    left: "calc(100vw / 2 + 325px)",
    topFinal: -50,
    index: 0,
  },
  {
    src: SunFlower,
    width: 250,
    height: 250,
    top: window.innerHeight,
    left: "calc(100vw / 2 - 125px)",
    topFinal: window.innerHeight - 125,
    index: 3,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: window.innerHeight,
    left: "calc(100vw / 2 - 250px)",
    topFinal: window.innerHeight - 100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: window.innerHeight,
    left: "calc(100vw / 2 + 50px)",
    topFinal: window.innerHeight - 100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: window.innerHeight,
    left: "calc(100vw / 2 - 350px)",
    topFinal: window.innerHeight - 75,
    index: 1,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: window.innerHeight,
    left: "calc(100vw / 2 + 200px)",
    topFinal: window.innerHeight - 75,
    index: 1,
  },
  {
    src: SunFlower,
    width: 100,
    height: 100,
    top: window.innerHeight,
    left: "calc(100vw / 2 - 425px)",
    topFinal: window.innerHeight - 50,
    index: 0,
  },
  {
    src: SunFlower,
    width: 100,
    height: 100,
    top: window.innerHeight,
    left: "calc(100vw / 2 + 325px)",
    topFinal: window.innerHeight - 50,
    index: 0,
  },
];

interface ProposalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Proposal(props: ProposalProps) {
  const { step, setStep } = props;

  const [showCard, setShowCard] = useState<boolean>(false);
  const [show, setShow] = useState(false);

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
    <div className="tw:w-full tw:h-full tw:flex tw:items-center tw:justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="tw:p-8 tw:bg-card tw:rounded-xl tw:w-150 tw:z-50"
      >
        <div className="tw:flex tw:items-center tw:justify-between tw:gap-6 tw:mb-3">
          <p className="tw:text-text-primary tw:font-bold tw:text-xl">
            I really enjoy spending time with you, and I genuinely like what we
            have. You've quietly become someone I look forward to seeing and
            talking to.
          </p>
          <img src={Lily} className="tw:w-40" />
        </div>
        <p className="tw:mb-3 tw:text-text-primary tw:font-bold tw:text-xl">
          So, I think it's time I ask you this properly.
        </p>
        <p className="tw:mb-6 tw:text-text-primary tw:font-bold tw:text-xl">
          My dear Angry Bird, all baddie energy with a sweet heart, would you
          like to go out on a date with me?
        </p>
        <div className="tw:flex tw:gap-4 tw:relative">
          <div
            className="tw:cursor-pointer tw:bg-border tw:hover:bg-border-secondary tw:text-white tw:px-4 tw:py-2 tw:rounded-lg tw:flex-1 tw:text-center tw:text-lg tw:font-semibold"
            onClick={handleSuccess}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            Yes
          </div>
          <RunAwayButton />
        </div>
      </motion.div>
      {
        <div className="tw:w-full tw:h-full tw:absolute tw:top-0 tw:left-0">
          <AnimatePresence>
            {show &&
              FLOWERS.map((flower) => (
                <motion.img
                  src={flower.src}
                  style={{
                    width: flower.width,
                    height: flower.height,
                    position: "absolute",
                    zIndex: flower.index,
                  }}
                  initial={{
                    y: flower.top,
                    x: flower.left,
                  }}
                  exit={{
                    y: flower.top,
                  }}
                  animate={{
                    rotate: 360,
                    y: flower.topFinal,
                  }}
                  transition={{
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    y: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}
          </AnimatePresence>
        </div>
      }
    </div>
  );
}

export default Proposal;
