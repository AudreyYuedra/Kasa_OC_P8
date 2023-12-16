import Banner from "../components/Banner.jsx";
import Banner_About from "../assets/paysage_banner_about.png";
import AboutDatas from "../datas/AboutData.json";
import Collapse from "../components/Collapse.jsx";
import "../styles/App.css";

function About() {
  return (
    <main className="main-about">
      <Banner imageUrl={Banner_About} />
      <div className="container-collapse">
        {AboutDatas.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.description} />
        ))}
      </div>
    </main>
  );
}

export default About;
