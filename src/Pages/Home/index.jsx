import React from "react";
import './index.css'
import { Navbar } from "../../Components/Navbar";


function HomePage() {

  return (
    <>
      <Navbar />
      <div className="Geral">
        <div className='title'><h1>ListConts</h1></div>
        <div className='pagContatosHome'>
          <div className='conteudoHome'>
            <h1> Objetivo do Projeto ListConts</h1>
            <p>O projeto ListConts foi criado com o objetivo de aperfeiçoar o meu conhecimento com as técnologias:</p>
            <div className="React">
              <div className="ReactTitle">
                <h2>React</h2>
                <img src="https://img.shields.io/badge/-2A2E3B?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
              </div>
              <p> Uso de Hooks, Components, Routes, Use Form, Consumo de Api por meio do Axios </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage