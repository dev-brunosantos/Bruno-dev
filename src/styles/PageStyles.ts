import { styled } from 'styled-components';

export const ContainerPage = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--black2);

    /* border: solid; */
`;
// PAGINA HOME
export const ContainerInfor = styled.div`
    width: 40%;
    height: 80%;
    /* border: 1px solid; */
    padding: 3rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    h1 {
        width: 100%;
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 2.7rem;
    }
    @media (max-width: 800px) {
        width: 80%;
        /* border: solid red; */
        padding: 1rem;
        h1 {
            font-size: 2rem;
        }
    }
    `
export const SobreMim = styled.p`
    width: 490px;
    margin-top: 2rem;
    font-style: italic;
    /* border: solid; */
    padding: 5px;
    /* width: 50%; */
    @media (max-width: 800px) {
        width: 100%;
        padding: 0;
        font-size: 16px;
    }
`;

export const DivContainerHome = styled.div`
    width: 100%;
    /* border: 1px solid; */
`;