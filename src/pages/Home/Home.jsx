import Header from "../../components/Header/Header.jsx"
import Banner from "../../components/Banner/Banner.jsx"
import Banner_Home from "../../assets/paysage_banner_home.png"
import Gallery from "../../components/Gallery/Gallery.jsx"
import Footer from "../../components/Footer/Footer.jsx"

import "./Home.css"

export default Home

function Home() {
   return (
      <div>
         <Header />
         <main>
            <Banner imageUrl={Banner_Home} text={"Chez vous, partout et ailleurs"} content="falaise en bord de mer" />
            <Gallery />
         </main>
         <Footer />
      </div>
   )
}
