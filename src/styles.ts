import styled, { createGlobalStyle } from 'styled-components'

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
    scale: 1.05;
  }
`
