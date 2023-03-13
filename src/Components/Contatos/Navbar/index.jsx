import React from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Navbar() {
    return (
        <div className="NavBar">
            <nav>
                <div className="SubBar">
                <h1 className="TitleNav">ListConts</h1>
                <a href="" className="LinkNav">Página inicial</a>
                <a href="" className="LinkNav">Contato</a>
                <button className="button"> + Contato</button>
                </div>
            </nav>
        </div>
    )
}