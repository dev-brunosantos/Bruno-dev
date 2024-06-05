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
            <ContainerInfor>
                <h1>
                    Olá, eu sou o
                    <span> Bruno</span>
                </h1>
                <h3>
                    Desenvolvedor
                    <ReactTyped
                        strings={["Front-end", "Mobile", "Back-end"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop={true}
                        fadeOut={true}
                        className="animacao"

                    />
                </h3>
                <SobreMim>
                    Sou um desenvolvedor com experiência em Javascript, dedicado em
                    transformar ideias em soluções inovadoras por meio do domínio desta
                    poderosa linguagem de programação
                </SobreMim>
                {/* <div className="redes-contatos">
                    <FaGithub size={30} className="redes-contato-home" />
                    <FaLinkedin size={30} className="redes-contato-home" />
                    <FaWhatsapp size={30} className="redes-contato-home" />
                </div> */}

                {/* <DivContainerHome >
                    <FaGithub size={30} className="redes-contato-home" />
                    <FaLinkedin size={30} className="redes-contato-home" />
                    <FaWhatsapp size={30} className="redes-contato-home" />
                </DivContainerHome> */}

                <DivContainerHome >
                    <CardTecnologia link="https://github.com/dev-brunosantos">
                        <FaGithub size={30} className="redes-contato-home" />
                    </CardTecnologia>
                    <CardTecnologia link="">
                        <FaLinkedin size={30} className="redes-contato-home" />
                    </CardTecnologia>
                    <CardTecnologia link="https://wa.me/5+5511985706834">
                        <FaWhatsapp size={30} className="redes-contato-home" />
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

                {/* <div>
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
                </div> */}
            </ContainerInfor>
            <ContainerInfor>

            </ContainerInfor>
        </ContainerPage>
    )
} 