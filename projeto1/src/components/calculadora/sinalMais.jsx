import { useState } from "react"

function SinalMais(){

    const [sinal,setSinal] = useState('+')

    return(
        <div className="Botao">
            <button onClick={(e) => {setSinal('+')}}>+</button>
        </div>
    )
}
export default SinalMais