import { useDispatch } from 'react-redux'
import { Button } from '../../styles'
import { Botoes, Form, Input } from './styles'
import { alteraEstadoCarrinho } from '../../store/reducers/cart'

const Pagamento = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Form>
        <h3>
          Pagamento - Valor total a pagar <span>R$ 100,00</span>
        </h3>
        <label htmlFor="nome">Nome no cartão</label>
        <Input type="text" id="nome" />
        <div>
          <div>
            <label htmlFor="num">Número no cartão</label>
            <Input type="number" id="num" />
          </div>
          <div>
            <label htmlFor="codigoCartao">CVV</label>
            <Input type="num" id="codigoCartao" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <Input type="text" id="mesVencimento" />
          </div>
          <div>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <Input type="number" id="anoVencimento" />
          </div>
        </div>
      </Form>
      <Botoes>
        <Button
          type="button"
          onClick={() => dispatch(alteraEstadoCarrinho('finalizado'))}
        >
          Finalizar pagamento
        </Button>
        <Button
          type="button"
          onClick={() => dispatch(alteraEstadoCarrinho('endereco'))}
        >
          Voltar para a edição de endereço
        </Button>
      </Botoes>
    </>
  )
}

export default Pagamento
