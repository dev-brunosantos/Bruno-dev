"use client"
import { 
    Cabecalho, LogomarcaContainer, 
    MenuItens, MenuLinks, MenuPrincipal 
} from "@/styles/MenuStyles"

export const MenuComponent = () => {

    const links:string[] = ['/', 'sobre', 'projetos', 'contatos']

    return(
        <Cabecalho>
            <LogomarcaContainer>
                <h1>
                    <a href="">Bruno Santos</a>
                </h1>
            </LogomarcaContainer>

            <MenuPrincipal>
                <MenuItens>
                    {
                        links.map((link) => (
                            link === '/' ?
                            <MenuLinks key={link}>
                                <a href={link}>home</a>
                            </MenuLinks> :
                            <MenuLinks key={link}>
                                <a href={`#${link}`}>{link}</a>
                            </MenuLinks> 
                        ))
                    }
                </MenuItens>
            </MenuPrincipal>
        </Cabecalho>
    )
}