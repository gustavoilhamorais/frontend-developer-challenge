import React from "react";
import { Card } from "../../styles/Card";

const MerchandiseCard = props => {
  return (
    <Card>
      <img
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
