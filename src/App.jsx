import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Contatos/Navbar';
import ListContacts from './Pages/ListarContacts';
import { Adicionar } from './Pages/Adicionar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListContacts/>}/>
          <Route path='/adicionar' element={<Adicionar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
