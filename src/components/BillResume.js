export default function BillResume({ bill, tip }) {
  const total = bill + tip;

  return (
    <div>
      You Pay ${total} (${bill} + ${tip})
    </div>
  );
}
