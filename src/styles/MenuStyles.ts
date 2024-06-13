import { styled, css } from 'styled-components';

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

    @media (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;
    }
`;
export const LogoContainer = styled.div``;
export const MenuPrincipal = styled.nav`
    width: 40%;
    /* height: 100%; */
    /* border: solid #fff; */
    position: relative;
    transition: 0.3s;

    @media (max-width: 800px) {
        position: absolute;
        top: 100%;
    }
`;
export const MenuOpc = styled.ul`
    width: 100%;
    height: 100%;
    /* border: solid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;

    @media (max-width: 800px) {
        width: 100vw;
        /* height: 10vh; */
        overflow: hidden;
        justify-content: space-evenly;
        /* border: solid red; */
        margin-left: -10%;
        flex-direction: column;
        background-color: var(--black);
    }
`;
export const MenuLinks = styled.li`
    width: 120px;
    padding: 5px 0;
    list-style: none;
    color: #fff;
    /* font-size: 22px; */
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    /* text-decoration: underline; */
    cursor: pointer;
    a {
        /* font-size: 22px; */
        font-size: 130%;
        color: #fff;
        }
        a:hover {
            transition: 0.3s;
            color: var(--azul2);
            /* font-size: 21px; */
            font-size: 120%;
        text-shadow: 0px 0px 15px var(--azul);
    }
`;
