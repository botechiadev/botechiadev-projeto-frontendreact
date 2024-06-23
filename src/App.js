import './App.css';
import logo from './assets/logo.png'
import { FaSearch } from "react-icons/fa";
import Header from './components/Header/Header';
import List from './components/List/List';
import { useState } from 'react';

function App() {
  const [frota, setFrota] =useState([
  {
    id: "DAE-2345",
    modelo: "ONIX",
    marca: "CHEVROLET",
    cor: "PRETO",
    isFlex: true,
    ano: 2019,
    categoria: "CARROS",
    adicionadoPara: "RENTAL",
    imgUrl: "https://i.postimg.cc/7htWLkzZ/752467760276186.jpg",
    preco: 1800
  },
  {
    id: "FDR-4567",
    modelo: "CIVIC",
    marca: "HONDA",
    cor: "BRANCO",
    isFlex: true,
    ano: 2021,
    categoria: "CARROS",
    adicionadoPara: "SALE",
    imgUrl: "https://i.postimg.cc/v8WpSP0k/th-id-OIP-GPJSOFk0-NK99t-Bb0-EId-Hvw-Ha-Fj-w-141-h-106-c-8-rs-1-qlt-90-o-6-dpr-1-3-pid-3.jpg",
    preco: 120000
  },
  {
    id: "JHX-7890",
    modelo: "PALIO",
    marca: "FIAT",
    cor: "VERMELHO",
    isFlex: true,
    ano: 2018,
    categoria: "CARROS",
    adicionadoPara: "RENTAL",
    imgUrl: "https://i.postimg.cc/zv9YfvQQ/fiat-palio.jpg",
    preco: 1600
  },
  {
    id: "KLM-1122",
    modelo: "GOL",
    marca: "VOLKSWAGEN",
    cor: "AZUL",
    isFlex: true,
    ano: 2020,
    categoria: "CARROS",
    adicionadoPara: "RENTAL",
    imgUrl: "https://i.postimg.cc/jd3G5D0T/vw-gol.jpg",
    preco: 2000
  },
  {
    id: "NPR-3344",
    modelo: "SANDERO",
    marca: "RENAULT",
    cor: "PRATA",
    isFlex: true,
    ano: 2017,
    categoria: "CARROS",
    adicionadoPara: "SALE",
    imgUrl: "https://i.postimg.cc/Sxjzj5Bf/renault-sandero.jpg",
    preco: 45000
  },
  {
    id: "QRS-5566",
    modelo: "XRE 300",
    marca: "HONDA",
    cor: "PRETO",
    isFlex: false,
    ano: 2019,
    categoria: "MOTOS",
    adicionadoPara: "RENTAL",
    imgUrl: "https://i.postimg.cc/k4cPz4ZC/honda-xre300.jpg",
    preco: 800
  },
  {
    id: "TUV-7788",
    modelo: "FAZER 250",
    marca: "YAMAHA",
    cor: "VERMELHO",
    isFlex: false,
    ano: 2020,
    categoria: "MOTOS",
    adicionadoPara: "SALE",
    imgUrl: "https://i.postimg.cc/CLzY5LxQ/yamaha-fazer250.jpg",
    preco: 18000
  },
  {
    id: "WXY-9900",
    modelo: "CG 160",
    marca: "HONDA",
    cor: "BRANCO",
    isFlex: false,
    ano: 2018,
    categoria: "MOTOS",
    adicionadoPara: "RENTAL",
    imgUrl: "https://i.postimg.cc/zvqW1ZGV/honda-cg160.jpg",
    preco: 700
  },
  {
    id: "ZAB-1133",
    modelo: "DUKE 390",
    marca: "KTM",
    cor: "LARANJA",
    isFlex: false,
    ano: 2021,
    categoria: "MOTOS",
    adicionadoPara: "SALE",
    imgUrl: "https://i.postimg.cc/nzhPp9Tc/ktm-duke390.jpg",
    preco: 25000
  },
  {
    id: "CDE-2233",
    modelo: "NINJA 400",
    marca: "KAWASAKI",
    cor: "VERDE",
    isFlex: false,
    ano: 2020,
    categoria: "MOTOS",
    adicionadoPara: "RENTAL",
    imgUrl: "https://i.postimg.cc/1zDy1fgc/kawasaki-ninja400.jpg",
    preco: 1500
  }
]
  )

  const [nome, setNome]="Bananinha"

  const olaMundo = ()=>{
    alert("OLÁ MUNDO")
  }

  const onClickBotao = ()=>{
    alert("Botão foi clicado!")
  }

   const reproduzVideo =()=> {
        alert("O vídeo está sendo reproduzido")
    }
  return (
 <div className="tela-inteira">
<Header/>

        <main className='content'>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr>
                    </hr>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className='media4'>
              <div>
                <List frota={frota}/>
            </div>
            </section>
        </main>

        <footer>
          <p> 
            <a href="https://labenu.com.br" target='_blank'>
              <img src={logo} alt="logo Labenu"/>
            </a>
            <br/>
            Made with 🧡 by <a href="https://github.com/botechiaDev" target='_blank'>
            @BotechiaDev 
            </a> LabEstudante
            </p>
        </footer>
    </div>
  );
}

export default App;
