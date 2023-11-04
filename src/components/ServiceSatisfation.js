export default function ServiceSatisfation({
  satisfaction,
  onChange,
  children,
}) {
  return (
    <div>
      {children}
      <Satisfaction
        satisfaction={satisfaction}
        onChangeSatisfation={onChange}
      ></Satisfaction>
    </div>
  );
}

function Satisfaction({ satisfaction, onChangeSatisfation }) {
  return (
    <>
      <select
        value={satisfaction}
        onChange={(e) => onChangeSatisfation(e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </>
  );
}
