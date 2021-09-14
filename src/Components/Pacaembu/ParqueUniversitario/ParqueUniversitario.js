import React from "react"
import Pqu from "../../../Imagens/pqu.PNG"
import './ParqueUniversitario.css'

export default function ParqueUniversitario() {
    return (
        <>
            {/* <Title texto="Seção da Missão!" /> */}
            <div className="pqu">
                <figure>
                    <img id="project" src={Pqu} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}