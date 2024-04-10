import { Link } from 'react-router-dom'
import { Cards, Container, Conteudo, List, Tags, Text } from './styles'
import { Button } from '../../styles'
import estrela from '../../assets/images/estrela.png'
import { Restaurantes } from '../../pages/Home'

export type Props = {
  titleButton: string
  restaurantes?: Restaurantes[]
}

const Card = ({ titleButton, restaurantes }: Props) => {
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurantes &&
              restaurantes.map((i) => (
                <Cards key={i.id}>
                  <img src={i.capa} alt="" />
                  <Tags>
                    {i.destacado && <span>Destaque da semana</span>}
                    <span>{i.tipo}</span>
                  </Tags>
                  <Conteudo>
                    <div>
                      <h2>{i.titulo}</h2>
                      <div>
                        <span>{i.avaliacao}</span>
                        <img src={estrela} alt="" />
                      </div>
                    </div>
                    <Text>{i.descricao}</Text>
                    <Button type="button">
                      <Link to={`restaurantes/${i.id}`}>{titleButton}</Link>
                    </Button>
                  </Conteudo>
                </Cards>
              ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default Card
