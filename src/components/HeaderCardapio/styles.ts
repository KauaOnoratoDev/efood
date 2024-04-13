import styled from 'styled-components'
import { Button, Cores } from '../../styles'

export const Container = styled.div`
  background-color: ${Cores.areia};
  padding: 64px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .restaurantes:hover {
      scale: 1.05;

      &::before {
        content: '<';
        position: absolute;
        top: 100%;
        left: 50%;
      }
    }

    ${Button} {
      background-color: transparent;
      border: none;
      color: ${Cores.laranja};
      font-size: 18px;
      line-height: 21px;
      font-weight: bold;
      padding: 0;

      &:hover {
        scale: 1.05;

        &::before {
          content: '>';
          position: absolute;
          top: 100%;
          left: 50%;
        }
      }
    }
  }
`

export const Img = styled.img`
  width: 125px;
  height: 58px;
`

export const Title = styled.h1`
  color: ${Cores.laranja};
  font-size: 18px;
  line-height: 21px;
  transition: ease 0.1s;
`
