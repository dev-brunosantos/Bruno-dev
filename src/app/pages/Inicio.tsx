"use client"
import React from "react"
import { ContainerInfor, ContainerPage } from "../../styles/PageStyles"

import { ReactTyped } from "react-typed"

export default function Inicio() {
    return (
        <ContainerPage id="home">
            <ContainerInfor>
                <h1>APRESENTAÇÃO DO USUÁRIO</h1>
                <h3>
                    Sou Desenvolvedor <br />
                    <span>
                        <ReactTyped
                            strings={["Front-end", "Back-end", "Mobile"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop={true}
                            fadeOut={true}
                        />
                    </span>

                </h3>
            </ContainerInfor>
            <ContainerInfor>

            </ContainerInfor>
        </ContainerPage>
    )
} 