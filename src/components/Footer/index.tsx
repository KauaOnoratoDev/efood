import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import { Container, Img, List, Text } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Img src={logo} alt="logo" />
      <List>
        <li>
          <img src={instagram} alt="" />
        </li>
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={twitter} alt="" />
        </li>
      </List>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.{' '}
      </Text>
    </div>
  </Container>
)

export default Footer
