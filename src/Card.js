import React from "react";

class Card extends React.PureComponent {
  render() {
    return (
      <div className="card">
        <div className="imgContainer">
          <img
            className="imgContain"
            src={"https://placehold.it/400x600"}
            alt="Paris"
          />
        </div>
      </div>
    );
  }
}

export default Card;
