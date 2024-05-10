import { useState } from "react"

function Form(){
 function cadastrarUsuario(e) {
    e.preventDefault() 
    console.log(`usuario ${name} foi cadaastrado com a senha ${password}`)
}  
 const [password,SetPassword] = useState()
 const [name,SetName] = useState() // a variavel inicial, o componente capaz de mudar essa variavel, um valor inicial quando o componente for inicializado ,,, la em baixo// event é bacicamente a caixa, o ato de escrever, o SetName vai alterar o valor de 'nome' que começa vazio, para o que digitamos na caixa ,que é o evento, pegamos o target e o value e ai sim, alteramos ele letra por letra pelo set name,,, set name para atribuir o valor a 'name'

 return(
    <div>
        <h1>meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name" id="name" placeholder='Digite o seu nome'>name:</label>
                <input type="text" placeholder="Digite o seu nome"
                onChange={(event) => SetName(event.target.value)} //event, o evento de digitar na caixinha, a açao
                /> 
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Digite a sua senha" 
                onChange={(event) => SetPassword(event.target.value)}/>
            </div>
            <div>
                <input type="submit" value='Cadastrar' />
            </div>
        </form>
    </div>
 )
}
export default Form