import { CardContainer, CardInfor } from "@/styles/CardsStyles"

interface CardTecnologiaInterface {
    width: string,
    height: string,
    link: string,
    children: React.ReactNode
}

export const CardTecnologia = ({ 
    width, height, link, children 
}: CardTecnologiaInterface) => {
    return (
        <CardContainer>
            <CardInfor className="centralizar" style={{
                width: width, height: height,
            }}>
                <a href={link} target="_blank">
                    {children}
                </a>
            </CardInfor>
        </CardContainer>
    )
}