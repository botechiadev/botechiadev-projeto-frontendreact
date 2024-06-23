import './App.css';
import logo from './assets/logo.png'
import { FaSearch } from "react-icons/fa";
function App() {
  const nome="Bananinha"

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
        <header>
            <h1>LabeTube</h1>
            <span>
              <input type="text" placeholder="Busca" id="campoDeBusca"/>
              <button onclick={onClickBotao}><FaSearch /></button>
            </span>
        </header>

        <main>
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

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>Título do vídeo</h4>
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
