import React from 'react'
import LogoLobio from '../../images/lobiologo.png'
import {ReactComponent as LogoHTML} from '../../icons/html5-brands.svg'
import {ReactComponent as LogoCSS} from '../../icons/css3-alt-brands.svg'
import {ReactComponent as LogoJs} from '../../icons/js-square-brands.svg'
import {ReactComponent as LogoGit} from '../../icons/git-alt-brands.svg'
import {ReactComponent as LogoBD} from '../../icons/database-solid.svg'
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
                <p>
                Que o caminho da cura pode ser a doença
                Que o caminho do perdão às vezes é a sentença
                Desavença, treta e falsa união
                A ambição é como um véu que cega os irmãos
                Que nem um carro guiado na estrada da vida
                Sem farol no deserto das trevas perdidas.
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
                        <p>Database</p>
                    </div>
                </div>
            </div></div>
            <div className="Direita">
                <img src={ImgLobio} className="imagemGrande" alt="Imagem Exemplo"/>
                <div className="botoes">
                <button className="Btn">Acessar Site</button>
                    <button className="Btn">Ver no GitHub</button>
                </div>
            </div>
            </div>
    )
}