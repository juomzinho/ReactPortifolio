import React from 'react'
import './style.css'
import ImgBanner from '../images/background.png'
import ImgBannerMB from '../images/background-mb.png'
import SetaBaixo from '../icons/chevron-down-solid.svg'

export default function Home (){

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
        <div className="Corpo">
            <div className="ImgClass">
                {ImagemFundo()}
            </div>
            <div className="BtnDescer" ><img src={SetaBaixo} alt="" />
            </div>
        </div>
    )
}