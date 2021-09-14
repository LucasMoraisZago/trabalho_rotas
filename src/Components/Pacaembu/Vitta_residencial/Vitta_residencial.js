import React from "react"
import VR from "../../../Imagens/VITTA_RESIDENCIAL.jpg"
import './Vitta_residencial.css'

export default function Vitta_residencial() {
    return (
        <>
            {/* <Title texto="Seção da Missão!" /> */}
            <div className="vitta_residencial">
                
                <figure>
                    <img id="project" src={VR} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}