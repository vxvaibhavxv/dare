import RunAwayButton from "./RunAwayButton/RunAwayButton";

interface ProposalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Proposal(props: ProposalProps) {
  const { step, setStep } = props;

  const handleSuccess = () => {
    setStep(step + 1);
  };

  return (
    <div className="tw:w-full tw:h-full tw:flex tw:items-center tw:justify-center">
      <div className="tw:p-8 tw:bg-card tw:rounded-xl tw:w-150">
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
      </div>
    </div>
  );
}

export default Proposal;
