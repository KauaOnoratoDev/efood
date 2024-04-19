import { useSelector } from 'react-redux'
import Carrinho from '../Carrinho'
import Entrega from './Entrega'
import Pagamento from './Pagamento'
import PedidoRealizado from './PedidoRealizado'
import { BarraLateral as Barra } from './styles'
import { RootReducer } from '../../store'

const BarraLateral = () => {
  const { estado } = useSelector((state: RootReducer) => state.cart)

  return (
    <Barra>
      {estado === 'carrinho' && <Carrinho />}
      {estado === 'endereco' && <Entrega />}
      {estado === 'pagamento' && <Pagamento />}
      {estado === 'finalizado' && <PedidoRealizado />}
    </Barra>
  )
}

export default BarraLateral
