import React from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="NavBar">
            <nav>
                <div className="SubBar">
                <div>
                <h1 className="TitleNav">ListConts</h1>
                <Link to='/' className="LinkNav">Página inicial</Link>
                <Link to="/contatos" className="LinkNav">Contatos</Link>
                </div>
                <div className="Navg">
                <Link to='/adicionar' className="button"> + Contato</Link>
                </div>
                </div>
            </nav>
        </div>
    )
}