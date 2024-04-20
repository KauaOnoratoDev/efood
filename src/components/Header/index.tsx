import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => (
  <S.Container>
    <div className="container">
      <S.Img src={logo} alt="logo" />
      <S.Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </S.Title>
    </div>
  </S.Container>
)

export default Header
