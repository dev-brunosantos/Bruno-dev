import { styled } from 'styled-components';

export const CardContainer = styled.div`
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const CardImagem = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;
export const CardInfor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    left: 0;
`;
export const CardDescricao = styled.div``;
export const CardBtn = styled.div``;

