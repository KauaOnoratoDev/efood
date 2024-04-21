import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import {
  adicionarData,
  alteraEstadoCarrinho
} from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'
import { usePurchaseMutation } from '../../../services/api'

import { Button, Input } from '../../../styles'
import * as S from './styles'
import { parseToBrl, somaCarrinho } from '../../../utils'

const Pagamento = () => {
  const dispatch = useDispatch()
  const { api, itemsCarrinho } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isLoading }] = usePurchaseMutation()

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
        .min(19, 'O numero precisa ter 16 caracteres')
        .max(19)
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
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
            name: values.nomeCartao,
            number: String(values.numCartao),
            code: Number(values.codigoCartao),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: itemsCarrinho.map((item) => ({
          id: item.id,
          price: somaCarrinho(itemsCarrinho)
        }))
      })
      data && dispatch(adicionarData(data.orderId))
      dispatch(alteraEstadoCarrinho('finalizado'))
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
        <Input>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input
            type="text"
            id="nomeCartao"
            name="nomeCartao"
            value={formPagamento.values.nomeCartao}
            onChange={formPagamento.handleChange}
            onBlur={formPagamento.handleBlur}
            className={getError('nomeCartao') ? 'error' : ''}
            placeholder={
              getError('nomeCartao') ? 'Este campo é obrigatório' : ''
            }
          />
        </Input>
        <div>
          <Input>
            <label htmlFor="numCartao">Número no cartão</label>
            <InputMask
              type="text"
              id="numCartao"
              name="numCartao"
              value={formPagamento.values.numCartao}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('numCartao') ? 'error' : ''}
              placeholder={
                getError('numCartao') ? 'Este campo é obrigatório' : ''
              }
              mask={'9999 9999 9999 9999'}
            />
          </Input>
          <Input>
            <label htmlFor="codigoCartao">CVV</label>
            <InputMask
              type="num"
              id="codigoCartao"
              name="codigoCartao"
              value={formPagamento.values.codigoCartao}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('codigoCartao') ? 'error' : ''}
              placeholder={
                getError('codigoCartao') ? 'Este campo é obrigatório' : ''
              }
              mask={'999'}
            />
          </Input>
        </div>
        <div>
          <Input>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <InputMask
              type="num"
              id="mesVencimento"
              name="mesVencimento"
              value={formPagamento.values.mesVencimento}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('mesVencimento') ? 'error' : ''}
              placeholder={
                getError('mesVencimento') ? 'Este campo é obrigatório' : ''
              }
              mask={'99'}
            />
          </Input>
          <Input>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <InputMask
              type="num"
              id="anoVencimento"
              name="anoVencimento"
              value={formPagamento.values.anoVencimento}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
              className={getError('anoVencimento') ? 'error' : ''}
              placeholder={
                getError('anoVencimento') ? 'Este campo é obrigatório' : ''
              }
              mask={'99'}
            />
          </Input>
        </div>
        <S.Botoes>
          <Button disabled={isLoading} type="submit">
            {isLoading ? 'Finalizando pagamento' : 'Finalizar pagamento'}
          </Button>
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
