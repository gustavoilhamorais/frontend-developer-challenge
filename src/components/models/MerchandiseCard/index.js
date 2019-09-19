import React from "react";
import { Card } from "../../styles/Card";

const MerchandiseCard = props => {
  return (
    <Card key={props.cardkey + "card"}>
      <img
        key={props.imgkey}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      {props.children}
    </Card>
  );
};

export default MerchandiseCard;
