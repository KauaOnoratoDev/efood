import { useDispatch } from 'react-redux'
import { alteraEstadoCarrinho, zerarCarrinho } from '../../store/reducers/cart'
import { Button } from '../../styles'
import { Container } from './styles'

const PedidoRealizado = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <h3>Pedido realizado - (Order_ID)</h3>
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
          dispatch(zerarCarrinho())
          alert('Seu pedido foi realizado com sucesso!')
        }}
      >
        Concluir
      </Button>
    </Container>
  )
}

export default PedidoRealizado
