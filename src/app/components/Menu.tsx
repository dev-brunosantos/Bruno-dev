"use client"
import { useState } from "react"
import { Cabecalho, LogoContainer, MenuLinks, MenuOpc, MenuPrincipal } from "@/styles/MenuStyles"
import { IoIosMenu } from 'react-icons/io'

export const Menu = () => {
    const links: string[] = ['home', 'sobre', 'projetos', 'contatos']
    // const links: string[] = ['home', 'projetos', 'contatos']
    const [linha, setLinha] = useState<string>('5%')

    const [abrirMenu, setAbrirMenu] = useState<string>("0vh")

    const handleEscolhePagina = (txt: string) => {
        if(txt == "home") { return setLinha('5%') }
        else if (txt == "sobre") { return setLinha('31.5%') }
        else if (txt == "projetos") { return setLinha('56.5%') }
        else if (txt == "contatos") { return setLinha('82.5%') }
        // return setLinha('10%')
    }

    const handleAbrirMenu = () => {
        abrirMenu === "0vh" ? setAbrirMenu("100vh") : setAbrirMenu("0vh")
    }

    return (
        <Cabecalho>
            <LogoContainer>
                <h1>
                    Bruno <span> Santos</span>
                </h1>
            </LogoContainer>
            <MenuPrincipal >
                <MenuOpc style={{ height: abrirMenu }}>
                    {
                        links.map((link) => (
                            <MenuLinks key={link}
                                onClick={() => { 
                                    handleEscolhePagina(link) 
                                    handleAbrirMenu()
                                }}
                            >
                                <a href={`#${link}`}>{link}</a>
                            </MenuLinks>
                        ))
                    }
                    <div
                        className="linha"
                        style={{ left: linha }}
                    />
                </MenuOpc>
            </MenuPrincipal>

            <IoIosMenu 
                size={30} 
                className="menu-icone"
                onClick={handleAbrirMenu}
            />
        </Cabecalho>
    )
}