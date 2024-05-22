"use client"
import { useState } from "react"
import { CardProjeto, ContainerCard, ContainerBtn } from "@/styles/cards/CardProjetoStyles"
import { ProjetoIntertface } from "@/interfaces/ProjetoInterface"

export const CardProjetosComponent = ({
    img, titulo, descricao, linkProjeto, linkRepositorio
}: ProjetoIntertface) => {

    const [verInfor, setVerInfor] = useState<string>('0%')

    const AbrirInfor = () => {
        return setVerInfor('100%')
    }
    const FecharInfor = () => {
        return setVerInfor('0%')
    }

    return (
        <CardProjeto onMouseEnter={AbrirInfor} onMouseLeave={FecharInfor}>
            <ContainerCard></ContainerCard>
            <ContainerCard
                style={{ height: verInfor, width: verInfor }}
                className="projeto_infor"
            >
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <ContainerBtn>
                    <button onClick={() => alert(linkProjeto)}>Projeto</button>
                    <button onClick={() => alert(linkRepositorio)}>Repositório</button>
                </ContainerBtn>
            </ContainerCard>
        </CardProjeto>
    )
}