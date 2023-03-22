import React from "react";
import './index.css'
import { Navbar } from "../../Components/Navbar";
import { Link } from "react-router-dom";


function HomePage() {

  return (
    <>
      <Navbar />
      <div className="GeralH">
        <div className='title'><h1>ListConts</h1></div>
        <div className='pagContatosHome'>
          <div className='conteudoHome'>
            <h1 className="ReactTitle"> Objetivo do Projeto ListConts</h1>
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