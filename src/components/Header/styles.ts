import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.div`
  background-color: ${Cores.areia};
  padding-top: 64px;
  padding-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Img = styled.img`
  width: 125px;
  height: 58px;
  margin-bottom: 138px;
`

export const Title = styled.h1`
  color: ${Cores.laranja};
  font-size: 36px;
  line-height: 42px;
`
