import { useState } from "react"
import Tarefa from "./Tarefa"
import App from "../App"

function BotaoMais(){

    //Para verificar se o botao adicionado foi clicado
    const [adicionar, setAdicionar] = useState()

    //o Titulo e a descrição
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()

    // o titulo e a descrição para a função Finalizar
    const [Adicionada,setAdicionada] = useState()

    function Finalizar(){
        setAdicionada(true)
    }

    function Fechar(){
        setAdicionar(false)
        setAdicionada(false)
        setTitulo('')
        setDescricao('')
    }


    return(
        <div>
            <button onClick={(e) => setAdicionar(true)}>Adicionar</button>
    
            {adicionar &&(
                <div>
                <input type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)}/>

                <input type="text" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)}/>

                <button onClick={Finalizar}>Finalizar</button>
                {Adicionada &&(
                    <div><h4>Tarefa adicionada</h4></div>
                )}

                <button onClick={Fechar}>X</button>

                <Tarefa titulo={titulo} descricao={descricao}/>
                
            </div>
            )}
        </div>
    )
}
export default BotaoMais
