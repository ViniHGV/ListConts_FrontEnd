import React from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Navbar() {
    return (
        <div className="NavBar">
            <nav>
                <h1><a href="">ListCont</a></h1>
                <a href="">Pagina inicial</a>
                <a href="#">Contato</a>
                <button className="button"> + Contato</button>
            </nav>
        </div>
    )
}