import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'

export const Container = styled.div<Props>`
  background-image: url(${(props) => props.banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 280px;
  color: ${Cores.branco};

  .fundo {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 32px;
`

export const Text = styled.p`
  font-size: 32px;
  font-weight: 100;
`
