import Banner from "../../components/Banner"
import Card from "../../components/Cards"
import Footer from "../../components/Footer"
import HeaderSaibaMais from "../../components/HeaderSaibaMais"

const SaibaMais = () => (
    <>
        <HeaderSaibaMais />
        <Banner />
        <Card tipo="comidas" to="" titleButton="Adicionar ao carrinho" />
        <Footer />
    </>
)

export default SaibaMais
