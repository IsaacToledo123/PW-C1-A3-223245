import React from "react";
import Image from "next/image";
import Logo from "../img/barca.png";
import Logo1 from "../img/Escudo2.png";
import Logo2 from "../img/Escudo3.png";
import Logo3 from "../img/Escudo1.png";

import Style from "../styles/equip.css";

const equipo = () => {
  return (
    <>
      <div class="content">
        <div class="contenido">
          <h1 class="tituloNoticia">Equipos destacados</h1>
          <div class="center">
          <div class="recuadro">
            <div>
              <Image class="imagen" src={Logo}></Image>
            </div>

            <div class="hora">
              <p>Equipo</p>
              <p>FC Barcelona</p>
            </div>
          </div>
          <div class="recuadro">
            <div>
              <Image class="imagen" src={Logo1}></Image>
            </div>

            <div class="hora">
              <p>Equipo</p>
              <p>FC Barcelona</p>
            </div>
          </div>
          <div class="recuadro">
            <div>
              <Image class="imagen" src={Logo2}></Image>
            </div>

            <div class="hora">
              <p>Equipo</p>
              <p>FC Barcelona</p>
            </div>
          </div>
          <div class="recuadro">
            <div>
              <Image class="imagen" src={Logo3}></Image>
            </div>

            <div class="hora">
              <p>Equipo</p>
              <p>FC Barcelona</p>
            </div>
          </div>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default equipo;
