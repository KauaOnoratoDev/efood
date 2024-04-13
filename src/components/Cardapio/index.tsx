import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Button, Fundo } from '../../styles'
import { Props } from '../Cards'
import {
  Botao,
  Cards,
  Container,
  Conteudo,
  Detalhes,
  List,
  Text
} from './styles'
import DetalhesComida from '../DetalhesComida'
import { useGetCardapioQuery } from '../../services/api'
import Carrinho from '../Carrinho'
import { RootReducer } from '../../store'
import { alteraEstadoCarrinho } from '../../store/reducers/cart'

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapio = ({ titleButton }: Props) => {
  const { carrinhoEstado, itemsCarrinho } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const [detalhes, setDetalhes] = useState(false)
  const [nome, setNome] = useState('')
  const [foto, setFoto] = useState('')
  const [descricao, setDescricao] = useState('')
  const [porcao, setPorcao] = useState('')
  const [preco, setPreco] = useState(0)

  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurantes } = useGetCardapioQuery(id!)

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
                      setPreco(x.preco)
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
      {itemsCarrinho.length > 0 && carrinhoEstado && (
        <>
          <Fundo onClick={() => dispatch(alteraEstadoCarrinho(false))} />
          <Carrinho />
        </>
      )}
    </>
  )
}

export default Cardapio
