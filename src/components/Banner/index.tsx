import { useEffect, useState } from 'react'
import { Restaurantes } from '../../pages/Home'
import { Container, Title, Text } from './styles'
import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../../services/api'

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
      <Container banner={restaurantes.capa}>
        <div className="fundo">
          <div className="container">
            <Text>{restaurantes.tipo}</Text>
            <Title>{restaurantes.titulo}</Title>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Banner
