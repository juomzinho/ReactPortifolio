import React, {useEffect, useState} from 'react'
import './App.css'
import Projeto from './components/ProjetosRow'

const infos = [
  {titulo: "IEEEWARS", logo: "../assests/images/logoieeeWars.png", ferramentas: ["React Native", "JS", "BD"]},
  {titulo: "SITE CACOMP", ferramentas: ["html","css", "JS", "PHP", "BD"]},
  {titulo: "SITE LOBIO", ferramentas: ["html","css","JS"]}
]
export default () => {
  return(
    <div>
      <Projeto titulo={infos[0].titulo} logo={infos[0].logo} imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGivaJCblJKZKJ0vl_fySbVYG2v0YKNoyPy_gZGkgdngoIsW4GLKmcAMJ63gvmqKxfZ0&usqp=CAU" />
    </div>
  )
}