import { useDispatch, useSelector } from 'react-redux'
import lixeira from '../../assets/images/lixeira.png'
import { Button } from '../../styles'
import { AreaConfirmacao, BarraLateral, ListLink, Lixeira } from './styles'
import { RootReducer } from '../../store'
import { formataPreco } from '../Cardapio'
import { Cardapio } from '../../pages/Home'
import { remove } from '../../store/reducers/cart'

const Carrinho = () => {
  const { itemsCarrinho } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const somaCarrinho = (item: Cardapio[]) => {
    return item.reduce((acumulador, itemAtual) => {
      return (acumulador += itemAtual.preco)
    }, 0)
  }

  return (
    <>
      <BarraLateral>
        <ul>
          {itemsCarrinho.map((i) => (
            <ListLink key={i.id}>
              <div>
                <img src={i.foto} alt="" />
                <div>
                  <h3>{i.nome}</h3>
                  <span>{formataPreco(i.preco)}</span>
                </div>
                <Lixeira type="button" onClick={() => dispatch(remove(i.id))}>
                  <img src={lixeira} alt="" />
                </Lixeira>
              </div>
            </ListLink>
          ))}
        </ul>
        <AreaConfirmacao>
          <div>
            <h5>Valor total</h5>
            <span>{formataPreco(somaCarrinho(itemsCarrinho))}</span>
          </div>
          <Button type="button">Continuar com a entrega</Button>
        </AreaConfirmacao>
      </BarraLateral>
    </>
  )
}

export default Carrinho
