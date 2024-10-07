import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DayTwo() {

    return (
        <>
            <DayHeader num="2" name="Variables" icon="VariableIcon" />
            <div className="day-contenido">

                <p>
                    ¿Sabes cuando te registras en un site y, justo después, al iniciar sesión, te llama por tu
                    nombre? Eso es lo que harás en el desafío de hoy. Cuando creas un sistema, site o aplicación,
                    es común querer agregar algunos toques personalizados para hacer la experiencia en tu aplicación
                    más rica y dinámica. Hacer esto mediante programación puede no ser una tarea fácil. Dependiendo
                    del nivel de personalización que quieras implementar, la cantidad de código que necesitarás
                    escribir puede ser inmensa.
                </p><br />
                <p>
                    Pero, por supuesto, puedes comenzar de una manera más sencilla. Para ello, lo importante es
                    entender cómo capturar y almacenar valores dentro de variables. ¡Y en eso te voy a ayudar hoy!
                    Las variables son los bloques básicos de construcción de cualquier sistema y son esenciales
                    para procesar cualquier tipo de información, ya sea de una persona que ha iniciado sesión en
                    el sistema o incluso para mostrar detalles de productos en un catálogo de comercio electrónico.
                    Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones.
                    Debe pedir al usuario responder 3 preguntas:
                </p>
                <CodeBox src="Day2.1.png" />
                <p>
                    A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada
                    una de ellas. Al final, el sistema mostrará el mensaje siguiente. (Observa que cada información
                    entre [ ] es una de las respuestas dadas por la persona.)
                </p>
                <CodeBox src="Day2.2.png" />
                
                <SolucionTitle />
            </div>
        </>
    )
}

export default DayTwo