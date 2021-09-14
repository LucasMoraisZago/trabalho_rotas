import React from "react"
import Projeto_img from "../../Imagens/projeto.png"



import './Projeto.css'

export default function Projeto() {
    return (
        <>
            {/* <Title texto="Formulário inicial do projeto!" /> */}
            <div className="projeto">
                <figure>
                    <img id="project" src={Projeto_img} align="center" alt="Projeto" />
                </figure>
            </div>

        </>
    )
}