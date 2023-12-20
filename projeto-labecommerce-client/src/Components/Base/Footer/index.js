import React from 'react';
import {useState} from'react'
import {FooterCtn, IconsList, IconsAnchor, Footer1 } from './styled'

export function Footer(){

return(
    <div>
    <FooterCtn>
    <div>


        <img src="assets/images/icons/icon-api-02.png" alt="placeholder padrap" className="footerImg01"/>


        <h2>Productos</h2>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>


    </div>
    <div>
    

        <img src="assets/images/icons/icon-api-02.png" alt="placeholder padrap" className="footerImg01"/>


        <h2>Productos</h2>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>


    </div>  
    <div>


        <img src="assets/images/icons/icon-api-02.png" alt="placeholder padrap" className="footerImg01"/>


        <h2>Productos</h2>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>

    
    </div>
<div>
      <p className="copy__footer">&copy Feito por <a href="http://github.com/botechia-erika">@botechia-erika</a></p>
    </div>
    </FooterCtn>
    </div>
)
}

