import PokeCard from "./pokeCard";

export default function Pokedex(props) {
  return (
    <>
      <h2
        style={{
          color: "GrayText",
        }}
      >
        Pokedex
      </h2>
      <ul>
        {props.array.map((item) => {
          return (
            <li>
              <PokeCard item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
