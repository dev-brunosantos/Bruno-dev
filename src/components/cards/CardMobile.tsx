import { CardProjetoMobile, ContainerCard } from "@/styles/cards/CardProjetoStyles"
import { ProjetoIntertface } from "@/interfaces/ProjetoInterface"

export const ProjetoMobileConMponent = ({
    img, titulo, descricao, linkRepositorio
}:ProjetoIntertface) => {
    return(
        <CardProjetoMobile onClick={() => alert(linkRepositorio)}>
            {/* <ContainerCard></ContainerCard> */}
            <ContainerCard>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </ContainerCard>
        </CardProjetoMobile>
    )
}