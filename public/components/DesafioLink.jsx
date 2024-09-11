const DesafioLink = (props) => {

    const { day, nombre, src } = props;

    return (
      <>
        <div className="contenedor-desafio-link">
            <div className="desafio-dia">Día {day}</div>
            <div className="desafio-icono"><img className="desafio-icono-img" src={src} alt={src} /></div>
            <div className="desafio-nombre">{nombre}</div>
        </div>
      </>
    )
  }
  
  export default DesafioLink