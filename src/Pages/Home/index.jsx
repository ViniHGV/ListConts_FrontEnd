import React from "react";
import './index.css'
import { Navbar } from "../../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function HomePage() {
  const [foto, setFoto] = useState([])

  const getFoto = async () => {
    const response = await axios.get("https://api.github.com/users/ViniHGV");
    const data = response.data;
    setFoto(data);
  }


  useEffect(() => {
    getFoto()
  }, [])
  return (
    <>
      <Navbar />
      <div className="GeralH">
        <div className='title'><h1>ListConts</h1></div>
        <div className='pagContatosHome'>
          <div className='conteudoHome'>
            <h1 className="TitleCont"> Objetivo do Projeto ListConts</h1>
            <h5 className="criador">Desenvolvido por <b>Vinicius Henrique </b><img className="imgCria" src={foto.avatar_url} alt="" />.</h5>
            <p>O projeto ListConts foi criado com o objetivo de aperfeiçoar o meu conhecimento com as tecnologias:</p>
            <div className="React">
              <div className="ReactTitle">
                <h2>React</h2>
                <img src="https://img.shields.io/badge/-2A2E3B?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
              </div>
              <p> Uso de Hooks como: UseState, useEffect, Useform e validações de formularios com Yup e conceitos como Components, Routes e Consumo de Api por meio do Axios.</p>
            </div>
            <div className="React">
              <div className="ReactTitle">
                <h2>Asp Net web API</h2>
                  <h6 className="logoNet">.NET</h6>
              </div>
              <p>API Criada com Migrations pela conexão com o banco de dados SQLSERVER com os métodos de CRUD para a criação de uma agenda de contatos.</p>
            </div>
            <div className="buttonsHome">
              <Link to='/contatos'className="buttonsHmL">Lista de contatos</Link>
              <Link to='adicionar'className="buttonsHmA">Adicionar contato</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage