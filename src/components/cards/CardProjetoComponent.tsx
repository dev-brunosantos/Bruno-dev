"use client"
import { CardBtnContainer, CardContainer, CardInforContainer } from "@/styles/cards/CardProjetoStyles"
import { Botao } from "../Btn"
import Image from "next/image"

import { FaReact, FaNode } from 'react-icons/fa'
import { Tecnologia } from "../Tecnologia"

interface CardProjetoInterface {
    img: string,
    nomeProjeto: string,
    projeto: string,
    repositorio: string
}

export const CardProjetoComponent = ({
    nomeProjeto,img, projeto, repositorio
}:CardProjetoInterface) => {

    const tecnologias = [
        <FaReact size={50} key={1} />, 
        <FaNode size={50} key={2}/>
    ]

    return(
        <CardContainer>
            {/* IMGAGEM DO PROJETO */}
            <CardInforContainer className="container-projeto-image">
                <Image 
                    src={img}
                    alt=""
                    width={500} height={300}
                />
            </CardInforContainer>
            {/* INFORMA ÇÃO DO PROJETO */}
            <CardInforContainer className="container-projeto-infor">
                <h2>{nomeProjeto}</h2>
                <div className="container_tecnologia">
                    {
                        tecnologias.map((tec) => (
                            <Tecnologia key={tec}>
                                {tec}
                            </Tecnologia>
                        ))
                    }
                </div>
            </CardInforContainer>
            {/* CONTAINER COM OS BOTÕES PARA ACESSO AOS DADOS DO PROJETO */}
            <CardBtnContainer>
                <Botao 
                    width="45%"
                    titulo="Projeto"
                    fontSize='22px'
                    onClick={() => alert(projeto)}
                />
                
                <Botao 
                    width="45%"
                    titulo="Repositório"
                    fontSize='22px'
                    onClick={() => alert(repositorio)}
                />
            </CardBtnContainer>
        </CardContainer>
    )
}