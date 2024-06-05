import { styled } from 'styled-components';

export const BtnContainer = styled.button`
    border: 1px solid var(--azul);
    border-radius: 10px;
    margin-right: 20px;
    color: var(--azul);
    font-weight: bold;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        border: none;
        color: #fff;
        background-color: var(--azul);
        transition: 0.3s;
    }
`;