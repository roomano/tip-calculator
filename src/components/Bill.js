import { useState } from "react";

export default function Bill({ bill, handleSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="number"
        value={bill}
        onChange={(e) => handleSetBill(e.target.value)}
      />
    </div>
  );
}
