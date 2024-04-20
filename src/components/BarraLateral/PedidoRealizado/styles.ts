import styled from 'styled-components'
import { Button, colors } from '../../../styles'

export const Container = styled.div`
  color: ${colors.sand};

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
    background-color: ${colors.sand};
    color: ${colors.orange};
    margin-top: 24px;
  }
`
