import React from 'react'
import './App.css'
import Projeto from './components/ProjetosRow'
import Sobre from './components/Sobre'
import Home from './components/Home'

export default function App (){
  return(
    <div>
      <Home/>
      <Sobre />
      <Projeto />
    </div>
  )
}