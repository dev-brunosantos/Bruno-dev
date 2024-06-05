import { styled } from 'styled-components';

export const ContainerPage = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black2);
`; 

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
        font-size: 2.5rem;
    }
`