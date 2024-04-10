import styled from 'styled-components'
import { Button, Cores } from '../../styles'

export const Container = styled.div`
  padding: 32px;
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 280px;
    height: 280px;
  }

  > div {
    display: flex;
  }
`

export const Conteudo = styled.div`
  margin-left: 24px;

  ${Button} {
    background-color: ${Cores.branco};
    color: ${Cores.laranja};
    margin-top: 4px;
  }
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: bold;
  width: 100%;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`
