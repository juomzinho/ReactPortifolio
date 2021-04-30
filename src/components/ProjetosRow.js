import React,{useState} from 'react'
import IeeeWars from './projetos/PrjIEEEWARS'
import Cacomp from './projetos/PrjCACOMP'
import Lobio from './projetos/PrjLobio'
import './ProjetosRow.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjetosRow(){
    let carrosel = [<Cacomp/>, <IeeeWars/>, <Lobio/> ]
    const [x, setX] = useState(0)
    const vaiParaEsquerda = ()=>{
        x === 0 ? setX(-100* (carrosel.length-1)) : setX(x + 100)
    }
    const vaiParaDireita = ()=>{
        console.log(x)
        x === -100* (carrosel.length-1) ? setX(0) : setX(x - 100)
    }
    return(
        <div className="Carousel">
            {carrosel.map((item,index)=>{
                return(
                    <div key={index} className="slides" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="BtnEsq" className="BtnCarrosel" onClick={vaiParaEsquerda}>Esq</button>
            <button id="BtnDir" className="BtnCarrosel" onClick={vaiParaDireita}>Dir</button>
        </div>
    )
}