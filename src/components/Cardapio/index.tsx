import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import BarraLateral from '../BarraLateral'
import DetalhesComida from '../DetalhesComida'
import Loader from '../Loader'

import { useGetCardapioQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { alteraEstadoCarrinho } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { Props } from '../Cards'

import { Button, Fundo } from '../../styles'
import * as S from './styles'
import { Params } from '../Banner'

const Cardapio = ({ titleButton }: Props) => {
  const { estado, itemsCarrinho } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const [detalhes, setDetalhes] = useState(false)
  const [nome, setNome] = useState('')
  const [foto, setFoto] = useState('')
  const [descricao, setDescricao] = useState('')
  const [porcao, setPorcao] = useState('')
  const [preco, setPreco] = useState(0)

  const { id } = useParams() as Params
  const { data: restaurantes } = useGetCardapioQuery(id)

  if (!restaurantes) {
    return <Loader />
  }

  return (
    <>
      <S.Container>
        <div className="container">
          <S.List>
            {restaurantes.cardapio.map((x) => (
              <S.Cards key={x.id}>
                <img src={x.foto} alt="" />
                <S.Conteudo>
                  <h2>{x.nome}</h2>
                  <S.Text>{x.descricao}</S.Text>
                  <b>{parseToBrl(x.preco)}</b>
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
                </S.Conteudo>
              </S.Cards>
            ))}
          </S.List>
        </div>
      </S.Container>
      {detalhes && (
        <>
          <Fundo onClick={() => setDetalhes(false)} />
          <S.Detalhes>
            <DetalhesComida
              nome={nome}
              descricao={descricao}
              foto={foto}
              porcao={porcao}
              preco={preco}
            />
            <S.Botao onClick={() => setDetalhes(false)}>X</S.Botao>
          </S.Detalhes>
        </>
      )}
      {itemsCarrinho.length > 0 && estado !== '' && (
        <>
          <Fundo onClick={() => dispatch(alteraEstadoCarrinho(''))} />
          <BarraLateral />
        </>
      )}
    </>
  )
}

export default Cardapio
