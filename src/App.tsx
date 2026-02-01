import { useState } from "react";

import WarmUp from "./components/WarmUp/WarmUp";
import Proposal from "./components/Proposal/Proposal";

function App() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="tw:w-screen tw:h-screen tw:bg-linear-to-r tw:from-bg-start tw:to-bg-end tw:overflow-hidden">
      {step === 0 && <WarmUp step={step} setStep={setStep} />}
      {step === 1 && <Proposal step={step} setStep={setStep} />}
    </div>
  );
}

export default App;
