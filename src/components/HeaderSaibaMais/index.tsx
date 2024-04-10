import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Container, Img, Title } from './styles'

const HeaderSaibaMais = () => (
  <Container>
    <div className="container">
      <Link to={'/'}>
        <Title className="restaurantes">Restaurantes</Title>
      </Link>
      <Img src={logo} alt="logo" />
      <Title>
        <span>0</span> produto(s) no carrinho
      </Title>
    </div>
  </Container>
)

export default HeaderSaibaMais
