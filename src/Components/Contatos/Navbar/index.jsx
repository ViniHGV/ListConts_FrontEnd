import React from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="NavBar">
            <nav>
                <div className="SubBar">
                <h1 className="TitleNav">ListConts</h1>
                <Link to='/' className="LinkNav">Página inicial</Link>
                <a href="/" className="LinkNav">Contatos</a>
                <Link to='/adicionar' className="button"> + Contato</Link>
                </div>
            </nav>
        </div>
    )
}