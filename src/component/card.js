/** @format */

import photo from "../img/katie-zaferes.png";

function Card() {
  return (
    <section className='card'>
      <div className='card--row'>
        <img src={photo} alt='photo' />
        <div>
          <span style={{ color: "#FE395C" }}>★</span> 5.0{" "}
          <span style={{ opacity: " 0.5" }}>(6)·USA</span>
        </div>
        <div>Life lessons with Katie zaferes</div>
        <div>
          <span style={{ fontWeight: "bold" }}>From $136</span> / person
        </div>
      </div>
      <div className='card--row'>
        <img src={photo} alt='photo' />
        <div>
          <span style={{ color: "#FE395C" }}>★</span> 5.0{" "}
          <span style={{ opacity: " 0.5" }}>(6)·USA</span>
        </div>
        <div>Life lessons with Katie zaferes</div>
        <div>
          <span style={{ fontWeight: "bold" }}>From $136</span> / person
        </div>
      </div>
      <div className='card--row'>
        <img src={photo} alt='photo' />
        <div>
          <span style={{ color: "#FE395C" }}>★</span> 5.0{" "}
          <span style={{ opacity: " 0.5" }}>(6)·USA</span>
        </div>
        <div>Life lessons with Katie zaferes</div>
        <div>
          <span style={{ fontWeight: "bold" }}>From $136</span> / person
        </div>
      </div>
    </section>
  );
}

export default Card;
