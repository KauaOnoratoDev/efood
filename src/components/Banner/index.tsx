import { useEffect, useState } from 'react'
import { Restaurantes } from '../../pages/Home'
import { Container, Title, Text } from './styles'
import { useParams } from 'react-router-dom'

export type Props = {
  banner: string
}

const Banner = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes>()
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
