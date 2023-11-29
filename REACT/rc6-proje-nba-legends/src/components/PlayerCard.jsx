import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => {
    setShowImage(!showImage);
  };
  return (
    <Card onClick={handleClick} className="rounded-2 m-auto player-card">
      {showImage ? (
        <Card.Img
          variant="top"
          src={img}
          className="player-logo"
          role="button"
        />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return <li className="h5 text-start" key={i}>🏀{item}</li>;
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;