import { useDispatch, useSelector } from 'react-redux'

import { alteraEstadoCarrinho } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

import { Button } from '../../../styles'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Loader'

const PedidoRealizado = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootReducer) => state.cart)

  !data && <Loader />

  return (
    <Container>
      <h3>Pedido realizado - ({data})</h3>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido. <br />{' '}
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras. <br /> <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
        <br /> <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button
        type="button"
        onClick={() => {
          dispatch(alteraEstadoCarrinho(''))
          navigate('/')
        }}
      >
        Concluir
      </Button>
    </Container>
  )
}

export default PedidoRealizado
