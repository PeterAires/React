import './index.css'
import BotaoMais from './components/BotaoMais'
import { useState } from 'react'


function App(){
  const [tituloApp,setTituloApp] = useState()
  const [descricaoApp,setDescricaoApp] = useState()
  const [finalizar,setFinalizar] = useState()
  const [tituloFinal,setTituloFinal] = useState()
  const [Tarefa,setTarefa] = useState()
  const contagem = 0
  let tarefas = []
  const listaTarefas = tarefas.map(
    (t) => <p>{t}</p>
  )

  return (
    <div>

      <h1 className='h1'>Gerenciador de tarefas</h1>

        <BotaoMais setTituloApp={setTituloApp} setDescricaoApp={setDescricaoApp} setFinalizar={setFinalizar} setTarefa={setTarefa} Contagem={contagem} Tarefas={tarefas} tituloApp={tituloApp} descricaoApp={descricaoApp}/>

      <h2 className='h2'>Minhas Tarefas</h2>

      {finalizar &&(
        <div>
          {tarefas.push(tituloApp, descricaoApp)}
          <h2>Tarefa adicionada</h2>
        </div>
      )}

      {listaTarefas}

    </div>
  )
  
}
export default App