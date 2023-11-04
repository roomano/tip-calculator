export default function BillResume({ bill, percentage1, percentage2 }) {
  const tip = (bill * (percentage1 + percentage2)) / 100;

  return (
    <div>
      {bill !== 0 && (
        <>
          You Pay ${bill + tip} (${bill} + ${tip})
        </>
      )}
    </div>
  );
}
