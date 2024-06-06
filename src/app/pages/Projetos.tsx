"use client"
import React from "react"
import { ContainerPage } from "../../styles/PageStyles"
import { CardProjeto } from "../components/Cards/CardProjetos"

import ProjetosInfor from '../../json/Projetos.json'

export default function Projetos() {
    return (
        <ContainerPage id="projetos" style={{ paddingTop: '80px' }}>
            {
                ProjetosInfor.map((projeto) => (
                    <CardProjeto key={projeto.nome}
                        titulo={projeto.nome}
                        descricao={projeto.descricao}
                        projeto={() => alert("Ir para Projeto")}
                        className="card-projeto-desktop"
                    >
                        <h1>Tecnologias</h1>
                    </CardProjeto>
                ))
            }
            
        </ContainerPage>
    )
}