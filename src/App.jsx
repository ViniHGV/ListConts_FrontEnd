import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Navbar';
import ListContacts from './Pages/ListarContacts';
import { Adicionar } from './Pages/Adicionar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Editar } from './Pages/Editar';
import { Excluir } from './Pages/Excluir';
import HomePage from './Pages/Home';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contatos' element={<ListContacts/>}/>
          <Route path='/editar' element={<Editar/>}/>
          <Route path='/excluir' element={<Excluir/>}/>
          <Route path='/adicionar' element={<Adicionar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
