import { ContainerForm, ContainerTextArea, Formulario } from "@/styles/ContatosStyles";
import { ContainerPage } from "@/styles/PageStyles";
import { InputComponent } from "../components/Inputs";
import { Btn } from "../components/Botoes/Btn";

export default function Contatos() {

    const opcInput: string[] = ["Nome completo", "E-mail", "Telefone", "Titulo da Mensagem"]

    return (
        <ContainerPage id="contatos" style={{ paddingTop: '80px' }}>
            <Formulario>
                <ContainerForm>
                    {
                        opcInput.map((opc) => (
                            <InputComponent
                                key={opc}
                                width="100%"
                                placeholder={opc}
                                color="#fff"
                                fontSize="14px"
                            />
                        ))
                    }
                </ContainerForm>
                <ContainerForm>
                    {/* <h3>Sua mensagem</h3> */}
                    <div style={{ width: '100%' }}>
                        <ContainerTextArea placeholder="Digite sua mensagem"/>
                    </div>
                    <Btn 
                        width="100px" height="40px"
                        titulo="Enviar" fontSize=""
                        onClick={() => alert('Funcionou')}
                    />
                </ContainerForm>
            </Formulario>
        </ContainerPage>
    )
}