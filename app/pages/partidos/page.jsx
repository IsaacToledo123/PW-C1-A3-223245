import React from "react";
import Style from "../../styles/partidos.css";
import Equipos from "../../components/equipo";
import BotonPartidos from '../../components/botonPartidos'
import Horario from '../../components/listaHorarios'
const page = () => {
  return (
    <div>
      <div class="noticias">
        <h1 class="tituloNoticia">Horarios De Partidos</h1>
        <br />
        <Horario></Horario>
        <br />
        <h1 class="tituloNoticia">Partidos de hoy</h1>
        <h2 class="tituloNoticiah2">lunes 18 de septiembre de 2023</h2>
        <div class="pad">
        <h1 class="tituloNoticia1">La Liga</h1>
          <div class="contenido1">
            
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>

     
          </div>
          <h1 class="tituloNoticia1">La Liga</h1>
          <div class="contenido1">
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>

          </div>
          <h1 class="tituloNoticia1">La Liga</h1>
          <div class="contenido1">
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>
          <BotonPartidos></BotonPartidos>

          </div>
        </div>
        <Equipos></Equipos>
      </div>
    </div>
  );
};

export default page;
