import { useSelector } from 'react-redux'

import Carrinho from './Carrinho'
import Entrega from './Entrega'
import Pagamento from './Pagamento'
import PedidoRealizado from './PedidoRealizado'

import { RootReducer } from '../../store'

import { BarraLateral as Barra } from './styles'

const BarraLateral = () => {
  const { estado, data } = useSelector((state: RootReducer) => state.cart)

  return (
    <Barra>
      {estado === 'carrinho' && <Carrinho />}
      {estado === 'endereco' && <Entrega />}
      {estado === 'pagamento' && <Pagamento />}
      {estado === 'finalizado' && <PedidoRealizado data={data} />}
    </Barra>
  )
}

export default BarraLateral
