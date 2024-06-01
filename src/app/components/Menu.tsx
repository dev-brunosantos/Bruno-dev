"use client"
import { useState } from "react"
import { Cabecalho, LogoContainer, MenuLinks, MenuOpc, MenuPrincipal } from "@/styles/MenuStyles"

export const Menu = () => {
    const links: string[] = ['home', 'sobre', 'projetos', 'contatos']
    const [linha, setLinha] = useState<string>('10px')

    const handleEscolhePagina = (txt: string) => {
        if (txt == "sobre") { return setLinha('145px') }
        else if (txt == "projetos") { return setLinha('280px') }
        else if (txt == "contatos") { return setLinha('412px') }
        return setLinha('10px')
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