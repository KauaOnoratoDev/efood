import { Button } from '../../styles'
import { Container, Title, Text, Conteudo } from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: string
}

const DetalhesComida = ({ nome, descricao, foto, porcao, preco }: Props) => (
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
          <Button type="submit">Adicionar ao carrinho - {preco}</Button>
        </Conteudo>
      </div>
    </Container>
  </>
)

export default DetalhesComida
