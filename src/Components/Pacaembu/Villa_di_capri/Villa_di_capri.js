import React from "react"
import Vdc from "../../../Imagens/VILLA_DI_CAPRI.jpg"
import './Villa_di_capri.css'

export default function Villa_di_capri() {
    return (
        <>
            {/* <Title texto="Seção da Missão!" /> */}
            <div className="villa_di_capri">
                <figure>
                    <img id="project" src={Vdc} align="center" alt="MRV" />
                </figure>
            </div>
        </>
    )
}