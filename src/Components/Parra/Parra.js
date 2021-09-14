import React from "react"
import Logo from "../../Imagens/Parra"

import './Parra.css'

export default function Parra() {
    return (
        <>
            {/* <Title texto="Formulário inicial do projeto!" /> */}
            <div className="parra">
                <figure>
                    <img id="logo" src={Logo} align="center" alt="Logo Parra" />
                </figure>
            </div>

        </>
    )
}