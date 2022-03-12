/** @format */

import pic from "../img/katie-zaferes.png";
import Card from "./card";

import data from "./data";

function CardContainer() {
  const cards = data.map((json) => (
    <Card
      key={json.id}
      {...json}
      coverImg={pic}
    />
  ));
  return <ul className='cardContainer'>{cards}</ul>;
}

export default CardContainer;
