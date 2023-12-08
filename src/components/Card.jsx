import "../styles/App.css";

function Card({ title, cover }) {
  return (
    <div className="card">
      <p className="title-card">{title}</p>
      <img imageUrl={cover} alt={title} />
    </div>
  );
}

export default Card;
