import styled from 'styled-components'
import { Button, colors, breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 80px 0 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  color: ${colors.white};
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Cards = styled.li`
  background-color: ${colors.orange};
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }

  img {
    max-height: 216px;
    height: 100%;
    padding: 8px 8px 0px;
  }

  h2 {
    font-size: 18px;
  }
`

export const Conteudo = styled.div`
  border: 1px solid ${colors.orange};
  border-top: none;
  padding: 8px;
  max-height: 338px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Button} {
    background-color: ${colors.white};
    color: ${colors.orange};
    margin-top: 4px;
  }
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  margin: 16px 0;
`

export const Botao = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  transition: 0.2s ease;
  font-size: 22px;

  &:hover {
    scale: 1.3;
  }
`

export const Detalhes = styled.div`
  position: fixed;
  top: 25vh;
  left: calc((100vw - 960px) / 2);

  @media (max-width: ${breakpoints.tablet}) {
    top: 0;
    left: 0;
  }
`
