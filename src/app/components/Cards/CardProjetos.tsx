import React from "react"
import { CardBtn, CardContainer, CardDescricao, CardImagem, CardInfor } from "@/styles/CardsStyles"

interface CardInterface {
    img: string,
    titulo: string,
    descricao: string,
    children: React.ReactNode,
    projeto: () => void,
    repositorio: () => void
}

export const CardProjeto = ({
    img, titulo, descricao, children, projeto, repositorio
}: CardInterface) => {
    return (
        <CardContainer>
            <CardImagem></CardImagem>
            <CardInfor>
                <h2>{titulo}</h2>
                <CardDescricao>
                    <p>
                        {descricao}
                    </p>
                </CardDescricao>
                <div className="container-tecnologia">
                    {children}
                </div>
                <CardBtn>
                    <button onClick={projeto} >
                        Projeto
                    </button>
                    <button onClick={repositorio}>
                        Repositório
                    </button>
                </CardBtn>
            </CardInfor>
        </CardContainer>
    )
}