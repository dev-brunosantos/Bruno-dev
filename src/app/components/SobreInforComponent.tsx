import React from "react"

interface SobreInforInterface {
    nome: string,
    funcao: string,
    descricao: string,
    children: React.ReactNode, 
    contato: () => void
}

export const SobreInfor = ({ nome, funcao, descricao,children, contato }: SobreInforInterface) => {
    return (
        <>
            <h1>{nome}</h1>
            <h2>{funcao}</h2>
            <div>
                <p>
                    {descricao}
                </p>
            </div>

            <div>
                {children}
            </div>

            <button onClick={contato}>Teste</button>
        </>
    )
}