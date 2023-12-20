import React from 'react';
import { useState } from 'react';
import {  Hero, NavTop , TitlePageText , NavButton} from './styled'


export function HeaderNav({ modalDisplay, setModalDispay, setPages}){
const [titlePage, setTitlePage] = useState("Bem Vindo")


    const showModal = (modalDisplay) =>{
        setModalDispay(1) 
        
    }
    
    
    const showPage1 = (pages) =>{
        setPages(1) 
        setTitlePage("Produtos")
    }
    
    const showPage2 = (pages) =>{
        setPages(2) 
        setTitlePage("Ofertas")
        
    }
    const showPage3= (pages) =>{
        setPages(3) 
        setTitlePage("Projeto")
        
    }
return(
 <Hero bgHero={`$(bgHeaderOptions[0].header1)`}>
    <NavTop>
        <NavButton onClick={showPage1}>
          Produtos
          </NavButton>
        <NavButton onClick={showPage2}>Ofertas</NavButton>

        <NavButton onClick={showModal}>Carrinho</NavButton>
        <NavButton onClick={showPage3}>Projeto</NavButton>
     </NavTop>
     <TitlePageText><h1>{titlePage}</h1>
    
 
    </TitlePageText>
  
          
     </Hero>

)
}

