import "../styles/App.css";

function Banner({ imageUrl, text }) {
  return (
    <div className="banner">
      <h1>{text}</h1>
      <div className="opacity"></div>
      <img src={imageUrl} alt="falaise en bord de mer comme bannière" />
    </div>
  );
}

export default Banner;
