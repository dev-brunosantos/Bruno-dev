import { Input } from "@/styles/ContatosStyles"

interface InputsInterface {
    width: string,
    placeholder: string,
    color?: string,
    fontSize?: string,
}

export const InputComponent = ({
    width, placeholder, color, fontSize="16px"
}: InputsInterface) => {
    return (
        <Input
            style={{
                width: width,
                color: color,
                fontSize: fontSize
            }}
            placeholder={placeholder}
        />
    )
}