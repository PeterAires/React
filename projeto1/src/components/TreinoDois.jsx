import { useState } from "react"

function TreinoDois(){

    const [botao1,setBotao1] = useState()
    const [botao2,setBotao2] = useState()
    function Clicar(){
        const convert1 = +botao1
        const convert2 = +botao2
        console.log(`a soma dos numeros foi ${convert1 + convert2}`)
    }

    return(
        <div>
            <input type="number" onChange={(e) => setBotao1(e.value)}/>
            <input type="number" onChange={(e) => setBotao2(e.value)}/>
            <button onClick={Clicar}>Somar</button>
        </div>
    )
}
export default TreinoDois