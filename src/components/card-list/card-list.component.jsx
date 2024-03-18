import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    //console.log("render from CardList");
    // console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              ></img>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
