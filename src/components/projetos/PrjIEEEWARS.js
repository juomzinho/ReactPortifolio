import React from 'react'
import LogoIW from '../../images/logoieeeWars.png'
import {ReactComponent as LogoReact} from '../../icons/react-brands.svg'
import {ReactComponent as LogoJs} from '../../icons/js-square-brands.svg'
import {ReactComponent as LogoGit} from '../../icons/git-alt-brands.svg'
import {ReactComponent as LogoBD} from '../../icons/MySql-brands.svg'
import ImgIW from '../../images/miniIeeeWars.png'
import '../ProjetosRow.css'

export default function PrjIEEEWARS (){
    return(
        <div className="corpoIW">
            <div className="Esquerda"><div className="header">
                <img className="LogoPrj" src={LogoIW} alt="Logo"/>
                <h3>IEEEWARS</h3>
            </div>
            <div className="Sobre">
                <h2>Sobre</h2>
                <p>O aplicativo IEEEWars faz parte de um projeto do Ramo Estudantil IEEE da UEL, a finalidade desse projeto é desenvolver um jogo de gamificação que tenha relação com a pontuação de cada membro baseada em suas atividades realizadas dentro do ramo, nesse projeto faço parte do desenvolvimento do front-end. 
                </p>
            </div>
            <div className="Skills">
                <h2>Ferramentas Utilizadas</h2>
                <div className="Icons">
                    <div className="miniIcon">
                        <LogoReact fill="white" className="LogoSkills"/>
                        <p>React Native</p>
                    </div>
                    <div className="miniIcon">
                        <LogoJs fill="white" className="LogoSkills"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="miniIcon">
                        <LogoGit fill="white" className="LogoSkills"/>
                        <p>Git</p>
                    </div>
                    <div className="miniIcon">
                        <LogoBD fill="white" className="LogoSkills"/>
                        <p>MySql</p>
                    </div>
                </div>
            </div></div>
            <div className="Direita">
                <img src={ImgIW} className="imagemGrande" alt="Imagem Exemplo"/>
                <div className="botoes">
                    <a href="https://www.figma.com/proto/cAqAIJ5VoeB7C9Lk4C6Dzs/oi-(Copy)" rel="noreferrer" target="_blank"><button className="Btn">Ver Protótipo</button></a>
                    <a href="https://github.com/juomzinho/IEEE-Wars" rel="noreferrer" target="_blank"><button className="Btn">Ver no Github</button></a>
                </div>
            </div>
            </div>
    )
}