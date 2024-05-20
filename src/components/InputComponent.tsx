import { Input } from "@/styles/InputStyles"

interface InputInterface {
    width: string | number,
    placeholder: string,
    value: string | any,
    onChange: ((e:any) => void)
}

export const InputComponent = ({ width, placeholder, value, onChange }:InputInterface) => {
    return (
        <Input
            style={{width: width}}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}