import { motion } from "framer-motion";

import Sakura from "../../../images/sakura.png";
import SunFlower from "../../../images/sunflower.png";
import Bouquet from "../../../images/bouquet-flower.png";

const WIDTH = 450;
const HEIGHT = 400;
const IMAGE_ROTATION_DURATION = 5;
const IMAGE_ROTATION_EASE = "linear";
const FLOWERS = [
  {
    src: Sakura,
    width: 200,
    height: 200,
    top: -100,
    left: -100,
    index: 1,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: 25,
    left: -75,
    index: 2,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: -75,
    left: 25,
    index: 2,
  },
  {
    src: Sakura,
    width: 100,
    height: 100,
    top: 125,
    left: -50,
    index: 3,
  },
  {
    src: Sakura,
    width: 200,
    height: 200,
    top: HEIGHT - 100,
    left: WIDTH - 100,
    index: 1,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: HEIGHT - 175,
    left: WIDTH - 75,
    index: 2,
  },
  {
    src: SunFlower,
    width: 150,
    height: 150,
    top: HEIGHT - 75,
    left: WIDTH - 175,
    index: 2,
  },
  {
    src: Sakura,
    width: 100,
    height: 100,
    top: HEIGHT - 225,
    left: WIDTH - 50,
    index: 3,
  },
];

function Card() {
  return (
    <div className="tw:flex tw:items-center tw:justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="tw:absolute tw:w-[450px] tw:h-[400px]"
      >
        {FLOWERS.map((flower) => (
          <motion.img
            src={flower.src}
            style={{
              position: "absolute",
              width: flower.width,
              height: flower.height,
              top: flower.top,
              left: flower.left,
              zIndex: 4 - flower.index,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: IMAGE_ROTATION_DURATION,
                repeat: Infinity,
                ease: IMAGE_ROTATION_EASE,
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: IMAGE_ROTATION_EASE,
              },
            }}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="tw:relative tw:bg-card tw:p-8 tw:rounded-xl tw:w-[450px] tw:h-[400px] tw:text-center tw:flex tw:flex-col tw:justify-center tw:items-center tw:z-50"
      >
        <motion.img
          src={Bouquet}
          alt="bouquet"
          className="tw:w-50 tw:mb-3"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.p
          className="tw:text-2xl tw:font-bold tw:text-border-secondary"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Woohoo! I knew you'd say yes
        </motion.p>
        <motion.p
          className="tw:mt-2 tw:text-lg tw:font-bold tw:text-border"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Anyways, sending you some virtual blooms. See you soon!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Card;
