import Header from "../../components/Header/Header.jsx"
import Banner from "../../components/Banner/Banner.jsx"
import Banner_About from "../../assets/paysage_banner_about.png"
import AboutDatas from "../../datas/AboutData.json"
import Collapse from "../../components/Collapse/Collapse.jsx"
import Footer from "../../components/Footer/Footer.jsx"

import "./About.css"

export default About

function About() {
   return (
      <div>
         <Header />
         <main>
            <Banner imageUrl={Banner_About} content="vallée de colline recouvert de forêts" />
            <section>
               {AboutDatas.map((data, index) => (
                  <Collapse key={index} title={data.title} content={data.description} />
               ))}
            </section>
         </main>
         <Footer />
      </div>
   )
}
