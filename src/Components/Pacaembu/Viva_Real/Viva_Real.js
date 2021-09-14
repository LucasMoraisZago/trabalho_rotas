import React from "react"
import ViRe from "../../../Imagens/VIVA REAL.jpg"
import './Viva_Real.css'

export default function Viva_Real() {
    return (
        <>
            {/* <Title texto="Seção da Missão!" /> */}
            <div className="Viva_Real">
                <figure>
                    <img id="project" src={ViRe} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}