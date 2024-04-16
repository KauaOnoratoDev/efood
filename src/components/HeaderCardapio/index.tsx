import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Container, Img, Title } from './styles'
import { Button } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { alteraEstadoCarrinho } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const HeaderCardapio = () => {
  const dispatch = useDispatch()
  const { itemsCarrinho } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <Container>
        <div className="container">
          <Link to={'/'}>
            <Title className="restaurantes">Restaurantes</Title>
          </Link>
          <Img src={logo} alt="logo" />
          <Button
            type="button"
            onClick={() =>
              itemsCarrinho.length > 0
                ? dispatch(alteraEstadoCarrinho('carrinho'))
                : alert('Adicione pelo menos um item no carrinho')
            }
          >
            <span>{itemsCarrinho.length}</span> produto(s) no carrinho
          </Button>
        </div>
      </Container>
    </>
  )
}

export default HeaderCardapio
