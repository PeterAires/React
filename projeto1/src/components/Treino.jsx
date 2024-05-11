import { useState } from "react"
function Treino(){ 
    const [botao, setBotao] = useState()

return(
    <div>
        <button onClick={(e) => setBotao(true)}>Somar</button>
        <h1>{botao &&(
            <div><p>botao clicado</p></div>
        )}</h1>
        <button onClick={(e) => setBotao('')}>zerar</button>
    </div>
)
}
export default Treino