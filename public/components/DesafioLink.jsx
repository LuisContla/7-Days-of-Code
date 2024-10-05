import { Link } from "react-router-dom";

const DesafioLink = (props) => {

    const { target, day, nombre, src } = props;

    return (
      <>
        <Link className="contenedor-desafio-link" to={target} >
            <div className="desafio-dia">Día {day}</div>
            <div className="desafio-icono"><img className="desafio-icono-img" src={src} alt={src} /></div>
            <div className="desafio-nombre">{nombre}</div>
        </Link>
      </>
    )
  }
  
  export default DesafioLink