import './index.css'
import { useState } from 'react'


function App(){
  //dois useStates: um pega o que vc escreveu e o outro salva na lista do useState


  const [Titulo,setTitulo] = useState('')
  const [Descricao,setDescricao] = useState('')
  const [Tarefas,setTarefas] = useState([])
  
  
//se no valor escrito nao tiver nada ele nao vai adicionar a lista,,,Spread operator, (adicionar elemento a lista),,,trim(remove os espaços em branco no inicio e fim),,,zerar o valor que esta salvo para evitar repetição de tarefas
  function AdicionarTarefa(){
    if (Titulo.trim() != '' && Descricao.trim() != '' ){
      //crebei a cabeça aqui, mas depois de pensar um pouco era so criar outro array
      const novaTarefa = [<h3>{Titulo}</h3>,<br/>,<h4>{Descricao} <button>X</button></h4>] 
      setTarefas([...Tarefas, novaTarefa])
      setTitulo('')
      setDescricao('')
    }
    else{window.alert('Erro, não há nada digitado ou Esta tarefa ja foi Adicionada')}
  }
  function Excluir(c){
    const remover = Tarefas.indexOf(Tarefas[c])
    if (remover !== -1) {
      Tarefas.splice(remover, 1);

   }}
//retornamos tudo e no final utilizamos a função map para mapear as tarefas
  return (
    <div>
      <h1>Gerenciador de tarefas</h1>

      <input type="text" placeholder='Titulo' onChange={(e) => setTitulo(e.target.value)} />

      <input type="text" placeholder='Descrição' onChange={(e) => setDescricao(e.target.value)}/>

      <button onClick={AdicionarTarefa}>Adicionar</button>
      <h2>Minhas tarefas</h2>
      <ul>
      
       {Tarefas.map((t, c = 0) => (<div>{t} </div>)
       )}
      </ul>
    </div>
  )
}
export default App