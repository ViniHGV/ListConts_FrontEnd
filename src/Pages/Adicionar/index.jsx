import React from "react";
import { Navbar } from "../../Components/Navbar";
import './index.css'
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import { useNavigate } from 'react-router-dom'



const validationPost = yup.object().shape({
    nome: yup.string().required("O Nome é obrigatório !").max(40, "O Nome precisa ter menos de 40 caracteres !"),
    url_Img: yup.string().required("A URL é obrigatória !"),
    telefone: yup.string().required("O Telefone é obrigatório !").max(13, "O Telefone tem que ter menos de 13 Caracteres")
})


export function Adicionar() {
    const { register, handleSubmit, formState: { errors }}  = useForm({
        resolver: yupResolver(validationPost)
    })

    const navigate = useNavigate()
    
    const addPost = data => axios.post("https://localhost:7096/Contato/CriarContato", data)
    .then(() => {
        console.log("Cadastrado com sucesso !")
        navigate("/contatos", Swal.fire({
            icon: 'success',
            title: 'Contato adicionado com sucesso !',
            showConfirmButton: false,
            background: '#2A2E3B',
            color: '#FFF',
            timer: 1500
        }))
    })
    return (
        <>
            <Navbar />
            <div className="containerLogin">
                <div className="containerInputs">
                    <h1>Adicionar Contato</h1>
                    <form onSubmit={handleSubmit(addPost)} className="formAdd">
                        <label htmlFor="">Nome do Contato</label>
                        <input type="text" className="inputAdd" name="nome" {...register("nome")} placeholder="Digite o Nome do Contato:"/>
                        <strong className="error-message">{errors.nome?.message}</strong>
                        <label htmlFor=""className="lblInput">Url da imagem</label>
                        <input type="text" className="inputAdd" name="url_Img" {...register("url_Img")} placeholder="Insira a Url da imagem do Contato:"/>
                        <strong className="error-message">{errors.url_Img?.message}</strong>
                        <label htmlFor="" className="lblInput">Telefone do Contato</label>
                        <input type="text" className="inputAdd" name="telefone" {...register("telefone")} placeholder="Digite o Telefone do Contato:" />
                        <strong className="error-message">{errors.telefone?.message}</strong>
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