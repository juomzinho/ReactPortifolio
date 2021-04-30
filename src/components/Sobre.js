import React from 'react'
import './Sobre.css'
import ImgEu from '../images/eu.png'
import {ReactComponent as IconEmail} from '../icons/envelope-solid.svg'
import {ReactComponent as GitIcon} from '../icons/github-alt-brands.svg'
import {ReactComponent as IconLKIN} from '../icons/linkedin-in-brands.svg'
import {ReactComponent as IconeHtml} from '../icons/html5-brands.svg'
import {ReactComponent as IconeCSS} from '../icons/css3-alt-brands.svg'
import {ReactComponent as IconeJS} from '../icons/js-square-brands.svg'
import {ReactComponent as IconeReact} from '../icons/react-brands.svg'
import {ReactComponent as IconeGit} from '../icons/git-alt-brands.svg'
import {ReactComponent as IconeJava} from '../icons/java-brands.svg'
import {ReactComponent as IconeFigma} from '../icons/figma-brands.svg'


export default function Sobre (){
    return(
        <div className="corpoSobre">
            <div className="EsquerdaSobre">
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
                    <h2>Ferramentas dominadas</h2>
                    <div className="IconesHabilidades">
                        <div className="IconeHabilidades">
                            <IconeHtml className="IconeIcon" />
                            <p>HTML</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeCSS className="IconeIcon" />
                            <p>CSS</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeJS  className="IconeIcon"/>
                            <p>JS</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeReact className="IconeIcon" />
                            <p>React</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeReact className="IconeIcon" />
                            <p>React <br/> Native</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeGit className="IconeIcon" />
                            <p>Git</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeJava className="IconeIcon" />
                            <p>Java</p>
                        </div>
                        <div className="IconeHabilidades">
                            <IconeFigma className="IconeIcon" />
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="DireitaSobre">
                
            </div>
        </div>
    )
}