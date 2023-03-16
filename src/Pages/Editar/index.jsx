import React, { useEffect } from "react";
import { Navbar } from "../../Components/Navbar";
import './index.css'
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'




const validationPost = yup.object().shape({
    nome: yup.string().required("O Nome é obrigatório !").max(40, "O Nome precisa ter menos de 40 caracteres !"),
    url_Img: yup.string().required("A URL é obrigatória !"),
    telefone: yup.string().required("O Telefone é obrigatório !").max(13, "O Telefone tem que ter menos de 13 Caracteres")
})


export function Editar() {

    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://localhost:7096/Contato/ObterPorID${id}`)
        .then((Response) => {
            reset(Response.data)
        })
    },[])

    const { register, handleSubmit, formState: { errors }, reset}  = useForm({
        resolver: yupResolver(validationPost)
    })
    const navigate = useNavigate()

    const addPost = data => axios.put(`https://localhost:7096/Contato/AtualizarContato${id}`, data)
    .then(() => {
        console.log("Editado com sucesso !")
        navigate("/contatos")
    })

  
    return (
        <>
            <Navbar />
            <div className="containerLogin">
                <div className="containerInputs">
                    <h1>Editar Contato</h1>
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
                        <div className="buttonsFormEdt">
                        <button type="submit" className="btnEdtCont">Editar</button>
                        <button type='reset' className="btnFormCls">Limpar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}