import { Component } from "react";
import "./card-list.styles.css";
import Card from "./../card/card.component";

// first parameter is the prop always. And since that never changes, we destructure within the parameter.
const CardList = ({ monsters }) => {
  //const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
