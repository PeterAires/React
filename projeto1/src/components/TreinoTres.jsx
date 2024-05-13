import { useState } from "react"

function TreinoTres(){
    
    const [texto,setTexto] = useState()
    const [textoum,setTextoUm] = useState()

    function Clikar(){
        setTexto(textoum)
    }

    return(
        <div>
            <input type="text" value={textoum} onChange={(e) => {setTextoUm(e.target.value)}}/> 
            <button onClick={Clikar} >Mudar</button>
            <h1>{texto}</h1>
            
            {texto && (
                <div style={{backgroundColor:"black"}}>
                    <h2>MUDOU EBAAA</h2>
                </div>
            )}
        </div>
    )
    // Atribuimos um valor ao input, assim direcionamos que atribuimos o valor dele ao texto um,,, onClick é quando a gente clikar, Onchange é todas as informaçoes,, AI EM CIMA O VALUE  NEM É NECESSARIO
}
export default TreinoTres