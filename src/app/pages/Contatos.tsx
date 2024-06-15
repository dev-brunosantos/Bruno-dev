import { ContainerForm, ContainerTextArea, Formulario } from "@/styles/ContatosStyles";
import { ContainerPage } from "@/styles/PageStyles";
import { InputComponent } from "../components/Inputs";
import { Btn } from "../components/Botoes/Btn";
import { useState } from "react";

export default function Contatos() {

    const opcInput: string[] = ["Nome completo", "E-mail", "Telefone", "Titulo da Mensagem"]

    const [nome, setNome] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [telefone, setTelefone] = useState<string>()
    const [titulo, setTitulo] = useState<string>()
    const [mensagem, setMensagem] = useState<string>()

    return (
        <ContainerPage id="contatos" style={{ paddingTop: '80px' }}>
            <Formulario>
                <ContainerForm>
                    {/* {
                        opcInput.map((opc) => (
                            <InputComponent
                                key={opc}
                                width="100%"
                                placeholder={opc}
                                color="#fff"
                                fontSize="14px"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        ))
                    } */}

                    <InputComponent key={0} width="100%"
                        placeholder={opcInput[0]}
                        color="#fff" fontSize="14px"
                        required={true}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputComponent key={0} width="100%"
                        placeholder={opcInput[1]} type="email"
                        color="#fff" fontSize="14px"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputComponent key={0} width="100%"
                        placeholder={opcInput[2]} type="number"
                        color="#fff" fontSize="14px"
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    <InputComponent key={0} width="100%"
                        placeholder={opcInput[3]}
                        color="#fff" fontSize="14px"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </ContainerForm>
                <ContainerForm>
                    {/* <h3>Sua mensagem</h3> */}
                    <div style={{ width: '100%' }}>
                        <ContainerTextArea placeholder="Digite sua mensagem" />
                    </div>
                    <Btn
                        width="100px" height="40px"
                        titulo="Enviar" fontSize=""
                        onClick={() => alert(`
                            Nome: ${nome},    
                            Email: ${email},    
                            Telefone: ${telefone},    
                            Titulo da mensagem: ${titulo}    
                        `)}
                    />
                </ContainerForm>
            </Formulario>
        </ContainerPage>
    )
}