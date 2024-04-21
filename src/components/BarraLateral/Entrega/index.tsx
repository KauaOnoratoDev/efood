import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

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
        .min(15, 'O numero precisa ter pelo menos 11 caracteres')
        .max(15, 'O numero precisa ter 11 caracteres')
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
        <S.Input>
          <label htmlFor="nome">Quem irá receber</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formEntrega.values.nome}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('nome') ? 'error' : ''}
          />
        </S.Input>
        <S.Input>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formEntrega.values.endereco}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('endereco') ? 'error' : ''}
          />
        </S.Input>
        <S.Input>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={formEntrega.values.cidade}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('cidade') ? 'error' : ''}
          />
        </S.Input>
        <div className="cepNum">
          <S.Input>
            <label htmlFor="cep">CEP</label>
            <InputMask
              type="text"
              id="cep"
              name="cep"
              value={formEntrega.values.cep}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
              className={getError('cep') ? 'error' : ''}
              mask={'99999-999'}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="num">Número</label>
            <InputMask
              type="text"
              id="num"
              name="num"
              value={formEntrega.values.num}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
              className={getError('num') ? 'error' : ''}
              mask={'(99) 99999-9999'}
            />
          </S.Input>
        </div>
        <S.Input>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            value={formEntrega.values.complemento}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
        </S.Input>
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
