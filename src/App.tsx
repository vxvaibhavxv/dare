import { useState } from "react";

import WarmUp from "./components/WarmUp/WarmUp";
import Proposal from "./components/Proposal/Proposal";
import Celebrations from "./components/Celebrations/Celebrations";

function App() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="tw:w-screen tw:h-screen tw:bg-linear-to-r tw:from-bg-start tw:to-bg-end tw:overflow-hidden">
      {step === 1 && <WarmUp step={step} setStep={setStep} />}
      {step === 2 && <Proposal step={step} setStep={setStep} />}
      {step === 3 && <Celebrations step={step} setStep={setStep} />}
    </div>
  );
}

export default App;
