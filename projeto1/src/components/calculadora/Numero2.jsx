import { useState } from "react"

function Numero2(){

    const [numero,setNumero] = useState(2)

    return(
        <div className="Botao">
            <button onClick={(e) => {setNumero(2)}}>2</button>
        </div>
    )
}
export default Numero2