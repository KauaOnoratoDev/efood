import { styled } from 'styled-components'
import { Cores } from '../../styles'

export const BarraLateral = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: ${Cores.laranja};
  padding: 32px 8px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;

  ul {
    overflow-y: auto;
  }
`