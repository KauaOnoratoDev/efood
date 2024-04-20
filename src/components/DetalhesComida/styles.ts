import styled from 'styled-components'
import { Button, colors, breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 32px;
  background-color: ${colors.orange};
  color: ${colors.white};
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    height: 100vh;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  > div {
    display: flex;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;

      img {
        margin: 0 0 16px;
      }

      ${Button} {
        width: 100%;
      }
    }
  }
`

export const Conteudo = styled.div`
  margin-left: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }

  ${Button} {
    background-color: ${colors.white};
    color: ${colors.orange};
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
