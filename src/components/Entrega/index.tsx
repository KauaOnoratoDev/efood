import { useDispatch } from 'react-redux'
import { Button } from '../../styles'
import { Botoes, Form, Input } from './styles'
import { adicionarApi, alteraEstadoCarrinho } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Entrega = () => {
  const dispatch = useDispatch()

  const formEntrega = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      num: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O cep precisa ter pelo menos 8 caracteres')
        .max(8, 'O cep precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      num: Yup.string()
        .min(11, 'O numero precisa ter pelo menos 11 caracteres')
        .max(11, 'O numero precisa ter 11 caracteres')
        .required('O campo é obrigatório'),
      complemento: Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(formEntrega)

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formEntrega.touched
    const isValid = fieldName in formEntrega.errors

    if (isTouched && isValid) {
      return message
    }
    return ''
  }

  return (
    <>
      <Form onSubmit={formEntrega.handleSubmit}>
        <h3>Entrega</h3>
        <div>
          <label htmlFor="nome">Quem irá receber</label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formEntrega.values.nome}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
          <small>{getErrorMessage('nome', formEntrega.errors.nome)}</small>
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <Input
            type="text"
            id="endereco"
            name="endereco"
            value={formEntrega.values.endereco}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
          <small>
            {getErrorMessage('endereco', formEntrega.errors.endereco)}
          </small>
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <Input
            type="text"
            id="cidade"
            name="cidade"
            value={formEntrega.values.cidade}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
          <small>{getErrorMessage('cidade', formEntrega.errors.cidade)}</small>
        </div>
        <div className="cepNum">
          <div>
            <label htmlFor="cep">CEP</label>
            <Input
              type="number"
              id="cep"
              name="cep"
              value={formEntrega.values.cep}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
            />
            <small>{getErrorMessage('cep', formEntrega.errors.cep)}</small>
          </div>
          <div>
            <label htmlFor="num">Número</label>
            <Input
              type="number"
              id="num"
              name="num"
              value={formEntrega.values.num}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
            />
            <small>{getErrorMessage('num', formEntrega.errors.num)}</small>
          </div>
        </div>
        <div>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <Input
            type="text"
            id="complemento"
            name="complemento"
            value={formEntrega.values.complemento}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
        </div>
        <Botoes>
          <Button
            type="submit"
            onClick={() => {
              dispatch(alteraEstadoCarrinho('pagamento'))
              dispatch(adicionarApi(formEntrega.values))
            }}
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
