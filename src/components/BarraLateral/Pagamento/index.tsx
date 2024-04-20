import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import {
  adicionarApi,
  adicionarData,
  alteraEstadoCarrinho
} from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'
import { usePurchaseMutation } from '../../../services/api'

import { Button } from '../../../styles'
import * as S from './styles'
import { parseToBrl, somaCarrinho } from '../../../utils'

const Pagamento = () => {
  const dispatch = useDispatch()
  const { api, itemsCarrinho } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

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
        .min(1, 'O mes de vencimento precisa ter 2 caracteres')
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
      dispatch(adicionarApi(values))
      purchase({
        delivery: {
          receiver: api.nome,
          address: {
            description: api.endereco,
            city: api.cidade,
            zipCode: String(api.cep),
            number: api.num,
            complement: api.complemento
          }
        },
        payment: {
          card: {
            name: api.nomeCartao,
            number: String(api.numCartao),
            code: api.codigoCartao,
            expires: {
              month: api.mesVencimento,
              year: api.anoVencimento
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
      isSuccess &&
        (dispatch(alteraEstadoCarrinho('finalizado')),
        dispatch(adicionarData(data.orderId)))
    }
  })

  const getError = (fieldName: string) => {
    const isTouched = fieldName in formPagamento.touched
    const isValid = fieldName in formPagamento.errors
    const hasError = isTouched && isValid

    return hasError
  }

  return (
    <>
      <S.Form onSubmit={formPagamento.handleSubmit}>
        <h3>
          Pagamento - Valor total a pagar{' '}
          <span>{parseToBrl(somaCarrinho(itemsCarrinho))}</span>
        </h3>
        <div>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <S.Input
            type="text"
            id="nomeCartao"
            name="nomeCartao"
            value={formPagamento.values.nomeCartao}
            onChange={formPagamento.handleChange}
            onBlur={formPagamento.handleBlur}
            className={getError('nomeCartao') ? 'error' : ''}
          />
        </div>
        <div>
          <div>
            <label htmlFor="numCartao">Número no cartão</label>
            <S.Input
              type="number"
              id="numCartao"
              name="numCartao"
              value={formPagamento.values.numCartao}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('numCartao') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="codigoCartao">CVV</label>
            <S.Input
              type="num"
              id="codigoCartao"
              name="codigoCartao"
              value={formPagamento.values.codigoCartao}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('codigoCartao') ? 'error' : ''}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <S.Input
              type="number"
              id="mesVencimento"
              name="mesVencimento"
              value={formPagamento.values.mesVencimento}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('mesVencimento') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <S.Input
              type="number"
              id="anoVencimento"
              name="anoVencimento"
              value={formPagamento.values.anoVencimento}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('anoVencimento') ? 'error' : ''}
            />
          </div>
        </div>
        <S.Botoes>
          <Button type="submit">Finalizar pagamento</Button>
          <Button
            type="button"
            onClick={() => {
              dispatch(alteraEstadoCarrinho('endereco'))
            }}
          >
            Voltar para a edição de endereço
          </Button>
        </S.Botoes>
      </S.Form>
    </>
  )
}

export default Pagamento
