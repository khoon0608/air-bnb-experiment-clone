/** @format */

function Card({
  coverImg,
  json: {
    title,
    stats: { rating, reviewCount },
    location,
    price,
    openSpots,
  },
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <li className='card'>
      {badgeText ? (
        <div style={{ fontWeight: "bold" }} className='badgeText'>
          {badgeText}
        </div>
      ) : null}
      <img src={coverImg} alt='photo' />
      <div>
        <span style={{ color: "#FE395C" }}>★ </span> <span>{rating} </span>
        <span style={{ opacity: " 0.5" }}>
          ({reviewCount}) · {location}
        </span>
      </div>
      <div>{title}</div>
      <div>
        <span style={{ fontWeight: "bold" }}>From $ {price}</span> / person
      </div>
    </li>
  );
}

export default Card;
