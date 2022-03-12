/** @format */

import photo from "../img/katie-zaferes.png";
import Card from "./card";

function CardContainer() {
  return (
    <section className='cardContainer'>
      <Card
        photo={photo}
        score='5.0'
        reviewNum='6'
        country='USA'
        program='Life lessons with Katie zaferes'
        cost='$136'
      />
      <Card
        photo={photo}
        score='5.0'
        reviewNum='30'
        country='USA'
        program='Learn wedding photography'
        cost='$125'
      />
      <Card
        photo={photo}
        score='4.8'
        reviewNum='2'
        country='USA'
        program='Group Mountain Bikin'
        cost='$50'
      />
    </section>
  );
}

export default CardContainer;
