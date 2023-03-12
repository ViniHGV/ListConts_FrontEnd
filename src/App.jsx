import 'bootstrap/dist/css/bootstrap.min.css'
import ListContacts from './Components/Contatos';
import { Navbar } from './Components/Contatos/Navbar';

function App() {
  return( 
  <div className='App'>
    <Navbar/>
    <ListContacts/>
  </div>
  );
}

export default App
