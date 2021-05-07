import React, {useRef, useEffect} from 'react'
import './App.css'
import Projeto from './components/ProjetosRow'
import Sobre from './components/Sobre'
import Home from './components/Home'
import janelaTamanho from './hooks/TamanhoJanela'
import Navbar from './components/navbar/index'
import Rodape from './components/Rodape'

export default function App (){


  const tamanho = janelaTamanho()

  const CarrosselHome = [<Home id="homeApp"/>,  <Sobre id="sobreApp"/>, <Projeto id="projetosApp"/>, <Rodape />] 
  const app = useRef()
  const RolagemContainer = useRef()
  const EfeitoConfigs = {ease: 0.1, current: 0, previous: 0, rounded: 0}
  
  useEffect(() => {
    setBodyHeight();
  }, [tamanho.altura]);

  const setBodyHeight = () =>{
    document.body.style.height = `${RolagemContainer.current.getBoundingClientRect().height}px`
  }

  useEffect(() => {
    requestAnimationFrame(() => RolagemEfeito())
    // eslint-disable-next-line
  }, [])

  const RolagemEfeito = () =>{ 
    EfeitoConfigs.current = window.scrollY;
    EfeitoConfigs.previous += (EfeitoConfigs.current - EfeitoConfigs.previous) * EfeitoConfigs.ease;
    EfeitoConfigs.rounded = Math.round(EfeitoConfigs.previous * 100) /100;

    const diferenca = EfeitoConfigs.current - EfeitoConfigs.rounded
    const aceleracao = diferenca / tamanho.largura
    const velocidade = +aceleracao
    const efeito = velocidade * 2.5

    RolagemContainer.current.style.transform = `translate3d(0, -${EfeitoConfigs.rounded}px, 0) skewY(${efeito}deg)`;    
    
      requestAnimationFrame(() => RolagemEfeito())
  }

  return(
    <div ref={app} className="App">
      <Navbar className="NavHome"/>
      <div ref={RolagemContainer} >
          {CarrosselHome.map((item,index)=>{
                return(
                    <div key={index} >
                        {item}
                    </div>
                )
            })}
      </div>
    </div>
  )
}