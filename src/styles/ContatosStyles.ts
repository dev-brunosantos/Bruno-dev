import { styled } from 'styled-components';

export const Formulario = styled.form`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    /* border: solid; */
    @media (max-width: 800px) {
        width: 100%;
        height: 100%;
        padding: 0;
        flex-direction: column;
    }
`;

export const ContainerForm = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border: 1px solid #fff;
    border-radius: 10px;
    padding: 2rem;
    
    @media (max-width: 800px) {
        width: 100vw;
        height: 50vh;
        border: none;
        padding: 1rem;
    }
`;

export const Input = styled.input`
    height: 50px;
    border: 1px solid #fff;
    border-radius: 10px;
    /* margin: 1rem 0 0.5rem 0; */
    margin: 1rem 0;
    padding: 4px 4px 4px 20px;
    background-color: transparent;
    &:focus {
        border: 1px solid var(--azul);
    }
`;

export const ContainerTextArea = styled.textarea`
    width: 100%;
    height: 250px;
    padding: 20px;
    resize: none;
    color: #fff;
    font-size: 16px;
    background-color: transparent;
`;