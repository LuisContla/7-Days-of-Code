const DesafioLink = (props) => {

    const { day, nombre } = props;

    return (
      <>
        <div className="contenedor-desafio-link">
            <div className="desafio-dia">Día {day}</div>
            <div className="desafio-nombre">{nombre}</div>
        </div>
      </>
    )
  }
  
  export default DesafioLink