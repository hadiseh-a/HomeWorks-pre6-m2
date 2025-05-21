export function Alert(props) {
  return (
    <>
      <div class="alert alert-danger" role="alert">
        {props.text}
      </div>
    </>
  );
}
