import styled, { createGlobalStyle } from 'styled-components'
import { Props } from './components/Cards'

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

export const Button = styled.button <Omit<Props, 'titleButton' | 'to'>>`
    width: ${(props) => props.tipo === 'comidas' && '100%'};
    background-color: ${(props) => props.tipo === 'comidas' ? `${Cores.branco}` : `${Cores.laranja}`};
    color: ${(props) => props.tipo === 'comidas' ? `${Cores.laranja}` : `${Cores.branco}`};
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: ease 0.1s;

    a {
        color: ${(props) => props.tipo === 'comidas' ? `${Cores.laranja}` : `${Cores.branco}`};
    }

    &:hover {
        scale: 1.05;
    }
`
