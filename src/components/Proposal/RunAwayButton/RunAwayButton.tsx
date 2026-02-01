import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";

const teasingTexts = [
  "No",
  "Nope 😌",
  "Still no?",
  "Try again",
  "Nice try",
  "Almost there",
  "Haha, not yet",
  "Keep trying",
  "Getting warmer 😏",
  "So close!",
  "Think harder",
  "Are you sure?",
  "Not happening 😈",
  "Bold attempt",
  "Try harder",
  "Catch me!",
];

function RunAwayButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const teasingTimeout = useRef<number | null>(null);

  const [text, setText] = useState<string>(teasingTexts[0]);

  // movement relative to original position
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const scale = useMotionValue(1);

  const spring = { stiffness: 70, damping: 14, mass: 1.2 };

  const x = useSpring(offsetX, spring);
  const y = useSpring(offsetY, spring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const btn = btnRef.current;

      if (!btn) return;

      const rect = btn.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const threshold = 150;

      if (
        (e.clientX > rect.left &&
          e.clientX < rect.right &&
          e.clientY > rect.top &&
          e.clientY < rect.bottom) ||
        (distance < threshold && distance !== 0)
      ) {
        if (!teasingTimeout.current) {
          teasingTimeout.current = setTimeout(() => {
            const randomText =
              teasingTexts[Math.floor(Math.random() * teasingTexts.length)];

            setText(randomText);

            teasingTimeout.current = null;
          }, 2000);
        }
      }

      // panic teleport when the cursor is over the button
      if (
        e.clientX > rect.left &&
        e.clientX < rect.right &&
        e.clientY > rect.top &&
        e.clientY < rect.bottom
      ) {
        const panicRange = 500;

        offsetX.set((Math.random() - 0.5) * panicRange * 2);
        offsetY.set((Math.random() - 0.5) * panicRange * 2);

        animate(scale, [1, 1.35, 1], { duration: 0.35 });

        return;
      }

      // smooth escape
      if (distance < threshold && distance !== 0) {
        const force = (threshold - distance) / threshold;
        const strength = 50;

        offsetX.set(offsetX.get() - (dx / distance) * force * strength);
        offsetY.set(offsetY.get() - (dy / distance) * force * strength);

        return;
      }

      offsetX.set(offsetX.get() * 0.92);
      offsetY.set(offsetY.get() * 0.92);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (teasingTimeout.current) {
        clearTimeout(teasingTimeout.current);
        teasingTimeout.current = null;
      }
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      type="button"
      style={{
        x,
        y,
        scale,
      }}
      className="tw:bg-border tw:hover:bg-border-secondary tw:text-white tw:px-4 tw:py-2 tw:rounded-lg tw:flex-1 tw:text-center tw:text-lg tw:font-semibold tw:transition-transform tw:duration-200 tw:ease-out tw:select-none"
    >
      {text}
    </motion.button>
  );
}

export default RunAwayButton;
