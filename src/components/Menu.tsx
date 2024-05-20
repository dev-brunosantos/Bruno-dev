"use client"
import {
    Cabecalho, LogoMarca, MenuPrincipal,
    MenuItens, MenuLink
} from "@/styles/MenuStyles"


export const Menu = () => {

    const links: string[] = ['/', 'sobre', 'projetos', 'contatos']

    return (
        <Cabecalho>
            <LogoMarca>
                <h1>
                    <a href="">Bruno Santos</a>
                </h1>
            </LogoMarca>
            <MenuPrincipal>
                <MenuItens>
                    {
                        links.map((link) => (
                            link === '/' ?
                            <MenuLink key={`#${link}`}>
                                <a href={link}>Home</a>
                            </MenuLink> :
                            <MenuLink key={link}>
                                <a href={`#${link}`}>{link}</a>
                            </MenuLink>
                        ))
                    }
                </MenuItens>
            </MenuPrincipal>
        </Cabecalho>
    )
}