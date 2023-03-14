import React from "react";
import { Navbar } from "../../Components/Contatos/Navbar";
import './index.css'
import { useForm } from "react-hook-form";

export function Adicionar() {
    const { register, handleSubmit, formState: { errors }}  = useForm()

    //const addPost = data => console.log(data)

    return (
        <>
            <Navbar />
            <div className="containerLogin">
                <div className="containerInputs">
                    <h1>Adicionar Contato</h1>
                    <form action="" className="formAdd">
                        <label htmlFor="">Nome do Contato</label>
                        <input type="text" className="inputAdd"  placeholder="Digite o Nome do Contato:"/>
                        <label htmlFor=""className="lblInput">Url da imagem</label>
                        <input type="text" className="inputAdd" placeholder="Insira a Url da imagem do Contato:"/>
                        <label htmlFor="" className="lblInput">Telefone do Contato</label>
                        <input type="text" className="inputAdd"placeholder="Digite o Telefone do Contato:" />
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