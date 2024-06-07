import './index.css'
import { useState } from 'react'


function App(){
  //dois useStates: um pega o que vc escreveu e o outro salva na lista do useState


  const [valorEscrito,setValorEscrito] = useState('')
  const [Tarefas,setTarefas] = useState([])

  //primeiro passo: pegar o que a pessoa escreveu e mandar pro 'valorEscrito'
  const valorDigitado = (e) => {
    setValorEscrito(e.target.value)
  }
  
//se no valor escrito nao tiver nada ele nao vai adicionar a lista,,,Spread operator, (adicionar elemento a lista),,,trim(remove os espaços em branco no inicio e fim),,,zerar o valor que esta salvo para evitar repetição de tarefas
  function AdicionarTarefa(){
    if (valorEscrito.trim() != ''){
      setTarefas([...Tarefas, valorEscrito.trim()])
      setValorEscrito('')
    }
    else{window.alert('Erro, não há nada digitado ou Esta tarefa ja foi Adicionada')}
  }

  
//retornamos tudo e no final utilizamos a função map para mapear as tarefas
  return (
    <div>
      <h1>Gerenciador de tarefas</h1>

      <input type="text" placeholder='Digite uma tarefa' onChange={valorDigitado} />

      <button onClick={AdicionarTarefa}>Adicionar</button>
      <ul>
        {Tarefas.map((t) => (
          <p>{t}</p>
        ))}
      </ul>
    </div>
  )
  
}
export default App