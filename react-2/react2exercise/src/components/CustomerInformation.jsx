export default function CustomerInformation(props) {
  return (
    <div>
      <h1>My name is{props.first_name}</h1>
      <h2>My last name is{props.last_name}</h2>
    </div>
  );
}
