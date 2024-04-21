import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import {
  adicionarApi,
  alteraEstadoCarrinho
} from '../../../store/reducers/cart'

import { Button, Input } from '../../../styles'
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
        .min(9, 'O cep precisa ter pelo menos 9 caracteres')
        .max(9, 'O cep precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      num: Yup.string()
        .min(2, 'O numero precisa ter pelo menos 2 caracteres')
        .max(4, 'O numero precisa ter 4 caracteres ou menos')
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
        <Input>
          <label htmlFor="nome">Quem irá receber</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formEntrega.values.nome}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('nome') ? 'error' : ''}
            placeholder={getError('nome') ? 'Este campo é obrigatório' : ''}
          />
        </Input>
        <Input>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formEntrega.values.endereco}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('endereco') ? 'error' : ''}
            placeholder={getError('endereco') ? 'Este campo é obrigatório' : ''}
          />
        </Input>
        <Input>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={formEntrega.values.cidade}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
            className={getError('cidade') ? 'error' : ''}
            placeholder={getError('cidade') ? 'Este campo é obrigatório' : ''}
          />
        </Input>
        <div className="cepNum">
          <Input>
            <label htmlFor="cep">CEP</label>
            <InputMask
              type="text"
              id="cep"
              name="cep"
              value={formEntrega.values.cep}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
              className={getError('cep') ? 'error' : ''}
              placeholder={getError('cep') ? 'Este campo é obrigatório' : ''}
              mask={'99999-999'}
            />
          </Input>
          <Input>
            <label htmlFor="num">Número</label>
            <input
              type="number"
              id="num"
              name="num"
              value={formEntrega.values.num}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
              className={getError('num') ? 'error' : ''}
              placeholder={getError('num') ? 'Este campo é obrigatório' : ''}
            />
          </Input>
        </div>
        <Input>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            value={formEntrega.values.complemento}
            onChange={formEntrega.handleChange}
            onBlur={formEntrega.handleBlur}
          />
        </Input>
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
