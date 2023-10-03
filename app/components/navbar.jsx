import React from "react";
import Css from "../styles/nav.css";
import Logo from "../img/logo.png";
import Liga from "../img/premierLogo.png";
import Escudo from "../img/barca.png";
import Image from "next/image";
import Espaciado from "./espaciado";
import Escudo1 from "../img/escudo1.png"
import Escudo2 from "../img/escudo2.png"
import Escudo3 from "../img/escudo3.png"
import Liga1 from '../img/EscudoLiga.png'
import Liga2 from '../img/escudoLiga1.png'
import Liga3 from '../img/escudoLiga2.png'
import Liga4 from '../img/escudoLiga3.png'
const navbar = () => {
  return (
    <div>
      <nav>
        <ul class="menu-horizontal">
          <a href="/pages/inicio">
            {" "}
            <Image src={Logo} />
          </a>

          <li>
            <a href="/pages/partidos">Partidos</a>
          </li>
          <li>
            <a href="">Equipos</a>
            <div class="menu-vertical">
              <h2 class="tituloEquipos"> Equipos mas seguidos de tu pais</h2>
              <div class="encapsulado">
                <div>
                    
                </div>
                <div class="contenedor">
                  <ul>
                    <li>
                      <Image class="escudo" src={Escudo}></Image>
                      <a href="/pages/equipos">Barcelona</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo1}></Image>
                      <a href="">Real Madrid</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo2}></Image>
                      <a href="">Pumas</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo3}></Image>
                      <a href="">America</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image class="escudo" src={Escudo2}></Image>
                      <a href="">Barcelona</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo3}></Image>
                      <a href="">Real Madrid</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo1}></Image>
                      <a href="">Pumas</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo}></Image>
                      <a href="">America</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image class="escudo" src={Escudo1}></Image>
                      <a href="">Barcelona</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo2}></Image>
                      <a href="">Real Madrid</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo3}></Image>
                      <a href="">Pumas</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Escudo}></Image>
                      <a href="">America</a>
                    </li>
                  </ul>
                </div>

                <div class="direct">
                  <h2 class="tituloEquipos1">Directorio</h2>
                 <p class="directorio">Todos los quipos</p>
                </div>

              </div>
            </div>
          </li>

          <li>
            <a href="">Competiciones</a>

            <div class="menu-vertical">
            <h2 class="tituloEquipos"> Competiciones populares</h2>
              <div class="encapsulado">
                <div>
                    
                </div>
                <div class="contenedor">
                  <ul>
                    <li>
                      <Image class="escudo" src={Liga}></Image>
                      <a href="/pages/equipos">Barcelona</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga1}></Image>
                      <a href="">Real Madrid</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga2}></Image>
                      <a href="">Pumas</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga3}></Image>
                      <a href="">America</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image class="escudo" src={Liga4}></Image>
                      <a href="">Barcelona</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga2}></Image>
                      <a href="">Real Madrid</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga3}></Image>
                      <a href="">Pumas</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga}></Image>
                      <a href="">America</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image class="escudo" src={Liga1}></Image>
                      <a href="">Barcelona</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga2}></Image>
                      <a href="">Real Madrid</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga4}></Image>
                      <a href="">Pumas</a>
                    </li>
                    <li>
                      <Image class="escudo" src={Liga3}></Image>
                      <a href="">America</a>
                    </li>
                  </ul>
                </div>

                <div class="direct">
                  <h2 class="tituloEquipos1">Directorio</h2>
                 <p class="directorio">Todos las ligas</p>
                </div>

              </div>
            </div>
          </li>
          <li>
            <a href="">Tv</a>
          </li>
        </ul>
        <div class="imagenes"></div>
      </nav>
      <Espaciado></Espaciado>
    </div>
  );
};

export default navbar;
