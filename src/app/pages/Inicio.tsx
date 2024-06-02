"use client"
import React from "react"
import { ContainerInfor, ContainerPage } from "../../styles/PageStyles"
import { SobreInfor } from "../components/SobreInforComponent"

import { FaGithub } from 'react-icons/fa'
import Image from "next/image"

export default function Inicio() {
    return(
        <ContainerPage id="home">
            <ContainerInfor>
                <SobreInfor 
                    nome="Bruno Santos"
                    funcao="Developer Full Stack"
                    descricao="Aqui é um teste de criação de um componente com várias estruturas"
                    contato={() => alert('teste')}
                >
                    <FaGithub size={50} style={{color: 'var(--azul)'}}/>
                    <FaGithub size={50} style={{color: 'var(--azul)'}}/>
                    <FaGithub size={50} color={'red'}/>
                </SobreInfor>
            </ContainerInfor>
            <ContainerInfor>
                <img 
                    src={'https://github.com/dev-brunosantos.png'}
                    alt="ewrewrew"
                />
            </ContainerInfor>
        </ContainerPage>
    )
} 