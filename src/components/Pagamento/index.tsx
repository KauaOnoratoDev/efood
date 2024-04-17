import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { Button } from '../../styles'
import { Botoes, Form, Input } from './styles'
import { alteraEstadoCarrinho } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'

const Pagamento = () => {
  const dispatch = useDispatch()
  const { api } = useSelector((state: RootReducer) => state.cart)

  const formPagamento = useFormik({
    initialValues: {
      nomeCartao: '',
      codigoCartao: '',
      mesVencimento: '',
      anoVencimento: '',
      numCartao: ''
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string()
        .min(5, 'O nome precisa ter mais de 5 caracteres')
        .required('O campo é obrigatório'),
      codigoCartao: Yup.string()
        .min(3, 'O numero precisa ter 3 caracteres')
        .max(3)
        .required('O campo é obrigatório'),
      mesVencimento: Yup.string()
        .min(2, 'O mes de vencimento precisa ter 2 caracteres')
        .max(2)
        .required('O campo é obrigatório'),
      anoVencimento: Yup.string()
        .min(2, 'O ano de vencimento precisa ter 2 caracteres')
        .max(2)
        .required('O campo é obrigatório'),
      numCartao: Yup.string()
        .min(16, 'O numero precisa ter 16 caracteres')
        .max(16)
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formPagamento.touched
    const isValid = fieldName in formPagamento.errors

    if (isTouched && isValid) {
      return message
    }
    return ''
  }
  return (
    <>
      <Form onSubmit={formPagamento.handleSubmit}>
        <h3>
          Pagamento - Valor total a pagar <span>R$ 100,00</span>
        </h3>
        <div>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <Input
            type="text"
            id="nomeCartao"
            name="nomeCartao"
            value={formPagamento.values.nomeCartao}
            onChange={formPagamento.handleChange}
            onBlur={formPagamento.handleBlur}
          />
          <small>
            {getErrorMessage('nomeCartao', formPagamento.errors.nomeCartao)}
          </small>
        </div>
        <div>
          <div>
            <label htmlFor="numCartao">Número no cartão</label>
            <Input
              type="number"
              id="numCartao"
              name="numCartao"
              value={formPagamento.values.numCartao}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
            />
            <small>
              {getErrorMessage('numCartao', formPagamento.errors.numCartao)}
            </small>
          </div>
          <div>
            <label htmlFor="codigoCartao">CVV</label>
            <Input
              type="num"
              id="codigoCartao"
              name="codigoCartao"
              value={formPagamento.values.codigoCartao}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
            />
            <small>
              {getErrorMessage(
                'codigoCartao',
                formPagamento.errors.codigoCartao
              )}
            </small>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <Input
              type="number"
              id="mesVencimento"
              name="mesVencimento"
              value={formPagamento.values.mesVencimento}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
            />
            <small>
              {getErrorMessage(
                'mesVencimento',
                formPagamento.errors.mesVencimento
              )}
            </small>
          </div>
          <div>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <Input
              type="number"
              id="anoVencimento"
              name="anoVencimento"
              value={formPagamento.values.anoVencimento}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
            />
            <small>
              {getErrorMessage(
                'anoVencimento',
                formPagamento.errors.anoVencimento
              )}
            </small>
          </div>
        </div>
      </Form>
      <Botoes>
        <Button
          type="submit"
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
