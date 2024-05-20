import { useState } from "react"

function Botao(){

const [tarefaTitulo,setTarefaTitulo] = useState()
const [tarefaDescricao,setTarefaDescricao] = useState()
const [TarefaAdicionada,setTarefaAdicionada] = useState()
const [fecharJanela,setFecharJanela] = useState()
const [tarefaEscrita,setTarefaEscrita] = useState()

//finalizar o que foi digitado
function Clikar(){
    setTarefaAdicionada(true)
}
// fechar a barra de digitar 
function Fechar(){
    
    setTarefaAdicionada(false)
    
}
//Final, mostra o que o usuario digitou
return(

    <div>
        <input type="text" onChange={(e) => {setTarefaTitulo(e.target.value)}} placeholder="Titulo"/>
        <br />

        <input type="text" onChange={(e) => {setTarefaDescricao(e.target.value)}} placeholder="Descrição"/>
        <br />

        <button onClick={Clikar}>Finalizar</button>
        
        {tarefaEscrita &&(
        <div>
            <h5>{tarefaTitulo}</h5>
            <h6>{tarefaDescricao}</h6>
        </div>)}

        {TarefaAdicionada &&(
            <div>
                <h4>Tarefa Adicionada!</h4>

                <p>{tarefaTitulo}</p>
                <p>{tarefaDescricao}</p>

                <button className="fecharJanela" onClick={Fechar}>x</button>
            </div>
        )}
    </div>
)
}
export default Botao