import { styled } from 'styled-components';

export const Cabecalho = styled.header`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid;
    padding: 0 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    `;
export const LogomarcaContainer = styled.header``;
export const MenuPrincipal = styled.header`
    width: 35%;
    height: 100%;
    `;
export const MenuItens = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
export const MenuLinks = styled.header`
    list-style: none;
    font-size: 22px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;

    a {
        color: #000;
    }
`;