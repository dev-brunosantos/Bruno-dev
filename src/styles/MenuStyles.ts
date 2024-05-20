import { styled } from 'styled-components';

export const Cabecalho = styled.header`
    width: 100%;
    height: 70px;
    border: 1px solid;
    padding: 0 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    z-index: 999;
`;
export const LogoMarca = styled.div``;
export const MenuPrincipal = styled.nav`
    width: 35%;
    height: 100%;
    /* background-color: #dadafa; */
    `;
export const MenuItens = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const MenuLink = styled.li`
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`;