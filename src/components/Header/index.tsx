import logo from '../../assets/images/logo.png'
import { Container, Img, Title } from './styles'

const Header = () => (
    <Container>
        <div className="container">
            <Img src={logo} alt="logo" />
            <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
        </div>
    </Container>
)

export default Header
