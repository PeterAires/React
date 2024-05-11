import { useState } from "react"

function Numero1(){

    const [numero,setNumero] = useState(1)

    return(
        <div className="Botao">
            <button onClick={(e) => {setNumero(1)}}>1</button>
        </div>
    )
}
export default Numero1