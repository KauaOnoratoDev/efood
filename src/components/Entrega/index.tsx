import { useDispatch } from 'react-redux'
import { Button } from '../../styles'
import { Botoes, Form, Input } from './styles'
import { alteraEstadoCarrinho } from '../../store/reducers/cart'
import { useFormik } from 'formik'

const Entrega = () => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      num: 0,
      complemento: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      <Form onSubmit={form.handleSubmit}>
        <h3>Entrega</h3>
        <label htmlFor="nome">Quem irá receber</label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
        />
        <label htmlFor="endereco">Endereço</label>
        <Input
          type="text"
          id="endereco"
          name="endereco"
          value={form.values.endereco}
          onChange={form.handleChange}
        />
        <label htmlFor="cidade">Cidade</label>
        <Input
          type="text"
          id="cidade"
          name="cidade"
          value={form.values.cidade}
          onChange={form.handleChange}
        />
        <div>
          <div>
            <label htmlFor="cep">CEP</label>
            <Input
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
            />
          </div>
          <div>
            <label htmlFor="num">Número</label>
            <Input
              type="number"
              id="num"
              name="num"
              value={form.values.num}
              onChange={form.handleChange}
            />
          </div>
        </div>
        <label htmlFor="complemento">Complemento (opcional)</label>
        <Input
          type="text"
          id="complemento"
          name="complemento"
          value={form.values.complemento}
          onChange={form.handleChange}
        />
        <Botoes>
          <Button
            type="submit"
            onClick={() => dispatch(alteraEstadoCarrinho('pagamento'))}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(alteraEstadoCarrinho('carrinho'))}
          >
            Voltar para o carrinho
          </Button>
        </Botoes>
      </Form>
    </>
  )
}

export default Entrega
