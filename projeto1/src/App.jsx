import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App(){


  return (//componentes que vao fazer parte da 'rota'
    <Router> 
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/empresa'>Empresa</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
      </ul>
      
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/empresa" element={<Empresa />} />
            </Routes>
            <Footer/>
    </Router>
  )
}
export default App