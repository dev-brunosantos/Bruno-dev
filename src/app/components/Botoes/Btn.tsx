import { BtnContainer } from "@/styles/BtnStyles"

interface BtnInterface {
    width: string,
    height: string,
    titulo: string,
    fontSize?: string,
    onClick: () => void
}

export const Btn = ({
    width, height, titulo, fontSize = '20px', onClick
}: BtnInterface) => {
    return (
        <BtnContainer onClick={onClick}
            style={{ width: width, height: height, fontSize: fontSize }}
        >
            {titulo}
        </BtnContainer>
    )
}