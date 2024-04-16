import styled from 'styled-components'
import { Button, Cores } from '../../styles'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: ${Cores.branco};
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  > div {
    display: flex;
    gap: 32px;
  }

  }
`

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  width: 100%;
  background-color: ${Cores.areia};
  border: 1px solid ${Cores.areia};
`

export const Botoes = styled.div`
  margin-top: 16px;
  width: 100%;

  ${Button} {
    width: 100%;
    margin-bottom: 8px;
    background-color: ${Cores.areia};
    color: ${Cores.laranja};
  }
`
