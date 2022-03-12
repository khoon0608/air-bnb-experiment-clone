/** @format */

function Card({ photo, score, reviewNum, country, cost }) {
  return (
    <div className='card'>
      <img src={photo} alt='photo' />
      <div>
        <span style={{ color: "#FE395C" }}>★ </span> <span>{score} </span>
        <span style={{ opacity: " 0.5" }}>
          ({reviewNum}) · {country}
        </span>
      </div>
      <div>Life lessons with Katie zaferes</div>
      <div>
        <span style={{ fontWeight: "bold" }}>From {cost}</span> / person
      </div>
    </div>
  );
}

export default Card;
