import {styled} from 'styled-components';

export const Cabecalho = styled.header`
    width: 100%;
    /* max-width: 1500px; */
    height: 60px;
    /* margin: 0 auto; */
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;
export const LogoContainer = styled.div``;
export const MenuPrincipal = styled.nav`
    width: 40%;
    height: 100%;
    /* border: solid #fff; */
    position: relative;
`;
export const MenuOpc = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const MenuLinks = styled.li`
    width: 120px;
    padding: 5px 0;
    list-style: none;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    /* text-decoration: underline; */
    cursor: pointer;
    a {
        color: #fff;
    }
    a:hover {
        transition: 0.3s;
        color: var(--azul2);
        font-size: 21px;
        text-shadow: 0px 0px 15px var(--azul);
    }
`;