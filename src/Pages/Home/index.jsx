import React from "react";
import './index.css'
import { Navbar } from "../../Components/Navbar";


function HomePage() {

  return (
    <>
      <Navbar />
      <div className="Geral">
        <div className='title'><h1>ListConts</h1></div>
        <div className='pagContatos'>
          <div className='conteudoHome'>
            <h1> Objetivo do Projeto ListConts</h1>
            <p>O projeto ListConts foi criado com o objetivo de aperfeiçoar o meu conhecimento com as técnologias:</p>
            <div className="React">
              <p><h2>React</h2>
              com o uso de Hooks, Components e Routes</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage