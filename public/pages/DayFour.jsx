import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DayFour() {

    return (
        <>
            <DayHeader num="4" name="Loops y Randomización" icon="LoopIcon" />
            <div className="day-contenido">
                <p>
                    ¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando?
                    Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la
                    propia computadora!
                </p><br />
                <p>
                    Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y
                    10 para el número que vas a adivinar (por ejemplo, el 7). A continuación, el programa te
                    preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas,
                    te dará 2 intentos más. Al final, si no aciertas en ninguno de los intentos, imprimirá cuál
                    era el número inicial.
                </p><br />
                <p>
                    Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno
                    predefinido.
                </p><br />
                <SolucionTitle />
            </div>
        </>
    )
}

export default DayFour