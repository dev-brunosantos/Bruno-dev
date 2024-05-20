"use client"
import { Btn } from "@/styles/BtnStyles"

interface BtnInterface {
    width: string | number,
    color?: string,
    titulo: string,
    fontSize: string | number,
    backgroundColor?: string,
    onClick: (() => void)
}

export const Botao = ({
    width, color, titulo, 
    fontSize, backgroundColor, onClick
}: BtnInterface) => {
    return (
        <Btn
            style={{
                width: width,
                color: color,
                fontSize: fontSize,
                backgroundColor: backgroundColor
            }}
            onClick={onClick}
        >
            {titulo}
        </Btn>
    )
}