import './App.css'
import './index.css'
import Numero1 from './components/calculadora/Numero1'
import Numero2 from './components/calculadora/Numero2'
import SinalMais from './components/calculadora/sinalMais'

function App(){
  return (
    <div className="App">
      <Numero1/>
      <Numero2/>
      <SinalMais/>
    </div>
  )
}
export default App