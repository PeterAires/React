import { useState } from "react"

function Botao(){

const [tarefa,setTarefa] = useState()
const [tarefaD,setTarefaD] = useState()
const [TarefaAdicionada,setTarefaAdicionada] = useState()
const [fecharJanela,setFecharJanela] = useState()

function Clikar(){
    setTarefa(tarefaD)
    setTarefaAdicionada(true)
}
function Fechar(){
    
    setTarefaAdicionada(false)
}

return(
    <div>
        <input type="text" onChange={(e) => {setTarefaD(e.target.value)}} />
        <button onClick={Clikar}>Finalizar</button>
        {TarefaAdicionada &&(
            <div>
                <h4>Tarefa Adicionada!</h4>
                <p>{tarefa}</p>
                <button className="fecharJanela" onClick={Fechar}>x</button>
            </div>
        )}
    </div>
)
}
export default Botao