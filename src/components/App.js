import { useState } from "react";
import Bill from "./Bill";
import ServiceSatisfation from "./ServiceSatisfation";
import BillResume from "./BillResume";

export default function App() {
  const [oneS, setOneS] = useState("dissatisfied");
  const [twoS, setTwoS] = useState("dissatisfied");
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

  function handleSatisfation(val) {
    console.log(val);
    if (val === "okay") setTip(bill * 0.05);
    if (val === "good") setTip(bill * 0.1);
    if (val === "amazing") setTip(bill * 0.2);
    setOneS(val);
  }
  function handleSatisfationT(val) {
    setTwoS(val);
  }
  function handleSetBill(val) {
    setBill(val);
  }

  return (
    <div>
      <Bill bill={bill} handleSetBill={handleSetBill} />
      <ServiceSatisfation
        satisfaction={oneS}
        handleSatisfation={handleSatisfation}
      >
        How did you like the service?
      </ServiceSatisfation>
      <ServiceSatisfation
        satisfaction={twoS}
        handleSatisfation={handleSatisfationT}
      >
        How did your friend like the service?
      </ServiceSatisfation>
      <BillResume bill={Number(bill)} tip={tip} />
    </div>
  );
}
