import React from "react";
import Main from "./styled";

const MakeCard = props => {
  return (
    <div>
      <Main>
        <h1>Name: {props.name} </h1>
        <h3>Birth Year: {props.bday} </h3>
      </Main>
    </div>
  );
};

export default MakeCard;
