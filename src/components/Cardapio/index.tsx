import { useEffect, useState } from 'react'
import { Button } from '../../styles'
import { Props } from '../Cards'
import {
  Botao,
  Cards,
  Container,
  Conteudo,
  Detalhes,
  Fundo,
  List,
  Text
} from './styles'
import { useParams } from 'react-router-dom'
import { Restaurantes } from '../../pages/Home'
import DetalhesComida from '../DetalhesComida'

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapio = ({ titleButton }: Props) => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes>()
  const [detalhes, setDetalhes] = useState(false)
  const [nome, setNome] = useState('')
  const [foto, setFoto] = useState('')
  const [descricao, setDescricao] = useState('')
  const [porcao, setPorcao] = useState('')
  const [preco, setPreco] = useState('')

  const { id } = useParams()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [id])

  if (!restaurantes) {
    return <>Carregando...</>
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurantes.cardapio.map((x) => (
              <Cards key={x.id}>
                <img src={x.foto} alt="" />
                <Conteudo>
                  <h2>{x.nome}</h2>
                  <Text>{x.descricao}</Text>
                  <b>{formataPreco(x.preco)}</b>
                  <Button
                    type="button"
                    onClick={() => {
                      setDetalhes(true)
                      setNome(x.nome)
                      setDescricao(x.descricao)
                      setFoto(x.foto)
                      setPorcao(x.porcao)
                      setPreco(formataPreco(x.preco))
                    }}
                  >
                    {titleButton}
                  </Button>
                </Conteudo>
              </Cards>
            ))}
          </List>
        </div>
      </Container>
      {detalhes && (
        <>
          <Fundo onClick={() => setDetalhes(false)} />
          <Detalhes>
            <DetalhesComida
              nome={nome}
              descricao={descricao}
              foto={foto}
              porcao={porcao}
              preco={preco}
            />
            <Botao onClick={() => setDetalhes(false)}>X</Botao>
          </Detalhes>
        </>
      )}
    </>
  )
}

export default Cardapio
