import { useState } from "react";

import WarmUp from "./components/WarmUp/WarmUp";
import Proposal from "./components/Proposal/Proposal";
import PreProposal from "./components/PreProposal/PreProposal";
import Celebrations from "./components/Celebrations/Celebrations";

import useImagePreloader from "./hooks/useImagePreLoader";

function App() {
  const [step, setStep] = useState<number>(1);

  useImagePreloader();

  return (
    <div className="tw:w-screen tw:h-screen tw:bg-linear-to-r tw:from-bg-start tw:to-bg-end tw:overflow-hidden">
      {step === 1 && <WarmUp step={step} setStep={setStep} />}
      {step === 2 && <PreProposal step={step} setStep={setStep} />}
      {step === 3 && <Proposal step={step} setStep={setStep} />}
      {step === 4 && <Celebrations />}
    </div>
  );
}

export default App;
