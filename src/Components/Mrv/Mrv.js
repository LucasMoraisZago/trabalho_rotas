import React from "react"
import Mrv_img from "../../Imagens/MRV.jpg"
import './Mrv.css'

export default function Mrv() {
    return (
        <>
            {/* <Title texto="Seção da Missão!" /> */}
            <div className="mrv">
                <figure>
                    <img id="project" src={Mrv_img} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}