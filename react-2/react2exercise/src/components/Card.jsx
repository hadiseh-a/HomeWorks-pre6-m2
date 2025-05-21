export default function Card(props) {
  return (
    <div className="card m-5">
      <img
        className="card-img-top"
        src={props.data.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.cardTitle}</h5>
        <p className="card-text">
          {props.data.cardTitle} : {props.data.cardDescription}
        </p>
        <a href={props.data.button.url} className="btn btn-primary">
          {props.data.button.label}
        </a>
      </div>
    </div>
  );
}
