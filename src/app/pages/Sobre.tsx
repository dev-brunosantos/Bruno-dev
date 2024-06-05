"use client"
import React from "react"
import { ContainerPage } from "../../styles/PageStyles"
import ProjetosInfor from '../../json/Projetos.json'
import { CardProjeto } from "../components/Cards/CardProjetos"

export default function Inicio() {
    return (
        <ContainerPage id="sobre" style={{ backgroundColor: 'red' }}>
            {
                ProjetosInfor.map((projeto) => (
                    <CardProjeto key={projeto.nome}
                        titulo={projeto.nome}
                        descricao={projeto.descricao}
                        projeto={() => alert("Ir para Projeto")}
                        className="card-projeto-desktop"
                    >
                        <h1>TESTE DE COMPONENTE</h1>
                    </CardProjeto>
                ))
            }
        </ContainerPage>
    )
}