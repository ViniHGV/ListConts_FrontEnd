import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'

function ListContacts(){
    const [Contatos, setContatos] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("https://localhost:7096/Contato/ListarTodos");
    const data = response.data;
    setContatos(data);
  }


  useEffect(() => {
    getPosts()
  }, [])


  return (<>
    <div className='title'><h1>ListConts</h1></div>
    <div className='pagContatos'>
      {Contatos.length === 0 ? <p>Carregando ...</p> : (
        Contatos.map((contato) => (
          <div className='contato' key={contato.id}>
            <img src={contato.url_Img} alt="" className='img' />
            <div className='conteudo'>
            <h1>{contato.nome}</h1>
            <h4>Telefone: {contato.telefone}</h4>
            </div>
            <button className='btnVer'>Ver detalhes</button>
          </div>
        ))
      )}
    </div>
  </>
  );
}
export default ListContacts