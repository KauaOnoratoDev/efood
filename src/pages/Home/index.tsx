import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Restaurants from "../../components/Cards"

const Home = () => (
    <>
        <Header />
        <Restaurants tipo="restaurantes" to="/saibaMais" titleButton="Saiba mais" />
        <Footer />
    </>
)

export default Home
