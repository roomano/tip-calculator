export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}
