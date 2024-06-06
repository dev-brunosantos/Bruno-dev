"use client"
import React from "react"
import { ContainerPage } from "../../styles/PageStyles"
import ProjetosInfor from '../../json/Projetos.json'
import { CardProjeto } from "../components/Cards/CardProjetos"

export default function Inicio() {
    return (
        <ContainerPage id="sobre" >
            <div>
                <h1 style={{
                    fontSize: '6rem'
                }}>
                    PROJETOS
                </h1>
            </div>
        </ContainerPage>
    )
}