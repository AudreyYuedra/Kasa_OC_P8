import Banner from "../../components/Banner.jsx"
import Banner_Home from "../../assets/paysage_banner_home.png"
import Gallery from "../../components/Gallery.jsx"

import "./Home.css"

export default Home

function Home() {
   return (
      <main>
         <Banner imageUrl={Banner_Home} text={"Chez vous, partout et ailleurs"} content="falaise en bord de mer" />
         <Gallery />
      </main>
   )
}
