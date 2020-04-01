import React from "react";
// import { robots } from "./robots";
import Card from "./Card";
import "../containers/Card.css";
const CardList = ({ robots, searchChange }) => {
  return (
    <div className="box">
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
