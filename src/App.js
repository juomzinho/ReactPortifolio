import React from 'react'
import './App.css'
import Projeto from './components/ProjetosRow'
import Sobre from './components/Sobre'
import Home from './components/Home'
import Rodape from './components/Rodape'

export default function App (){
  return(
    <div className="App">
      <Home/>
      <Sobre />
      <Projeto />
    </div>
  )
}