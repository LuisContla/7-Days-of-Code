import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DayThree() {

    return (
        <>
            <DayHeader num="3" name="Estructuras de Control de Flujo" icon="DataObjectIcon" />
            <div className="day-contenido">

                <p>
                    ¿Alguna vez has jugado un juego que te dé más de una opción y, dependiendo de lo que elijas,
                    el destino del personaje sea completamente diferente?
                </p><br />
                <p>
                    Hoy vas a desarrollar un ejemplo así con Javascript. Quiero que trabajes con estructuras de
                    control de flujo. Esta forma complicada de decirlo significa que, al igual que en los juegos,
                    la historia que desarrolles debe adaptarse a las respuestas dadas por quien está jugando.
                    Para ello, necesitarás algunas estructuras capaces de alterar el flujo de la aplicación,
                    como for, while, if y else. Todas estas pueden cumplir con este objetivo, dada una cierta
                    condición.
                </p><br />
                <p>
                    El if y el else, que ya te he mostrado en los últimos días, son capaces de crear ramificaciones
                    dentro de la aplicación para que se tome una u otra acción, dependiendo de la condición proporcionada.
                    Los bucles (como for y while) son capaces de transformar una tarea repetitiva en pocas líneas de
                    código, sin importar cuántas veces necesites repetir esa tarea. Tu desafío de hoy es crear los
                    destinos posibles de un juego, en el que el usuario pueda elegir:
                    <br /><li>
                        Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
                    </li><li>
                        Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área
                        de Back-End, podrá aprender C# o aprender Java.
                    </li><li>
                        Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir
                        especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar
                        en pantalla un mensaje específico para cada elección.
                    </li><li>
                        Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí,
                        la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo
                        **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando
                        el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta
                        un mensaje comentando algo sobre la tecnología ingresada.
                    </li>
                </p><br />
                <p>
                    Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender
                    y desarrollarse en el área de programación. Además, también es esencial que, al final del juego,
                    pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
                </p><br />

                <SolucionTitle />
            </div>
        </>
    )
}

export default DayThree