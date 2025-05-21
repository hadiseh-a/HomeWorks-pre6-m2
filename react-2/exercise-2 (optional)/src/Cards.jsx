import React from "react";
import Card from "./Card";

export default function Cards(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.data.map((dataOneCard) => {
        return <Card data={dataOneCard} />;
      })}
    </ul>
  );
}
