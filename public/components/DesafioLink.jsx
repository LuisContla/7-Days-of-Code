import { Link } from "react-router-dom";

const DesafioLink = (props) => {

    const { day, nombre, src } = props;
    const target = "/day" + day;

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