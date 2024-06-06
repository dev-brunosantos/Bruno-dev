"use client"
import { useState } from "react"
import { Cabecalho, LogoContainer, MenuLinks, MenuOpc, MenuPrincipal } from "@/styles/MenuStyles"

export const Menu = () => {
    const links: string[] = ['home', 'sobre', 'projetos', 'contatos']
    // const links: string[] = ['home', 'projetos', 'contatos']
    const [linha, setLinha] = useState<string>('5%')

    // const handleEscolhePagina = (txt: string) => {
    //     if (txt == "sobre") { return setLinha('145px') }
    //     else if (txt == "projetos") { return setLinha('280px') }
    //     else if (txt == "contatos") { return setLinha('412px') }
    //     return setLinha('10px')
    // }

    const handleEscolhePagina = (txt: string) => {
        if(txt == "home") { return setLinha('5%') }
        else if (txt == "sobre") { return setLinha('31.5%') }
        else if (txt == "projetos") { return setLinha('56.5%') }
        else if (txt == "contatos") { return setLinha('82.5%') }
        // return setLinha('10%')
    }

    return (
        <Cabecalho>
            <LogoContainer>
                <h1>
                    Bruno <span> Santos</span>
                </h1>
            </LogoContainer>
            <MenuPrincipal>
                <MenuOpc>
                    {
                        links.map((link) => (
                            <MenuLinks key={link}
                                onClick={() => { handleEscolhePagina(link) }}
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
        </Cabecalho>
    )
}