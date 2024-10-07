import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DayOne() {

    return (
        <>
            <DayHeader num="1" name="Operaciones Booleanas" icon="CodeIcon" />
            <div className="day-contenido">

                <p>
                    Este primer día es muy importante. Al final de él, tendrás un nuevo conocimiento que es esencial
                    para los próximos desafíos. Existe una situación muy común para quienes usan Javascript: problemas
                    con los tipos de variables al comparar los valores de dos variables entre sí. ¡A mí me ha pasado
                    mucho! En lenguajes de programación compilados, como Java y C#, este problema se detecta en tiempo
                    de compilación, y tienes un aviso claro del error mientras desarrollas el código.
                </p><br />
                <p>
                    En JavaScript, estos errores pasan desapercibidos, ya que el código no pasa por un compilador. Es
                    decir, los errores solo aparecen en tiempo de ejecución. La parte más confusa para quienes están
                    comenzando a aprender lógica con JavaScript es la operación de igualdad entre valores. Dependiendo
                    de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera
                    implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc. Esto
                    causa algunos comportamientos extraños, como todos estos ejemplos a continuación que retornan true:
                </p>
                <CodeBox src="Day1.1.png" />
                <p>
                    Lo cual no tiene necesariamente mucho sentido. Por lo tanto, tu tarea de hoy es reescribir el código
                    a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:
                </p>
                <CodeBox src="Day1.2.png" />

                <SolucionTitle />
            </div>
        </>
    )
}

export default DayOne