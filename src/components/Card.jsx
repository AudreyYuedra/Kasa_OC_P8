function Card({ title, imgUrl }) {
  return (
    <div className="content-card">
      <p className="title-card">{title}</p>
      <div className="opacity-card"></div>
      <img src={imgUrl} alt={`carte ${title}`} />
    </div>
  );
}

export default Card;
