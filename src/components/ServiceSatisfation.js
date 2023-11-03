export default function ServiceSatisfation({
  satisfaction,
  handleSatisfation,
  children,
}) {
  return (
    <div>
      {children}{" "}
      <Satisfaction
        satisfaction={satisfaction}
        handleSatisfation={handleSatisfation}
      ></Satisfaction>
    </div>
  );
}

function Satisfaction({ satisfaction, handleSatisfation }) {
  return (
    <>
      <select
        value={satisfaction}
        onChange={(e) => handleSatisfation(e.target.value)}
      >
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing (20%)</option>
      </select>
    </>
  );
}
