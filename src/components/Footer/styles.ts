import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.div`
  background-color: ${Cores.areia};
  padding: 40px 0;

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
  margin-bottom: 32px;
`

export const List = styled.ul`
  display: flex;
  margin-bottom: 80px;

  :nth-child(2) {
    margin: 0 8px;
  }

  img {
    width: 24px;
  }
`

export const Text = styled.p`
  color: ${Cores.laranja};
  font-size: 10px;
  line-height: 10px;
`
