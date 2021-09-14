import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'
// import { BrowserRouter } from 'react-router-dom'

 
export default function PacaembuHeader() {
    return (
        <>
            <header className="menu2"> 
            <nav className="navMenu2">
                <ul>
                    <li><a href="/"> Voltar</a></li>
                    <li><Link to="/ParqueUniversitario"> Parque Universitário</Link></li>
                    <li><Link to="/Villa_di_capri"> Villa Di Capri</Link></li>
                    <li><Link to="/Vitta_residencial"> Vitta Residencial</Link></li>
                    <li><Link to="/Quinta_D_Oeste"> Quinta D’ Oeste</Link></li>
                    <li><Link to="/Viva_Real"> Viva Real</Link></li>
                </ul>

            </nav>

            </header>
        </>
    )
}
