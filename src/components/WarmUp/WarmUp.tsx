import { useState } from "react";

import Slide from "./components/Slide/Slide";
import Modal from "./components/Modal/Modal";

import type {
  WarmUpData,
  WarmUpQuestionOption,
  WarmUpQuestion,
} from "./WarmUp.types";

const data: WarmUpData = [
  {
    question: "Hey angry bird 🐦 How are you feeling today?",
    options: [
      {
        text: "I'm feeling great!",
        value: 1,
        feedback: "That's the spirit. I like seeing you happy.",
      },
      {
        text: "I'm tired but okay",
        value: 2,
        feedback: "Then I hope this makes your day a little lighter.",
      },
      {
        text: "I could use a hug",
        value: 3,
        feedback: "Sending you a big virtual hug, you deserve one! 🫂",
      },
      {
        text: "It's been a little tiring",
        value: 4,
        feedback: "Then you deserve something soft and nice right now.",
      },
    ],
  },
  {
    question:
      "If we were spending time together right now what would we most likely be doing?",
    options: [
      {
        text: "Talking and laughing about random things",
        value: 1,
        feedback: "That sounds like a pretty perfect time honestly.",
      },
      {
        text: "Sitting somewhere cozy and peaceful",
        value: 2,
        feedback: "That sounds calm and really nice.",
      },
      {
        text: "Roaming around and exploring places",
        value: 3,
        feedback: "That sounds fun. I like that adventurous side.",
      },
      {
        text: "Quietly enjoying each other's company",
        value: 4,
        feedback: "That's actually very meaningful.",
      },
    ],
  },
  {
    question:
      "Hypothetically, if you had to drop one thing right now, what would that be?",
    options: [
      {
        text: "Eyerolling me",
        value: 1,
        feedback: "Good choice! Eyerolling is so 2000.",
      },
      {
        text: "The '10 days' taunt",
        value: 2,
        feedback: "Finally peace has been restored!",
      },
      {
        text: "Rubbing it on my face that I'm from Delhi",
        value: 3,
        feedback: "Delhi respectfully accepts this victory.",
      },
      {
        text: "Calling me old even though I'm just 2 years older",
        value: 4,
        feedback: "You're such a sweetheart!",
      },
      {
        text: "Don't tell me what to do",
        value: 5,
        feedback: "I knew you'd pick that one!",
      },
      {
        text: "Of course all of them",
        value: 6,
        feedback: "Aww, you're such a sweet baddie.",
      },
    ],
  },
  {
    question: "How do you feel when we spend time together?",
    options: [
      {
        text: "It makes me happy",
        value: 1,
        feedback: "That genuinely makes me really happy to hear.",
      },
      {
        text: "It feels comfortable",
        value: 2,
        feedback:
          "Being comfortable around someone is rare. I'm glad you feel that.",
      },
      {
        text: "It makes me smile more than I admit",
        value: 3,
        feedback: "That's my favourite kind of answer.",
      },
      {
        text: "I enjoy it, but I won't say it out loud",
        value: 4,
        feedback: "That sounds like a yes disguised as mystery.",
      },
    ],
  },
  {
    question:
      "Are you ready for something slightly unexpected? Let's pretend you didn't see it coming.",
    options: [
      {
        text: "I'm curious now",
        value: 1,
        feedback: "Perfect. Curiosity suits you.",
      },
      {
        text: "I'm nervous but okay",
        value: 2,
        feedback: "Don't worry. I'd never put you in an uncomfortable spot.",
      },
      {
        text: "Bring it on",
        value: 3,
        feedback: "I love that energy.",
      },
      {
        text: "Is it embarrassing?",
        value: 4,
        feedback: "Only the good kind of embarrassing. Promise.",
      },
    ],
  },
];

interface WarmUpProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function WarmUp(props: WarmUpProps) {
  const { step, setStep } = props;

  const [responses, setResponses] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalFeedback, setModalFeedback] = useState<string>("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const handleOptionClick = (value: WarmUpQuestionOption) => {
    setResponses([...responses, value.value]);
    setModalFeedback(value.feedback);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);

    if (currentSlideIndex + 1 === data.length) {
      setStep(step + 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  return (
    <div className="tw:w-full tw:h-full tw:flex tw:items-center tw:justify-center">
      {data.map((slide: WarmUpQuestion, index: number) => {
        if (index !== currentSlideIndex) return null;

        return (
          <>
            <Slide
              key={slide.question}
              question={slide.question}
              options={slide.options}
              onClick={handleOptionClick}
            />
            <Modal
              show={showModal}
              onClose={handleCloseModal}
              title={modalFeedback}
            />
          </>
        );
      })}
    </div>
  );
}

export default WarmUp;
