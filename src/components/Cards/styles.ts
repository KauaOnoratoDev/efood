import styled from "styled-components"
import { Cores } from "../../styles"
import { Props } from '.'

export const Container = styled.div`
    padding: 80px 170px 120px;
`
    
export const List = styled.ul <Omit<Props, 'titleButton' | 'to'>>`
    grid-template-columns: ${(props) => props.tipo === 'restaurantes' ? '1fr 1fr' : '1fr 1fr 1fr'};
    color: ${(props) => props.tipo === 'comidas' ? `${Cores.branco}` : `${Cores.laranja}`};   
    column-gap: ${(props) => props.tipo === 'restaurantes' ? '80px' : '32px'};
    display: grid;
    row-gap: 32px;
    `
    
export const Cards = styled.li <Omit<Props, 'titleButton' | 'to'>>`
    background-color: ${(props) => props.tipo === 'comidas' && `${Cores.laranja}`};
    padding: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
        width: 100%;
    }

    h2 {
        font-size: 18px;
    }
`

export const Conteudo = styled.div`
    border: 1px solid ${Cores.laranja};
    border-top: none;
    padding: 8px;
    overflow-wrap: anywhere;
`

export const Text = styled.p`
    font-size: 14px;
    width: 100%;
    margin: 16px 0;
`
