import styled from 'styled-components'
import { Button, Cores, breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 80px 0 120px;
`

export const List = styled.ul`
  grid-template-columns: 1fr 1fr;
  color: ${Cores.laranja};
  column-gap: 80px;
  display: grid;
  row-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Cards = styled.li`
  background-color: ${Cores.branco};
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }

  img {
    max-height: 216px;
    height: 100%;
  }

  h2 {
    font-size: 18px;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  span {
    background-color: ${Cores.laranja};
    color: ${Cores.branco};
    padding: 6px 12px;
    font-size: 12px;
    font-weight: bold;
    margin-left: 8px;
  }
`

export const Conteudo = styled.div`
  border: 1px solid ${Cores.laranja};
  border-top: none;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 180px;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-height: none;
  }

  ${Button} {
    background-color: ${Cores.laranja};
    width: 100px;

    a {
      color: ${Cores.branco};
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 18px;

    img {
      width: 21px;
      height: 21px;
      margin-left: 8px;
    }
  }
`

export const Text = styled.p`
  font-size: 14px;
  width: 100%;
  margin: 16px 0;
`
