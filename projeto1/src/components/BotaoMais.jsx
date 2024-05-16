import { useState } from "react"
import Botao from "./projeto1/Botao"
import './Botao.css'

function Botaomais(){
        const [acionar,setAcionar] = useState()


    return(
        <div className="areabotao">
            <button className="botaomais" onClick={(e) => setAcionar(true)}>Adicionar</button>
        {acionar&&(
            <div className="adicionar"><h1><Botao props={setAcionar}/></h1></div>
        )}
        </div>
    )

}
export default Botaomais