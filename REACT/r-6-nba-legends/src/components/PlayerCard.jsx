import React from 'react'
import {Card} from "react-bootstrap";

const PlayerCard = ({name, img, statistics}) => {
  return (
    <Card className='rounded-2 m-auto player-card'>
      <Card.Img variant="top" src={img} className="player-logo" role="button"/>
      
      <Card.Footer>
        <Card.Title >{name}</Card.Title>
       </Card.Footer>
    </Card>
  );
};

export default PlayerCard;