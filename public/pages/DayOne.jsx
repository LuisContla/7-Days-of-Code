import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DayOne() {

    return (
        <>
            <DayHeader num="1" name="Operaciones Booleanas" icon="CodeIcon" />
            <div className="day-contenido">
                <p>Ese primer día fue muy importante para mí, ya que al finalizarlo adquirí un conocimiento esencial
                    para los desafíos que vinieron después. Me pasó muchas veces al usar JavaScript enfrentar problemas
                    al comparar variables de diferentes tipos. En lenguajes como Java o C#, estos errores se detectan
                    durante la compilación, pero en JavaScript, al no pasar por un compilador, los errores solo se descubren
                    en tiempo de ejecución. Lo más confuso para mí al comenzar con JavaScript fue la igualdad entre valores.
                    JavaScript convierte los tipos de manera automática, lo que afecta variables como Strings, Numbers u
                    Objects, provocando comportamientos extraños. Por ejemplo, estos casos retornan true:
                </p>
                <CodeBox src="Day1.1.png" />
                <p>Lo cual no tiene necesariamente mucho sentido. Por lo tanto, mi tarea de fue reescribir el código a
                    continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:
                </p>
                <CodeBox src="Day1.2.png" />
                <SolucionTitle />
            </div>
        </>
    )
}

export default DayOne