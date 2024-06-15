"use client"
import React, { useEffect, useState } from "react"
import { ContainerPage } from "../../styles/PageStyles"
import { CardProjeto } from "../components/Cards/CardProjetos"

import ProjetosInfor from '../../json/Projetos.json'

export default function Projetos() {

    const [dados, setDados] = useState<any>([])

    const FunctionTeste = async (projeto) => {
        const linguagens = await fetch(`https://api.github.com/repos/dev-brunosantos/${projeto}/languages`)
        const testando = await linguagens.json()

        console.log(testando)
    }

    useEffect(() => {
        async function BuscarDados() {
            const consulta = await fetch("https://api.github.com/users/dev-brunosantos/repos")
            const resposta = await consulta.json()

            console.log(resposta)
            setDados(resposta)
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
                dados.map((dado: any) => (
                    <CardProjeto key={dado.id}
                        titulo={dado.name}
                        descricao={dado.description}
                        projeto={() => alert("Ir para Projeto")}
                        className="card-projeto-desktop"
                    >

                        <div>
                           <h1 onClick={async () => {
                            await FunctionTeste(dado.languages_url)
                           }} >Linguagens</h1>
                        </div>
                    </CardProjeto>
                ))
            }

        </ContainerPage>
    )
}