import { CardContainer, CardInfor } from "@/styles/CardsStyles"

interface CardTecnologiaInterface {
    width?: string,
    height?: string,
    link: string,
    children: React.ReactNode
}

export const CardTecnologia = ({
    width, height, link, children
}: CardTecnologiaInterface) => {
    return (
        // <div className="centralizar" style={{
        //     width: width, height: height,
        // }}>
        //     <a href={link} target="_blank">
        //         {children}
        //     </a>
        // </div>
        <a
            href={link}
            target="_blank"
        >
            {children}
        </a>
    )
}