import "../styles/App.css";

function Banner({ imageUrl, text } /*accolades obligatoire !*/) {
  return (
    <div className="banner">
      <h1>{text}</h1>
      <img src={imageUrl} alt="falaise en bord de mer comme bannière" />
    </div>
  );
}

export default Banner;
