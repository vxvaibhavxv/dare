import { useEffect } from "react";
import { motion } from "framer-motion";

import Smile from "../../images/smile.png";

interface PreProposalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function PreProposal(props: PreProposalProps) {
  const { step, setStep } = props;

  useEffect(() => {
    setTimeout(() => {
      setStep(step + 1);
    }, 5000);
  }, []);

  return (
    <div className="tw:w-full tw:h-full tw:flex-col tw:flex tw:items-center tw:justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="tw:p-8 tw:bg-card tw:rounded-xl tw:w-150 tw:z-50 tw:flex tw:items-center tw:justify-between tw:gap-6 tw:shadow-md"
      >
        <div>
          <p className="tw:text-text-primary tw:font-bold tw:text-lg">
            Okay. I'm glad you stayed till here. I wanted to ask you something
            properly.
          </p>
        </div>
        <img src={Smile} className="tw:w-20" />
      </motion.div>
    </div>
  );
}

export default PreProposal;
