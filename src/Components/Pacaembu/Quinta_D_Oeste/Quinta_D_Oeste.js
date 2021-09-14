import React from "react"
import Qdo from "../../../Imagens/Mapa_Urbanistico_QUINTA_DOESTE-1.jpg"
import './Quinta_D_Oeste.css'

export default function Quinta_D_Oeste() {
    return (
        <>
            <div className="Quinta_D_Oeste">
                <figure>
                    <img id="project" src={Qdo} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}