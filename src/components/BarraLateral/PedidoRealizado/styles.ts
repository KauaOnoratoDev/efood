import styled from 'styled-components'
import { Button, Cores } from '../../../styles'

export const Container = styled.div`
  color: ${Cores.areia};

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ${Button} {
    width: 100%;
    background-color: ${Cores.areia};
    color: ${Cores.laranja};
    margin-top: 24px;
  }
`
