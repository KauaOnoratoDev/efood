import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  adicionarApi,
  alteraEstadoCarrinho
} from '../../../store/reducers/cart'

import { Button } from '../../../styles'
import * as S from './styles'

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
        .min(9, 'O cep precisa ter pelo menos 7 caracteres')
        .max(9, 'O cep precisa ter 7 caracteres')
        .required('O campo é obrigatório'),
      num: Yup.string()
        .min(11, 'O numero precisa ter pelo menos 11 caracteres')
        .max(11, 'O numero precisa ter 11 caracteres')
        .required('O campo é obrigatório'),
      complemento: Yup.string()
    }),
    onSubmit: (values) => {
      dispatch(adicionarApi(values))
      dispatch(alteraEstadoCarrinho('pagamento'))
    }
  })

  const getError = (fieldName: string) => {
    const isTouched = fieldName in formEntrega.touched
    const isValid = fieldName in formEntrega.errors
    const hasError = isTouched && isValid

    return hasError
  }

  return (
    <>
      <S.Form onSubmit={formEntrega.handleSubmit}>
        <h3>Entrega</h3>
        <div>
          <label htmlFor="nome">Quem irá receber</label>
          <S.Input
            type="text"
            id="nome"
            name="nome"
            value={formEntrega.values.nome}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('nome') ? 'error' : ''}
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <S.Input
            type="text"
            id="endereco"
            name="endereco"
            value={formEntrega.values.endereco}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('endereco') ? 'error' : ''}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <S.Input
            type="text"
            id="cidade"
            name="cidade"
            value={formEntrega.values.cidade}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('cidade') ? 'error' : ''}
          />
        </div>
        <div className="cepNum">
          <div>
            <label htmlFor="cep">CEP</label>
            <S.Input
              type="text"
              id="cep"
              name="cep"
              value={formEntrega.values.cep}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
              className={getError('cep') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="num">Número</label>
            <S.Input
              type="number"
              id="num"
              name="num"
              value={formEntrega.values.num}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
              className={getError('num') ? 'error' : ''}
            />
          </div>
        </div>
        <div>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <S.Input
            type="text"
            id="complemento"
            name="complemento"
            value={formEntrega.values.complemento}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
        </div>
        <S.Botoes>
          <Button type="submit">Continuar com o pagamento</Button>
          <Button
            type="button"
            onClick={() => dispatch(alteraEstadoCarrinho('carrinho'))}
          >
            Voltar para o carrinho
          </Button>
        </S.Botoes>
      </S.Form>
    </>
  )
}

export default Entrega
