import Image from "next/image";
import Hijo1 from "../img/mas1.png";
import Hijo2 from "../img/Captura de pantalla 2023-09-17 005943.png";
import Hijo3 from "../img/mas3.png";
import Hijo4 from "../img/mas4.png";
import PiePagina from './piePagina'

const notas4 = () => {
  return (
    <div>
      <div class="masNoticias">
        <div class="hijo">
          <Image src={Hijo1} class="masImg" />
          <p>
            Tres jugadores de la cantera del Real Madrid fueron detenidos por
            difusión de video sexual
          </p>
          <div >
            <PiePagina></PiePagina>
           
          </div>
        </div>
        <div class="hijo">
          <Image src={Hijo2} class="masImg" />
          <p>
            Tres jugadores de la cantera del Real Madrid fueron detenidos por
            difusión de video sexual
          </p>
          <div >
            
          <PiePagina></PiePagina>
          </div>
        </div>
        <div class="hijo">
          <Image src={Hijo3} class="masImg" />
          <p>
            Tres jugadores de la cantera del Real Madrid fueron detenidos por
            difusión de video sexual
          </p>
          <div >
          <PiePagina></PiePagina>
           
          </div>
        </div>
        <div class="hijo">
          <Image src={Hijo4} class="masImg" />
          <p>
            Tres jugadores de la cantera del Real Madrid fueron detenidos por
            difusión de video sexual
          </p>
          <div >
          <PiePagina></PiePagina>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default notas4;
