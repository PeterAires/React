import { useState } from "react"

function BotaoMais({setTituloApp, setDescricaoApp, setFinalizar, setTarefa, Contagem}){

    const[fechar,setFechar] = useState()
    const[adicionar,setAdicionar] = useState()

    function Adicionar(){
        setAdicionar(true)
    }

    function Finalizar(){
        setFinalizar(true)
        setTarefa(true)
        Contagem = 1
        for(let contador = 0; contador <1; contador++){
        }
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
