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
      //crebei a cabeça aqui, mas depois de pensar um pouco vi que poderia criar outro array, porem vi que nao era a melhor opçao, entao transformei eles em objetos para assesar (tarefa.titulo/descrição)
      const novaTarefa = { Titulo, Descricao } 
      setTarefas([...Tarefas, novaTarefa])
      setTitulo('')
      setDescricao('')
     
    
    }
    else{window.alert('Erro, não há nada digitado ou Esta tarefa ja foi Adicionada')}
  }
  //passamos o index que esta com o indice do array, depois copias o Tarefas em uma nova varialvel, utilizamos o metodo splice para atualizar o novasTarefas que esta com a compia do [Tarefas], colocamos o indice e a quantidade, depois setamos o Tarefas real pra copia agora com um excluido
  function Excluir(index){
    const novasTarefas = [...Tarefas]
    novasTarefas.splice(index,1)
    setTarefas(novasTarefas)
   }
//retornamos tudo e no final utilizamos a função map para mapear as tarefas
  return (
    
      <div>
        <h1>Gerenciador de tarefas</h1>
  
        <input type="text" placeholder='Titulo' value={Titulo}
         onChange={(e) => setTitulo(e.target.value)} />
  
        <input type="text" placeholder='Descrição' value={Descricao} onChange={(e) => setDescricao(e.target.value)} />
  
        <button onClick={AdicionarTarefa}>Adicionar</button>
        <h2>Minhas tarefas</h2>
        
         {Tarefas.map((tarefa, index) => (
          
            <div>
              <h3>{tarefa.Titulo}</h3>
              <p>{tarefa.Descricao}</p>
              <button onClick={() => Excluir(index)}>X</button>
            </div>
          
           ))}

      </div>
  )
}
export default App