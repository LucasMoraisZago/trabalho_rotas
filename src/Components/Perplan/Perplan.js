import React from "react"
import Perplan_img from "../../Imagens/perplan.png"
import './Perplan.css'

export default function Perplan() {
    return (
        <>
            {/* <Title texto="Seção de Parceiros!" /> */}
            <div className="perplan">
            <figure>
                    <img id="perplan" src={Perplan_img} align="center" alt="Perplan" />
                </figure>
            </div>
        </>
    )
}