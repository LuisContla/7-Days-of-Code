import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DaySix() {

    return (
        <>
            <DayHeader num="6" name="Remoción de Arrays" icon="RemoveIcon" />
            <div className="day-contenido">
                <p>
                    ¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras?
                    ¡Hoy tu desafío es hacerlo aún más interesante!
                </p> <br />
                <p> 
                    Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de
                    compras. Otra operación muy común es la eliminación de elementos de la lista, y por eso
                    es muy importante que sepas cómo hacerlo. Pensándolo bien, existen muchas maneras de eliminar
                    un elemento de una lista. Puedes eliminar el primer elemento, el último, o cualquier otro
                    del medio de la lista. Cada una de estas operaciones tiene su propio método en la documentación
                    de arrays de Javascript. Deberás crear la opción de eliminar algún elemento de la lista,
                    que se mostrará junto con la pregunta: “¿deseas añadir un alimento a la lista de compras?”.
                </p><br />
                <p>   
                    A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos
                    presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.
                    Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación
                    de que el elemento realmente ya no está allí.
                </p><br />    
                <p> Finalmente, el programa volverá al ciclo inicial de preguntas. Si, al intentar eliminar el
                    elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.
                    Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”. Recuerda que la opción de
                    eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos
                    un elemento en la lista de compras.
                </p><br />
                <SolucionTitle />
            </div>
        </>
    )
}

export default DaySix