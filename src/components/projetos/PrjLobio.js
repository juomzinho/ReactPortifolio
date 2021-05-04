import React from 'react'
import LogoLobio from '../../images/lobiologo.png'
import {ReactComponent as LogoHTML} from '../../icons/html5-brands.svg'
import {ReactComponent as LogoCSS} from '../../icons/css3-alt-brands.svg'
import {ReactComponent as LogoJs} from '../../icons/js-square-brands.svg'
import {ReactComponent as LogoGit} from '../../icons/git-alt-brands.svg'
import {ReactComponent as LogoBD} from '../../icons/MySql-brands.svg'
import ImgLobio from '../../images/miniLobio.png'
import '../ProjetosRow.css'

export default function PrjLobio (){
    return(
        <div className="corpoLobio">
            <div className="Esquerda"><div className="header">
                <img className="LogoPrj" src={LogoLobio} alt="Logo"/>
                <h3>SITE LOBIO</h3>
            </div>
            <div className="Sobre">
                <h2>Sobre</h2>
                <p>Esse projeto tem como finalidade desenvolver um site institucional para o Lobio UEL, inicialmente foi planejado para conter informações sobre o laboratório além de divulgar pesquisas e projetos realizados por seus colaboradores. Ainda em desenvolvimento existem novas funcionalidades sendo implementadas no projeto. 
                </p>
            </div>
            <div className="Skills">
                <h2>Ferramentas Utilizadas</h2>
                <div className="Icons">
                    <div className="miniIcon">
                        <LogoHTML fill="white" className="LogoSkills"/>
                        <p>HTML</p>
                    </div>
                    <div className="miniIcon">
                        <LogoCSS fill="white" className="LogoSkills"/>
                        <p>CSS</p>
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
                <img src={ImgLobio} className="imagemGrande" alt="Imagem Exemplo"/>
                <div className="botoes">
                    <a href="http://www.lobio.com.br" rel="noreferrer" target="_blank"><button className="Btn">Acessar Site</button></a>
                    <a href="https://github.com/juomzinho/Site-Lobio" rel="noreferrer" target="_blank"><button className="Btn">Ver no Github</button></a>
                </div>
            </div>
            </div>
    )
}