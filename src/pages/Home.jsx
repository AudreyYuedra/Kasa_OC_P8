import Banner from "../components/Banner";
import Banner_Home from "../assets/paysage_banner_home.png";
import Gallery from "../components/Gallery";
import "../styles/App.css";

function Home() {
  return (
    <main>
      <Banner imageUrl={Banner_Home} text={"Chez vous, partout et ailleurs"} />
      <Gallery />
    </main>
  );
}

export default Home;
