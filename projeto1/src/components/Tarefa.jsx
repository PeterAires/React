import { useState } from "react"

function Tarefa({titulo, descricao,setTituloApp,setDescricaoApp}){
    setDescricaoApp({descricao})
    setTituloApp({titulo})
    return(
        <div>
            {titulo} kakkaka
            {descricao}
        </div>
    )

}
export default Tarefa