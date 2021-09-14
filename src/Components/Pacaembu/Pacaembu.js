import React from "react"
import SubMenu from "./SubMenus.js"
import Pacaemu_img from "../../Imagens/pacaembu.png"
import { BrowserRouter } from 'react-router-dom'


import './Pacaembu.css'

export default function Pacaembu() {
    return (
        <>
        <BrowserRouter basename="/pacaembu">
            <SubMenu />
        </BrowserRouter>
            
            {/* <Title texto="Seção de Contatos!" /> */}
            <div className="pacaembu">
                <figure>
                    <img id="project" src={Pacaemu_img} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}