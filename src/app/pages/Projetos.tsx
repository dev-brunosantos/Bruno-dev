"use client"
import React from "react"
import { ContainerPage } from "../../styles/PageStyles"
import { CardProjeto } from "../components/Cards/CardProjetos"

import { FaHtml5 } from 'react-icons/fa'

import ProjetosInfor from '../../json/Projetos.json'

export default function Projetos() {
    return (
        <ContainerPage id="projetos">
            {/* <CardProjeto
                titulo="Projeto 1"
                descricao="Esse projeto foi criado usando as seguintes tecnologias"
                projeto={() => alert("Ir para Projeto")}
                className="card-projeto-desktop"
                >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto>
            <CardProjeto
                titulo="Projeto 1"
                descricao="Esse projeto foi criado usando as seguintes tecnologias"
                projeto={() => alert("Ir para Projeto")}
                className="card-projeto-desktop"
                >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto>
            <CardProjeto
                titulo="Projeto 1"
                descricao="Esse projeto foi criado usando as seguintes tecnologias"
                projeto={() => alert("Ir para Projeto")}
                className="card-projeto-desktop"
                >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto>
            <CardProjeto
                titulo="Projeto 1"
                descricao="Esse projeto foi criado usando as seguintes tecnologias"
                projeto={() => alert("Ir para Projeto")}
                className="card-projeto-desktop"
                >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto>
            <CardProjeto
                titulo="Projeto 1"
                descricao="Esse projeto foi criado usando as seguintes tecnologias"
                projeto={() => alert("Ir para Projeto")}
                className="card-projeto-desktop"
                >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto>
            <CardProjeto
                titulo="Projeto 1"
                descricao="Esse projeto foi criado usando as seguintes tecnologias"
                projeto={() => alert("Ir para Projeto")}
                className="card-projeto-desktop"
                >
                <h1>TESTE DE COMPONENTE</h1>
            </CardProjeto> */}

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