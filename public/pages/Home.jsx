import Logo from "../images/LogoFull.png";
import DesafioLink from "../components/DesafioLink";

function Home() {

  return (
    <>
      <div className="logo-presentacion-contenedor">
        <img src={Logo} alt="Logo" className='logo-presentacion-img' />
      </div>
      <div className="descripcion">
        <p>Durante 7 días, me propuse un reto personal de completar el "7 Days of Code" creado por Jose González,
          Instructor Front-End en Alura, para mejorar mis habilidades en lógica de programación. Cada día, me
          enfrenté a un nuevo desafío que me ayudó a afinar mi pensamiento lógico y a profundizar en conceptos
          clave de la programación. Estos desafíos fueron una excelente oportunidad para dedicar tiempo a mi
          crecimiento profesional y para desarrollar un proyecto que ahora forma parte de mi portafolio. A
          continuación dejo los accesos a cada uno de los desafíos:</p>
      </div>
      <div className="desafios">
        <div className="desafio-link">
          <DesafioLink target ="dayone" day="1" nombre="Operaciones Booleanas" src="../images/icons/Light/CodeIcon.png" />
          <DesafioLink target ="daytwo" day="2" nombre="Variables" src="../images/icons/Light/VariableIcon.png" />
          <DesafioLink target ="daythree" day="3" nombre="Estructuras de Control de Flujo" src="../images/icons/Light/DataObjectIcon.png" />
          <DesafioLink target ="dayfour" day="4" nombre="Loops y Randomización" src="../images/icons/Light/LoopIcon.png" />
          <DesafioLink target ="dayfive" day="5" nombre="Arrays y Colecciones" src="../images/icons/Light/DataArrayIcon.png" />
          <DesafioLink target ="daysix" day="6" nombre="Remoción de Arrays" src="../images/icons/Light/RemoveIcon.png" />
          <DesafioLink target ="dayseven" day="7" nombre="Funciones en JavaScript" src="../images/icons/Light/FunctionIcon.png" />
        </div>
      </div>
    </>
  )
}

export default Home
