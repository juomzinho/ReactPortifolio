import React from 'react'
import './style.css'
import ImgBanner from '../images/background.png'

export default function Home (){
    return(
        <div className="Corpo">
            <div className="ImgClass">
                <img src={ImgBanner} alt="Banner" className="Banner"/>
            </div>
        </div>
    )
}