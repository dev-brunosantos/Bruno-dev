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
        transition: 0.3s;
        border: none;
        color: #fff;
        box-shadow: 0px 2px 5px #fff;
        background-color: var(--azul);
    }
`;