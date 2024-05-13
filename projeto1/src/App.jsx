import './App.css'
import OutraLista from './components/OutraLista'
import './index.css'


function App(){

  const meusItens = ['react','Vue','Angualr']

  return (
    <div className="App">
      <h1>renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}
export default App