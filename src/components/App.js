import { useState } from "react";
import Bill from "./Bill";
import ServiceSatisfation from "./ServiceSatisfation";
import BillResume from "./BillResume";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // const [tip, setTip] = useState(0);

  // function handleSatisfation(val) {
  //   console.log(val);
  //   if (val === "okay") setTip(bill * 0.05);
  //   if (val === "good") setTip(bill * 0.1);
  //   if (val === "amazing") setTip(bill * 0.2);
  //   setOneS(val);
  // }
  // function handleSatisfationT(val) {
  //   setTwoS(val);
  // }
  // function handleSetBill(val) {
  //   setBill(val);
  // }
  function handleSetBill(e) {
    console.log(e);
    if (e <= 0) return setBill(0);
    setBill(e);
  }

  function handlePercentage1(val) {
    val === "0" && setPercentage1(0);
    val === "5" && setPercentage1(5);
    val === "10" && setPercentage1(10);
    val === "20" && setPercentage1(20);
  }
  function handlePercentage2(val) {
    val === "0" && setPercentage2(0);
    val === "5" && setPercentage2(5);
    val === "10" && setPercentage2(10);
    val === "20" && setPercentage2(20);
  }
  return (
    <div>
      <Bill bill={bill} onSetBill={handleSetBill} />
      <ServiceSatisfation
        satisfaction={percentage1}
        onChange={handlePercentage1}
      >
        How did you like the service?
      </ServiceSatisfation>
      <ServiceSatisfation
        satisfaction={percentage2}
        onChange={handlePercentage2}
      >
        How did your friend like the service?
      </ServiceSatisfation>
      <BillResume
        bill={Number(bill)}
        percentage1={percentage1}
        percentage2={percentage2}
      />
    </div>
  );
}
