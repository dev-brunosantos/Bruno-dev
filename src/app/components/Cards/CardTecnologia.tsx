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
        <a
            href={link}
            target="_blank"
        >
            {children}
        </a>
    )
}