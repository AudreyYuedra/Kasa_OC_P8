import Banner from "../../components/Banner.jsx"
import Banner_About from "../../assets/paysage_banner_about.png"
import AboutDatas from "../../datas/AboutData.json"
import Collapse from "../../components/Collapse.jsx"

import "./About.css"

export default About

function About() {
   return (
      <main>
         <Banner imageUrl={Banner_About} />
         <section>
            {AboutDatas.map((data, index) => (
               <Collapse key={index} title={data.title} content={data.description} />
            ))}
         </section>
      </main>
   )
}
