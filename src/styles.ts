import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.tablet}) {
          max-width: 80%;
        }
    }
`

export const Cores = {
  areia: '#FFEBD9',
  laranja: '#E66767',
  branco: '#fff'
}

export const Button = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: ease 0.1s;

  &:hover {
    scale: 1.02;
  }
`

export const Fundo = styled.div`
  &::after {
    content: '';
    width: 1000vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
  }
`
