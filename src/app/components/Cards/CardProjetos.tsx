import React, { useState } from "react"
import { CardBtn, CardContainer, CardDescricao, CardImagem, CardInfor } from "@/styles/CardsStyles"

interface CardInterface {
    img?: string,
    titulo: string,
    descricao: string,
    children: React.ReactNode,
    className: string,
    projeto: () => void,
    repositorio?: () => void
}

export const CardProjeto = ({
    img, titulo, descricao, children, className, projeto, repositorio
}: CardInterface) => {

    const [informacoes, setInformacoes] = useState('card-infor-fechado')

    const hendleAbrirInformacoes = () => {
        if (informacoes === 'card-infor-fechado') {
            setInformacoes('card-infor-aberto')
        }
    }
    const hendleFecharInformacoes = () => {
        if (informacoes === 'card-infor-aberto') {
            setInformacoes('card-infor-fechado')
        }
    }

    return (
        <CardContainer
            onMouseEnter={hendleAbrirInformacoes}
            onMouseLeave={hendleFecharInformacoes}
            className={className}
        >
            <CardImagem>
                <img
                    src="https://web41.com.br/wp-content/uploads/2022/02/sites-responsivos.png"
                    alt=""
                    style={{
                        width: '100%', height: '100%'
                    }}
                />
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