"use client"
import React, { useEffect, useState } from "react"
import { ContainerPage } from "../../styles/PageStyles"
import { CardProjeto } from "../components/Cards/CardProjetos"

import ProjetosInfor from '../../json/Projetos.json'

export default function Projetos() {

    const [dados, setDados] = useState()

    useEffect(() => {
        const consulta = fetch("https://api.github.com/users/dev-brunosantos/repos")
            .then(res => res.json())
            .then(resposta => {
                resposta.forEach(dado => {
                    setDados(dado)
                })
            })
    })

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