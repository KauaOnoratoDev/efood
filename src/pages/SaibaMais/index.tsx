import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderSaibaMais from '../../components/HeaderSaibaMais'
import Cardapio from '../../components/Cardapio'

const SaibaMais = () => {
  return (
    <>
      <HeaderSaibaMais />
      <Banner />
      <Cardapio titleButton="Adicionar ao carrinho" />
      <Footer />
    </>
  )
}

export default SaibaMais
