import "./pokemon.css";
export default function PokeCard(props) {
  return (
    <div className="card ">
      <div className="card-body">
        <h3 className="card-title">{props.item.name}</h3>
        <img className="card-img-top" src={props.item.image} alt="Card image cap" />
        <h4 style={{color:"black"}}>Type : {props.item.type}</h4>
      </div>
    </div>
  );
}
