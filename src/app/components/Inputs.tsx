import { Input } from "@/styles/ContatosStyles"
import { ChangeEvent } from "react"

interface InputsInterface {
    width: string,
    placeholder: string,
    color?: string,
    fontSize?: string,
    type?: string,
    required?: boolean,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputComponent = ({
    width, placeholder, color, fontSize="16px", 
    required=false, type="text", onChange
}: InputsInterface) => {
    return (
        <Input
            style={{ width: width, color: color, fontSize: fontSize }}
            placeholder={placeholder}
            type={type}
            required={required}
            onChange={onChange}
        />
    )
}