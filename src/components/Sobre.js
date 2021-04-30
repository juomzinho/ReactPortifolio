import React from 'react'
import './Sobre.css'
import ImgEu from '../images/eu.png'
import {ReactComponent as IconEmail} from '../icons/envelope-solid.svg'
import {ReactComponent as GitIcon} from '../icons/github-alt-brands.svg'
import {ReactComponent as IconLKIN} from '../icons/linkedin-in-brands.svg'

export default function Sobre (){
    return(
        <div className="corpo">
            <div className="Esquerda">
                <div className="boxPessoal">
                    <img src={ImgEu} className="ImagemEu" alt="Joao Paulo"/>
                    <div className="InfosPessoais">
                        <h3>JOÃO PAULO CARDOSO </h3>
                        <h5>21 anos // Programador // Estudante</h5>
                        <div className="Redes">
                            <button className="BtnIcon"><IconEmail className="IconeBotao" /> </button>
                            <button className="BtnIcon"> <GitIcon className="IconeBotao" /> </button>
                            <button className="BtnIcon"> <IconLKIN className="IconeBotao"/> </button>
                        </div>
                    </div>
                </div>
                <div className="Habilidades">
                    
                </div>
            </div>
        </div>
    )
}