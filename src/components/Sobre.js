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
import {ReactComponent as IconePs} from '../icons/ps-brands.svg'
import {ReactComponent as IconeMySql} from '../icons/MySql-brands.svg'
import {ReactComponent as IconeBootstrap} from '../icons/bootstrap-brands.svg'


export default function Sobre ({id}){
    return(
        <div className="corpoSobre" id={id}>
            <div className="EsquerdaSobre">
                <div className="boxPessoal">
                    <img src={ImgEu} className="ImagemEu" alt="Joao Paulo"/>
                    <div className="InfosPessoais">
                        <h3>JOÃO PAULO CARDOSO </h3>
                        <h5>21 anos // Programador // Estudante</h5>
                        <div className="Redes">
                            <a href="mailto:joao.paulo@uel.br" ><button className="BtnIcon"><IconEmail className="IconeBotao" /> </button></a>
                            <a href="https://github.com/juomzinho/" rel="noreferrer" target="_blank"><button className="BtnIcon"> <GitIcon className="IconeBotao" /> </button></a>
                            <a href="https://www.linkedin.com/in/joão-paulo-cardoso-997340185/" rel="noreferrer" target="_blank"><button className="BtnIcon"> <IconLKIN className="IconeBotao" /> </button></a>
                        </div>
                    </div>
                </div>
                <div className="Habilidades">
                    <h2>Habilidades</h2>
                    <div className="IconesHabilidades">
                        <div className="IconeHabilidade">
                            <IconeHtml className="IconeIcon" />
                            <p>HTML</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeCSS className="IconeIcon" />
                            <p>CSS</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeJS  className="IconeIcon"/>
                            <p>JS</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeReact className="IconeIcon" />
                            <p>React</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeReact className="IconeIcon" />
                            <p>React <br/> Native</p>
                        </div>
                        <div className="IconeHabilidade" >
                            <IconeBootstrap className="IconeIcon" fill="white" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeGit className="IconeIcon" />
                            <p>Git</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeJava className="IconeIcon" />
                            <p>Java</p>
                        </div>
                        <div className="IconeHabilidade" >
                            <IconeMySql className="IconeIcon" fill="white" />
                            <p>MySql</p>
                        </div>
                        <div className="IconeHabilidade">
                            <IconeFigma className="IconeIcon" />
                            <p>Figma</p>
                        </div>
                        <div className="IconeHabilidade" >
                            <IconePs className="IconeIcon" fill="white" />
                            <p>Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="DireitaSobre">
                <div className="Categoria">
                    <h3>Formação</h3>
                    <div className="Barra" />
                    <div className="Informacao">
                        <h5>Ciência da Computação - UEL</h5>
                        <p>Discente, 2º Ano</p>
                    </div>
                </div>
                <div className="Categoria">
                    <h3>Experiência</h3>
                    <div className="Barra" />
                    <div className="Informacao">
                        <h5>Membro Voluntário - Ramo Estudantil IEEE UEL</h5>
                        <p>Periodo em atividade: 2019 - atualmente.</p>
                    </div>
                    <div className="Informacao">
                        <h5>Diretor de Marketing - CACOMP UEL</h5>
                        <p>Periodo em atividade: 2019.</p>
                    </div>
                    <div className="Informacao">
                        <h5>Web moderno completo com javascript - udemy</h5>
                        <p>conteúdo do curso: html, css, javascript, react, vue.js, banco de dados (relacionais e não relacionais).</p>
                    </div>
                    <div className="Informacao">
                        <h5>web design - udemy</h5>
                        <p>conteúdo do curso: html, css, javascript, php.</p>
                    </div>
                    <div className="Informacao">
                        <h5>latinoware 2018</h5>
                        <p>Congresso de software livre e tecnologia aberta.</p>
                    </div>
                    <div className="Informacao">
                        <h5>Compdays 2018</h5>
                        <p>Evento com foco no desenvolvimento e aprofundamento dos participantes nos tópicos e atividades de Ciência da Computação.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}