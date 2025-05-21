export default function RenderList(props) {
  return (
    <ol>
      {props.array.map((item,i) => {
        return <li key={i}>{item.label}</li>;
      })}
    </ol>
  );
}
