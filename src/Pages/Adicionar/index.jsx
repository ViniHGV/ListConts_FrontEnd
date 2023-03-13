import React from "react";
import { Navbar } from "../../Components/Contatos/Navbar";
import './index.css'

export function Adicionar() {
    return (
        <>
            <Navbar />
            <div className="containerLogin">
                <div className="containerInputs">
                    <h1>Adicionar Contato</h1>
                    <form action="" className="formAdd">
                        <input type="text" className="inputAdd" />
                        <input type="text" className="inputAdd" />
                        <input type="text" className="inputAdd" />
                        <div className="buttonsForm">
                        <button type="submit" className="btnFormSub">Adicionar</button>
                        <button type="submit" className="btnFormCls">Limpar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}