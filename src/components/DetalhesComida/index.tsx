import { useDispatch, useSelector } from 'react-redux'

import { add } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { parseToBrl, pegaIdItemCarrinho } from '../../utils'

import { Button } from '../../styles'
import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const DetalhesComida = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const dispatch = useDispatch()
  const { itemsCarrinho } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <S.Container>
        <div>
          <img src={foto} alt="" />
          <S.Conteudo>
            <S.Title>{nome}</S.Title>
            <S.Text>
              {descricao}
              <br />
              <br />
              {porcao}
            </S.Text>
            <Button
              type="submit"
              onClick={() => {
                dispatch(
                  add({
                    foto: foto,
                    preco: preco,
                    id: pegaIdItemCarrinho(itemsCarrinho),
                    nome: nome,
                    descricao: descricao,
                    porcao: porcao
                  })
                )
                alert('1 item adicionado ao carrinho')
              }}
            >
              Adicionar ao carrinho - {parseToBrl(preco)}
            </Button>
          </S.Conteudo>
        </div>
      </S.Container>
    </>
  )
}

export default DetalhesComida
