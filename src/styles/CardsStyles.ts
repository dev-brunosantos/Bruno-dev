import { styled } from 'styled-components';

export const CardContainer = styled.div`
    /* border: 1px solid var(--azul) ; */
    border-radius: 10px;
    margin: 1rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    &:hover {
        box-shadow: 0px 0px 25px var(--azul);
        transition: 0.3s;
    }
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
    /* background-color: #239895a5; */
    background-color: #242424c3;
`;
export const CardDescricao = styled.div`
    width: 70%;
    padding: 10px;
    /* border: solid red; */
    text-align: center;
`;
export const CardBtn = styled.div`
    width: 70%;
    /* background-color: green; */
    /* border: solid red; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    a {
        color: #fff;
    }
        
`;

