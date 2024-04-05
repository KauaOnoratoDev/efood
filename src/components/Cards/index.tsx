import { Link } from 'react-router-dom'
import { Button, Cards, Container, Conteudo, List, Text } from './styles'
import { restaurantes } from '../../models/restaurantes'
import { comidas } from '../../models/comidas'

export type Props = {
    tipo: 'comidas' | 'restaurantes'
    to: string
    titleButton: string
}

const Card = ({ tipo, to, titleButton }: Props) => {
    const item = () => {
        if (tipo === 'comidas') {
            return comidas
        }

        return restaurantes
    }

    return (
        <Container>
            <div className="container">
                <List tipo={tipo}>
                    {item().map((i) => (
                        <Cards tipo={tipo} key={i.id}>
                            <img src={i.img} alt="" />
                            <Conteudo>
                                <h2>{i.h2}</h2>
                                <Text>{i.p}</Text>
                                <Button tipo={tipo} type="button"><Link to={to}>{titleButton}</Link></Button>
                            </Conteudo>
                        </Cards>
                    ))}
                </List>
            </div>
        </Container>
    )
}

export default Card