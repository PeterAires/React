import { useState } from "react"
import Tarefa from "./Tarefa"

function BotaoMais(){

    const [adicionar, setAdicionar] = useState()

    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()

    const [tituloFinal, setTituloFinal] = useState()
    const [descricaoFinal, setDescricaoFinal] = useState()

    function Finalizar(){
        setTituloFinal(titulo)
        setDescricaoFinal(descricao)
    }

    function Fechar(){
        setAdicionar(false)
    }


    return(
        <div>
            <button onClick={(e) => setAdicionar(true)}>Adicionar</button>
    
            {adicionar &&(
                <div>
                <input type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)}/>
                <input type="text" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)}/>
                <button onClick={Finalizar}>Finalizar</button>
                <button onClick={Fechar}>X</button>
            </div>
            )}
            <Tarefa PropsT={tituloFinal} PropsD={descricaoFinal}/>
        </div>
    )
}
export default BotaoMais
