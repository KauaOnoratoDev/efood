import styled from 'styled-components'
import { Button, colors } from '../../../styles'

export const ListLink = styled.li`
  background-color: ${colors.sand};
  margin-bottom: 16px;
  width: 344px;
  color: ${colors.orange};

  > div {
    display: flex;
    padding: 8px;
    position: relative;

    > img {
      width: 80px;
      height: 80px;
      margin-right: 8px;
      object-fit: cover;
    }

    h3 {
      font-size: 18px;
      font-weitgh: bold;
      margin-bottom: 16px;
    }

    span {
      font-size: 14px;
    }
  }
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Lixeira = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 8px;
  right: 8px;

  :hover {
    cursor: pointer;
    scale: 1.2;
  }
`

export const AreaConfirmacao = styled.div`
  width: 100%;
  margin-top: 40px;

  div {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 14px;
    color: ${colors.sand};
    margin-bottom: 16px;
  }

  ${Button} {
    width: 100%;
    color: ${colors.orange};
    background-color: ${colors.sand};
  }
`
