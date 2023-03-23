import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'
import { Navbar } from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function ListContacts() {
  const location = useLocation() 
  let message = ''
  //let type = ''
  if(location.state){
    //type = location.state.type
    message = location.state.message
  }

  const [Contatos, setContatos] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("https://localhost:7096/Contato/ListarTodos");
    const data = response.data;
    setContatos(data);
  }


  useEffect(() => {
    getPosts()
  }, [])


  function deletarContato(id){
    Swal.fire()
    let confirmacao 
    const confirm = Swal.fire({
      icon: 'question',
      title: `Excluir esse contato ?`,
      text: "Tem certeza que deseja excluir esse contato ?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar contato',
      cancelButtonText: "Cancelar",
      background: '#2A2E3B',
      color: '#FFF'
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Contato Excluido com sucesso !',
          showConfirmButton: false,
          background: '#2A2E3B',
          color: '#FFF',
          timer: 1500
      })
        axios.delete(`https://localhost:7096/Contato/DeletarContato${id}`)
        setContatos(Contatos.filter(contato => contato.id !== id))
      }
    })
  }


  return (
    <>
      <Navbar />
      <div className="Geral">
      {message && <Message msg="gfhtgfh" style='message' type='add'/>}
        <div className='title'><h1>ListConts</h1></div>
        <div className='pagContatos'>
          {Contatos.length === 0 ? <p>Carregando ...</p> : (
            Contatos.map((contato) => (
              <div className='contato' key={contato.id}>
                <img src={contato.url_Img} alt="" className='img' />
                <div className='conteudo'>
                  <h1 className="Namecontac">{contato.nome}</h1>
                  <h4>Telefone: {contato.telefone}</h4>
                  <Link to={{pathname: `/editar/${contato.id}`}} className='btnEdit'>Editar Contato</Link>
                  <button className='btnExc' onClick={() => deletarContato(contato.id)}>Excluir Contato</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default ListContacts