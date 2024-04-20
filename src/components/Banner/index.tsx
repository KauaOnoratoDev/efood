import { useParams } from 'react-router-dom'

import Loader from '../Loader'

import { useGetCardapioQuery } from '../../services/api'

import * as S from './styles'

export type Props = {
  banner: string
}

export type Params = {
  id: string
}

const Banner = () => {
  const { id } = useParams() as Params
  const { data: restaurantes } = useGetCardapioQuery(id)

  if (!restaurantes) {
    return <Loader />
  }

  return (
    <>
      <S.Container banner={restaurantes.capa}>
        <div className="fundo">
          <div className="container">
            <S.Text>{restaurantes.tipo}</S.Text>
            <S.Title>{restaurantes.titulo}</S.Title>
          </div>
        </div>
      </S.Container>
    </>
  )
}

export default Banner
