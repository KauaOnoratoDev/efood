import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import { Restaurantes } from '../../pages/Home'

import * as S from './styles'
import { Button } from '../../styles'
import Loader from '../Loader'

export type Props = {
  titleButton: string
  restaurantes?: Restaurantes[]
  isLoading?: boolean
}

const Card = ({ titleButton, restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.Container>
        <div className="container">
          <S.List>
            {restaurantes &&
              restaurantes.map((i) => (
                <S.Cards key={i.id}>
                  <img src={i.capa} alt="" />
                  <S.Tags>
                    {i.destacado && <span>Destaque da semana</span>}
                    <span>{i.tipo}</span>
                  </S.Tags>
                  <S.Conteudo>
                    <div>
                      <h2>{i.titulo}</h2>
                      <div>
                        <span>{i.avaliacao}</span>
                        <img src={estrela} alt="" />
                      </div>
                    </div>
                    <S.Text>{i.descricao}</S.Text>
                    <Button type="button">
                      <Link to={`restaurantes/${i.id}`}>{titleButton}</Link>
                    </Button>
                  </S.Conteudo>
                </S.Cards>
              ))}
          </S.List>
        </div>
      </S.Container>
    </>
  )
}

export default Card
