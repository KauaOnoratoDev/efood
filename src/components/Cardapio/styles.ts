import styled from 'styled-components'
import { Button, Cores } from '../../styles'

export const Container = styled.div`
  padding: 80px 0 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  color: ${Cores.branco};
  gap: 32px;
`

export const Cards = styled.li`
  background-color: ${Cores.laranja};
  position: relative;
  display: flex;
  flex-direction: column;

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
  border: 1px solid ${Cores.laranja};
  border-top: none;
  padding: 8px;
  max-height: 338px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Button} {
    background-color: ${Cores.branco};
    color: ${Cores.laranja};
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
  color: ${Cores.branco};
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
`
