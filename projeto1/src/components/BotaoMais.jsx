import { useState } from "react"

function BotaoMais({setTituloApp, setDescricaoApp, setFinalizar, setTarefa, Contagem, Tarefas,TituloApp,DescricaoApp}){

    
    const[adicionar,setAdicionar] = useState()

    function Adicionar(){
        setAdicionar(true)
    }

    function Finalizar(){
        setFinalizar(true)
        setTarefa(true)
        Contagem = 1
        setAdicionar(false)
        Tarefas.push(TituloApp,DescricaoApp)
    }

    function Fechar(){
        setAdicionar(false)
        setTituloApp('')
        setDescricaoApp('')
        setFinalizar(false)
    }

    return(
        <div><button onClick={Adicionar}>Adicionar</button>
        {adicionar &&(
            <div>
            <input type="text" placeholder="Titulo" onChange={(e) => setTituloApp(e.target.value)}/>
            <input type="text" placeholder='Descrição' onChange={(e) => setDescricaoApp(e.target.value)}/>
            <button onClick={Finalizar}>Finalizar</button>
            <button onClick={Fechar}>Fechar</button>
        </div>
        )}
        </div>
        
    )
}
export default BotaoMais
