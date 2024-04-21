import styled from 'styled-components'
import { Button, colors } from '../../../styles'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  .cepNum {
    display: flex;
    gap: 32px;
  }
`

export const Botoes = styled.div`
  margin-top: 16px;
  width: 100%;

  ${Button} {
    width: 100%;
    margin-bottom: 8px;
    background-color: ${colors.sand};
    color: ${colors.orange};
  }
`
