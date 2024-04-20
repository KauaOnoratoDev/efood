import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { alteraEstadoCarrinho } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import * as S from './styles'
import { Button } from '../../styles'

const HeaderCardapio = () => {
  const dispatch = useDispatch()
  const { itemsCarrinho } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <S.Container>
        <div className="container">
          <Link to={'/'}>
            <S.Title className="restaurantes">Restaurantes</S.Title>
          </Link>
          <S.Img src={logo} alt="logo" />
          <Button
            type="button"
            onClick={() => dispatch(alteraEstadoCarrinho('carrinho'))}
          >
            <span>{itemsCarrinho.length}</span> produto(s) no carrinho
          </Button>
        </div>
      </S.Container>
    </>
  )
}

export default HeaderCardapio
