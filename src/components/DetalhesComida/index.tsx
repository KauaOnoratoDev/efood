import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../styles'
import { Container, Title, Text, Conteudo } from './styles'
import { Cardapio } from '../../pages/Home'
import { add } from '../../store/reducers/cart'
import { formataPreco } from '../Cardapio'
import { RootReducer } from '../../store'

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

  const pegaIdItemCarrinho = (item: Cardapio[]) => {
    return item.length + 1
  }

  return (
    <>
      <Container>
        <div>
          <img src={foto} alt="" />
          <Conteudo>
            <Title>{nome}</Title>
            <Text>
              {descricao}
              <br />
              <br />
              {porcao}
            </Text>
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
              Adicionar ao carrinho - {formataPreco(preco)}
            </Button>
          </Conteudo>
        </div>
      </Container>
    </>
  )
}

export default DetalhesComida
