import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderCardapio from '../../components/HeaderCardapio'
import Cardapios from '../../components/Cardapio'

const CardapioComponent = () => {
  return (
    <>
      <HeaderCardapio />
      <Banner />
      <Cardapios titleButton="Adicionar ao carrinho" />
      <Footer />
    </>
  )
}

export default CardapioComponent
