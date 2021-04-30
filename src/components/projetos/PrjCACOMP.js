import React from 'react'
import LogoCACOMP from '../../images/logocacomp.png'
import {ReactComponent as LogoHTML} from '../../icons/html5-brands.svg'
import {ReactComponent as LogoCSS} from '../../icons/css3-alt-brands.svg'
import {ReactComponent as LogoPHP} from '../../icons/php-brands.svg'
import {ReactComponent as LogoJs} from '../../icons/js-square-brands.svg'
import {ReactComponent as LogoBD} from '../../icons/database-solid.svg'
import ImgCACOMP from '../../images/miniCacomp.png'
import '../ProjetosRow.css'

export default function PrjCACOMP (){
    return(
        <div className="corpoCacomp">
            <div className="Esquerda">
            <div className="header">
                <img className="LogoPrj" src={LogoCACOMP} alt="Logo"/>
                <h3>SITE CACOMP</h3>
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
                    <p>JS</p>
                </div>
                <div className="miniIcon">
                    <LogoPHP fill="white" className="LogoSkills"/>
                    <p>PHP</p>
                </div>
                <div className="miniIcon">
                    <LogoBD fill="white" className="LogoSkills"/>
                    <p>Database</p>
                </div>
            </div>
            </div></div>
            <div className="Direita">
            <img src={ImgCACOMP} className="imagemGrande" alt="Imagem Exemplo"/>
            <div className="botoes">
                     <a href="http://www.uel.br/centroacademico/cacomp/index.html" target="blank"><button className="Btn">Acessar Site</button></a>
                    <a href="" target="blank"><button className="Btn">Ver no Github</button></a>
            </div>
            </div>
            </div>
    )
}