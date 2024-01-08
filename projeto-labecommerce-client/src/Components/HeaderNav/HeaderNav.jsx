import React from 'react';
import { useState } from 'react';
import {  Hero, NavTop , TitlePageText , ContainerHeader} from './styled'


export default function HeaderNav({ modalDisplay, setModalDispay, setPages}){
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
        setTitlePage("Credito")
        
    }
    const showPage3= (pages) =>{
        setPages(3) 
        setTitlePage("Projeto")
        
    }
return(
 <ContainerHeader bgHero={`$(bgHeaderOptions[0].header1)`}>
    <nav>
        <button onClick={showPage1}>
          Produtos
          </button>
        <button onClick={showPage2}>Credito</button>

        <button onClick={showModal}>Carrinho</button>
        <button onClick={showPage3}>Projeto</button>
     </nav>
     <div className='headerTitle'><h1>{titlePage}</h1>
    
 
    </div>
  
          
     </ContainerHeader>

)
}

