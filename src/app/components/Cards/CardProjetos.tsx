import React, { useState } from "react"
import { CardBtn, CardContainer, CardDescricao, CardImagem, CardInfor } from "@/styles/CardsStyles"

interface CardInterface {
    img?: string,
    titulo: string,
    descricao: string,
    children: React.ReactNode,
    projeto: () => void,
    repositorio?: () => void
}

export const CardProjeto = ({
    img, titulo, descricao, children, projeto, repositorio
}: CardInterface) => {

    const [informacoes, setInformacoes] = useState('card-infor-fechado')

    const hendleAbrirInformacoes = () => {
        if(informacoes === 'card-infor-fechado') {
            setInformacoes('card-infor-aberto')
        }
    }
    const hendleFecharInformacoes = () => {
        if(informacoes === 'card-infor-aberto') {
            setInformacoes('card-infor-fechado')
        }
    }

    return (
        <CardContainer
            onMouseEnter={hendleAbrirInformacoes}
            onMouseLeave={hendleFecharInformacoes}
            style={{width: '500px', height: '400px'}}
        >
            <CardImagem>

            </CardImagem>
            <CardInfor className={informacoes}>
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