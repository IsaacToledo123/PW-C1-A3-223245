import Image from "next/image";
import Hijo1 from "../img/hijo1.png";

import Style from "../styles/dosModificado.css";
import NoticiaVertical from "./noticiaVeertical";
import NoticiaHorizontal from "./noticiaHorizontal";

const dosModificado = () => {
  return (
    <div>
      <div class="dosNoticias">
        <div >
        <NoticiaVertical></NoticiaVertical>
       
         
        </div>
        <div >
        <NoticiaHorizontal></NoticiaHorizontal>
        </div>
      </div>
    </div>
  );
};

export default dosModificado;
