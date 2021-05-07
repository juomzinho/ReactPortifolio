import React from 'react'
import './style.css'
import { Link } from "react-scroll";
import ImgBanner from '../images/background.png'
import ImgBannerMB from '../images/background-mb.png'
import SetaBaixo from '../icons/chevron-down-solid.svg'

export default function Home ({id}){

    let larguraDispositivo = window.innerWidth;

    const ImagemFundo = () => {
        if( larguraDispositivo <= 767){
            return(
                 <img src={ImgBannerMB} alt="Banner" className="Banner"/>
            )
        }else{
           return(
            <img src={ImgBanner} alt="Banner" className="Banner"/>
           )
        }
    }

    return(
        <div className="Corpo" id={id}>
            <div className="ImgClass">
                {ImagemFundo()}
            </div>
            <Link activeClass="active" to="sobreApp" spy={true} smooth={true}
                        duration={500}>
                <div className="BtnDescer" >
                        <img src={SetaBaixo} className="BtnIconeSeta" alt="" />
                </div>
            </Link>
            </div>
    )
}