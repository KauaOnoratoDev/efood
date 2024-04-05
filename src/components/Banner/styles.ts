import styled from "styled-components"
import food2 from '../../assets/images/food2.png'
import { Cores } from "../../styles"

export const Container = styled.div`
    background-image: url(${food2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 280px;
    color: ${Cores.branco};

    .fundo {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 32px 0;
    }
`

export const Title = styled.h3`
    font-weight: bold;
    font-size: 32px;
`

export const Text = styled.p`
    font-size: 32px;
    font-weight: 100;
`
