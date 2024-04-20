import { useParams } from 'react-router-dom'

import { useGetCardapioQuery } from '../../services/api'

import * as S from './styles'

export type Props = {
  banner: string
}

const Banner = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurantes } = useGetCardapioQuery(id!)

  if (!restaurantes) {
    return <>Carregando...</>
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
