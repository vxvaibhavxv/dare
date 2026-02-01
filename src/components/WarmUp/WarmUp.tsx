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
    question: "Hey angry bird! 🐦 How are you feeling today?",
    options: [
      {
        text: "I'm feeling great!",
        value: 1,
        feedback: "That's the spirit! Keep soaring high!",
      },
      {
        text: "I'm tired but okay.",
        value: 2,
        feedback: "Then I hope this makes your day a little lighter.",
      },
      {
        text: "Could use a hug.",
        value: 3,
        feedback: "Sending you a big virtual hug! 🤗",
      },
      {
        text: "A little tiring.",
        value: 4,
        feedback: "Then you deserve something soft and nice right now.",
      },
    ],
  },
  {
    question: "Which one sounds like your ideal vibe right now?",
    options: [
      {
        text: "Cozy and calm",
        value: 1,
        feedback: "Noted. Cozy is underrated and perfect.",
      },
      {
        text: "Laughing and playful",
        value: 2,
        feedback: "That sounds dangerous but fun.",
      },
      {
        text: "Slightly romantic",
        value: 3,
        feedback: "That's a bold choice. I like it.",
      },
      {
        text: "Just spending time with someone nice",
        value: 4,
        feedback: "That sounds simple and honestly really meaningful.",
      },
    ],
  },
  {
    question:
      "Hypothetically, if I asked you to drop one of the following right now, which would it be?",
    options: [
      {
        text: "Eyerolling me (you're a very bad eyeroller)",
        value: 1,
        feedback: "Good choice! Eyerolling is so 2000.",
      },
      {
        text: "Taunting me with the phrase '10 days'",
        value: 2,
        feedback: "Finally off the plate!",
      },
      {
        text: "Rubbing it on my face that I'm from Delhi and your intoxicated thoughts about Delhi",
        value: 3,
        feedback:
          "Ladies and gentlemen, we have a winner! Vaibhav for the win! Delhi for the win!",
      },
      {
        text: "Calling me oldie even though I'm just 2 years older than you",
        value: 4,
        feedback: "You're such a sweetheart!",
      },
      {
        text: "None of the above, I love all of them equally",
        value: 5,
        feedback: "I knew you'd pick that one!",
      },
      {
        text: "All of them because I care about you",
        value: 6,
        feedback: "Aww, you're such a sweet baddie",
      },
    ],
  },
  {
    question:
      "Are you ready for something unexpected? Let's pretend you didn't see it coming",
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
        text: "Bring it on! I love unexpected things!",
        value: 3,
        feedback: "Love the energy! Love the enthusiasm! Let's dive in.",
      },
      {
        text: "Depends. Is it embarrassing?",
        value: 4,
        feedback: "Only the good kind of embarrassing.",
      },
    ],
  },
];

function WarmUp() {
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
    setCurrentSlideIndex(currentSlideIndex + 1);
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
