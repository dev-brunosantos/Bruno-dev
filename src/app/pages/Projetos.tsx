"use client"
import React, { useEffect, useState } from "react"
import { ContainerPage } from "../../styles/PageStyles"
import { CardProjeto } from "../components/Cards/CardProjetos"

import ProjetosInfor from '../../json/Projetos.json'

export default function Projetos() {

    const [dados, setDados] = useState([])
    const dadosApi = dados

    useEffect(() => {
        async function BuscarDados() {
            const consulta = await fetch("https://api.github.com/users/dev-brunosantos/repos")
            const resposta = await consulta.json()
            setDados(resposta)

            console.log(resposta)
        }

        BuscarDados()
    }, [])

    return (
        <ContainerPage id="projetos" style={{ paddingTop: '80px' }}>
            {/* {
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
            } */}

            {
                dados.map((dado:any) => (
                    <CardProjeto
                        key={dado.id}
                        titulo={dado.name}
                        descricao={dado.description}
                        // projeto={() => alert("Ir para o projeto")}
                        // repositorio={() => alert(dado.url)}
                        projeto={""}
                        repositorio={dado.html_url}
                        className="card-projeto-desktop"
                    >
                        <div></div>
                    </CardProjeto>
                ))
            }           

        </ContainerPage>
    )
}