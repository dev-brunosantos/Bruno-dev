"use client"
import React from "react"
import { ContainerPage } from "../../styles/PageStyles"
import { CardProjeto } from "../components/Cards/CardProjetos"


export default function Projetos() {
    return (
        <ContainerPage id="projetos" style={{ backgroundColor: 'green' }}>
            <CardProjeto
                titulo="Projeto 1"
                descricao=""
                projeto={() => alert("Ir para Projeto")}
            >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto>
        </ContainerPage>
    )
}