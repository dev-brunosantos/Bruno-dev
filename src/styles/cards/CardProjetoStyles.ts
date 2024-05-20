import { styled } from 'styled-components';

export const CardContainer = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const CardInforContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
`;

export const CardBtnContainer = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
`;