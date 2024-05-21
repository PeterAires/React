import { useState } from 'react'
import './index.css'
import BotaoMais from './components/BotaoMais'
function App(){
  
  return (
    <div>
      <h1 className='h1'>Gerenciador de tarefas</h1>
      <BotaoMais/>
      <h2 className='h2'>Minhas Tarefas</h2>
      <h3></h3>
    </div>
  )
}
export default App