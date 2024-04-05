import styled from "styled-components";
import { Button, Cores } from "../../styles";

export const Container = styled.div`
    padding: 32px;
    background-color: ${Cores.laranja};
    color: ${Cores.branco};
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 25vh;
    left: calc((100vw - 960px) / 2);
    display: flex;

    img {
        width: 280px;
        height: 280px;
    }

    `
    
export const Conteudo = styled.div`
    margin-left: 24px;
    
    ${Button} {
        width: 60%;
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
