import './index.css'
import BotaoMais from './components/BotaoMais'
import Tarefa from './components/Tarefa'
import { useState } from 'react'


function App(){
  const [tituloApp,setTituloApp] = useState()
  const [descricaoApp,setDescricaoApp] = useState()

  return (
    <div>
      <h1 className='h1'>Gerenciador de tarefas</h1>
      <BotaoMais/>

      <h2 className='h2'>Minhas Tarefas</h2>
      <h3><Tarefa setTituloApp={setTituloApp} setDescricaoApp={setDescricaoApp}/></h3>
      {tituloApp}
    </div>
  )
}
export default App