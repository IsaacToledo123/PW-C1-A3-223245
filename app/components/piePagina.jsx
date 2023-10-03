import Style from "../styles/inicio.css";
import Guardar from "../svg/icon.svg";


const piePagina = () => {
  return (
    <div class="autor">
      <p class='origen'>La Media Titular</p>
            <p class="hora">hace 5 horas</p>
            <div class="guardar">
            <Guardar></Guardar>
            </div>
    </div>
  )
}

export default piePagina
