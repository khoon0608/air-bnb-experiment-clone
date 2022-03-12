/** @format */

import pic from "../img/katie-zaferes.png";
import Card from "./card";

import data from "./data";

function CardContainer() {
  const cards = data.map(({ id, title, price, stats, location, openSpots }) => (
    <Card
      coverImg={pic}
      key={id}
      title={title}
      price={price}
      rating={stats.rating}
      reviewCount={stats.reviewCount}
      location={location}
      openSpots={openSpots}
    />
  ));
  return <ul className='cardContainer'>{cards}</ul>;
}

export default CardContainer;
