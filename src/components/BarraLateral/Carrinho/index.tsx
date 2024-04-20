import { useDispatch, useSelector } from 'react-redux'

import { parseToBrl, somaCarrinho } from '../../../utils'
import { alteraEstadoCarrinho, remove } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

import lixeira from '../../assets/images/lixeira.png'
import * as S from './styles'
import { Button } from '../../../styles'

const Carrinho = () => {
  const { itemsCarrinho } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <ul>
        {itemsCarrinho.map((i) => (
          <S.ListLink key={i.id}>
            <div>
              <img src={i.foto} alt="" />
              <div>
                <h3>{i.nome}</h3>
                <span>{parseToBrl(i.preco)}</span>
              </div>
              <S.Lixeira type="button" onClick={() => dispatch(remove(i.id))}>
                <img src={lixeira} alt="" />
              </S.Lixeira>
            </div>
          </S.ListLink>
        ))}
      </ul>
      <S.AreaConfirmacao>
        <div>
          <h5>Valor total</h5>
          <span>{parseToBrl(somaCarrinho(itemsCarrinho))}</span>
        </div>
        <Button
          type="button"
          onClick={() => dispatch(alteraEstadoCarrinho('endereco'))}
        >
          Continuar com a entrega
        </Button>
      </S.AreaConfirmacao>
    </>
  )
}

export default Carrinho
