import React, { Component } from 'react'
import { Link } from "react-scroll";
import './navbar.css'

class Navbar extends Component{

    state = {clicado: false}

    Toque = () => {
        this.setState({clicado: !this.state.clicado})
    }

    render() {
        return(
            <div className="NavbarItens">

                <div className="Menu" onClick={this.Toque}>
                    <span className={this.state.clicado ? 'hamburguer Selecionado' : 'hamburguer'}></span>
                </div>

                <ul className={this.state.clicado ? 'menu ativo' : 'menu remove'}>
                    <li><Link activeClass="active" to="homeApp" spy={true} smooth={true}
                        duration={500} onClick={this.Toque}>
                        Inicio
                    </Link></li>
                    <li><Link activeClass="active" to="sobreApp" spy={true} smooth={true}
                         duration={500} onClick={this.Toque}>
                        Sobre
                    </Link></li>
                    <li><Link activeClass="active" to="projetosApp" spy={true} smooth={true}
                         duration={500} onClick={this.Toque}>
                        Portofólio
                    </Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar