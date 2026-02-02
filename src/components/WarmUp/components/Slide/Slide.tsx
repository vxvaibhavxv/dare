import type { WarmUpQuestionOption } from "../../WarmUp.types";

interface SlideProps {
  question: string;
  options: Array<WarmUpQuestionOption>;
  onClick?: (value: WarmUpQuestionOption) => void;
}

function Slide(props: SlideProps) {
  const { question, options, onClick } = props;

  return (
    <div className="tw:p-8 tw:bg-card tw:rounded-xl tw:w-150 tw:shadow-md">
      <p className="tw:mb-6 tw:text-text-primary tw:font-bold tw:text-2xl">
        {question}
      </p>
      <div className="tw:w-full">
        <div className="tw:grid tw:grid-cols-2 tw:gap-4">
          {options.map((option) => (
            <div
              className="tw:w-full tw:border-2 tw:rounded-xl tw:border-border tw:py-2 tw:px-4 tw:cursor-pointer tw:hover:bg-radial tw:flex tw:items-center tw:hover:from-bg-start tw:hover:to-bg-end"
              onClick={() => onClick?.(option)}
            >
              <p className="tw:text-text-primary tw:text-base">{option.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;
