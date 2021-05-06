import React,{useState} from 'react'
import IeeeWars from './projetos/PrjIEEEWARS'
import Cacomp from './projetos/PrjCACOMP'
import Lobio from './projetos/PrjLobio'
import SetaDir from '../icons/chevron-right-solid.svg'
import SetaEsq from '../icons/chevron-left-solid.svg'
import './ProjetosRow.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjetosRow({id}){

    let carrosel = [<Cacomp/>, <IeeeWars/>, <Lobio/> ]
    const [x, setX] = useState(0)
    const vaiParaEsquerda = ()=>{
        x === 0 ? setX(-100* (carrosel.length-1)) : setX(x + 100)
    }
    const vaiParaDireita = ()=>{
        console.log(x)
        x === -100* (carrosel.length-1) ? setX(0) : setX(x - 100)
    }
    const SlideAtivo = () => {
        if(x === 0){
            return(
                <div className="Barras">
                    <div className="BarraSlide Active"></div>
                    <div className="BarraSlide"></div>
                    <div className="BarraSlide"></div>
                </div>
            )
        }else if(x === -100){
            return(
                <div className="Barras">
                    <div className="BarraSlide"></div>
                    <div className="BarraSlide Active"></div>
                    <div className="BarraSlide"></div>
                </div>
            )
        }else{
            return(
                <div className="Barras">
                    <div className="BarraSlide"></div>
                    <div className="BarraSlide"></div>
                    <div className="BarraSlide Active"></div>
                </div>
            )
        }
    }
    return(
        <div className="Carousel" id={id}>
            {carrosel.map((item,index)=>{
                return(
                    <div key={index} className="slides" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="BtnEsq" className="BtnCarrosel" onClick={vaiParaEsquerda}>
                <img src={SetaEsq} alt="Seta svg" className="BtnIcon"/>
            </button>
            <button id="BtnDir" className="BtnCarrosel" onClick={vaiParaDireita}>
                <img src={SetaDir} alt="Seta svg" className="BtnIcon"/>
            </button>
            <div >
                {SlideAtivo()}
            </div>
        </div>
    )
}