export function ShowPlanets(props) {
  return (
    <ul>
      {props.planets.map((planet, index) => (
        <li key={index}>{planet}</li>
      ))}
    </ul>
  );
}
