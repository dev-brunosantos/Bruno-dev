"use client"
import { Cabecalho, LogoContainer, MenuLinks, MenuOpc, MenuPrincipal } from "@/styles/MenuStyles"
import { useState } from "react"

export const Menu = () => {
    const links: string[] = ['home', 'sobre', 'projetos', 'contatos']
    //const caminho:string[] = ['10px', '145px', '280px', '415px']
    const [linha, setLinha] = useState<string>('10px')
    const [ativo, setAtivo] = useState<string>('#fff')
    // 10px, 145px, 280px, 415px

    const teste = (txt: string) => {
        if (txt == "sobre") {
            return (
                setLinha('145px'), setAtivo('var(--azul2)')
            )
        }
        if (txt == "projetos") {
            return setLinha('280px')
        }
        if (txt == "contatos") {
            return setLinha('412px')
        }
        return setLinha('10px')
    }

    return (
        <Cabecalho>
            <LogoContainer>
                <h1>
                    Bruno
                    <span> Santos</span>
                </h1>
            </LogoContainer>
            <MenuPrincipal>
                <MenuOpc>
                    {
                        links.map((link) => (
                            <MenuLinks
                                key={link}
                                onClick={() => {
                                    teste(link)
                                }}
                            >
                                {link}
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