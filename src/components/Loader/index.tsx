import { SyncLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <SyncLoader color={colors.orange} />
    </Container>
  )
}

export default Loader
