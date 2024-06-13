"use client"
import React from "react"
import { ReactTyped } from "react-typed"
import { ContainerInfor, ContainerPage, DivContainerHome, SobreMim } from "../../styles/PageStyles"
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { CardTecnologia } from "../components/Cards/CardTecnologia"
import { Btn } from "../components/Botoes/Btn"

export default function Inicio() {
    return (
        <ContainerPage id="home">
            {/* <ContainerInfor style={{ width: '80%' }}> */}
            <ContainerInfor >
                <h1>
                    Olá, eu sou o
                    <span> Bruno</span>
                </h1>
                <h2>
                    Desenvolvedor
                    <ReactTyped
                        strings={["Front-end", "Mobile", "Back-end"]}
                        typeSpeed={50}
                        backSpeed={100}
                        loop={true}
                        fadeOut={true}
                        className="animacao"

                    />
                </h2>
                <SobreMim>
                    Desenvolvedor com experiência em Javascript, dedicado em
                    transformar ideias em soluções inovadoras por meio do domínio desta
                    poderosa linguagem de programação
                </SobreMim>

                <DivContainerHome >
                    <CardTecnologia link="https://github.com/dev-brunosantos">
                        <FaGithub className="redes-contato-home" />
                    </CardTecnologia>
                    <CardTecnologia link="https://www.linkedin.com/in/dev-bruno-santos/">
                        <FaLinkedin className="redes-contato-home" />
                    </CardTecnologia>
                    <CardTecnologia link="https://wa.me/+5511985706834">
                        <FaWhatsapp className="redes-contato-home" />
                    </CardTecnologia>
                </DivContainerHome>

                <DivContainerHome >
                    <Btn
                        width="100px" height="40px"
                        titulo="Projetos" fontSize="16px"
                        onClick={() => alert('Funcionou')}
                    />
                    <Btn
                        width="100px" height="40px"
                        titulo="Contatos" fontSize="16px"
                        onClick={() => alert('Funcionou')}
                    />
                </DivContainerHome>
            </ContainerInfor>
            {/* AQUI FICARÁ A FOTO DE PERFIL OU ALGUMA ANIMAÇÃO */}
            {/* <ContainerInfor>
            </ContainerInfor> */}
        </ContainerPage>
    )
} 