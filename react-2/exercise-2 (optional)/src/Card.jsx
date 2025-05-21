import React from "react";

export default function Card(props) {
  return (
    <li>
      <img src={props.data.src} alt={props.data.alt} />
    </li>
  );
}
