function Card({ title, src }) {
  return (
    <div className="content-card">
      <p className="title-card">{title}</p>
      <div className="opacity-card"></div>
      <img imageUrl={src} alt={`carte ${title}`} />
    </div>
  );
}

export default Card;
