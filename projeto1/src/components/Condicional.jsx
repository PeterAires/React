import { useState } from "react"

function Condicional(){
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState() 

    function enviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')}

return(
<div>
    <h2>
        <form>
            <input type="email" placeholder="Digite o seu e-mail..." onChange={(event) => setEmail(event.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar e-mail</button> 
        </form>
        {userEmail && (
            <div>
                <p>o email do usuario é {userEmail}</p>
                <button onClick={limparEmail}>limpar email</button>
            </div>
        )}
    </h2>
</div>
)
}
export default Condicional