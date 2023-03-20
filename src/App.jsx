import 'bootstrap/dist/css/bootstrap.min.css'
import ListContacts from './Pages/ListarContacts';
import { Adicionar } from './Pages/Adicionar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Editar } from './Pages/Editar';
import HomePage from './Pages/Home';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contatos' element={<ListContacts/>}/>
          <Route path='/editar/:id' element={<Editar/>}/>
          <Route path='/adicionar' element={<Adicionar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
