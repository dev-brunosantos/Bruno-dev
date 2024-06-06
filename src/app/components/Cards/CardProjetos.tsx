import React, { useState } from "react"
import { CardBtn, CardContainer, CardDescricao, CardImagem, CardInfor } from "@/styles/CardsStyles"
import { Btn } from "../Botoes/Btn"

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
                        width: '100%', height: '100%',
                        backgroundColor: 'var(--black)'
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
                    <button onClick={projeto} className="btn-card-projeto">
                        Projeto
                    </button>
                    <button onClick={repositorio} className="btn-card-projeto">
                        Repositório
                    </button>
                </CardBtn>
            </CardInfor>
        </CardContainer>
    )
}