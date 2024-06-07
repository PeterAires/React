import { useState } from "react"

function BotaoMais({setTituloApp, setDescricaoApp}){
    return(
        <div>
            <input type="text" placeholder="Titulo" onChange={(e) => setTituloApp(e.target.value)}/>
            <input type="text" placeholder='Descrição' onChange={(e) => setDescricaoApp(e.target.value)}/>
        </div>
    )
}

export default BotaoMais
