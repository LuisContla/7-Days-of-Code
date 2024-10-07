import CodeBox from "../components/CodeBox";
import DayHeader from "../components/DayHeader";
import SolucionTitle from "../components/SolucionTitle";

function DayFive() {

    return (
        <>
            <DayHeader num="5" name="Arrays y Colecciones" icon="DataArrayIcon" />
            <div className="day-contenido">
                <p>
                    ¿Sabes cuando vas al supermercado con una lista de compras y terminas yendo y volviendo por los
                    mismos pasillos hasta completar la lista? Necesitas una manzana y vas al área de frutas. El
                    siguiente ítem es una leche y te diriges a los lácteos. Pero luego anotaste una pera, y necesitas
                    regresar de nuevo al área de frutas. ¡Después de resolver el desafío de hoy, con certeza no harás
                    más eso!
                </p><br />
                <p>
                    Al igual que nuestra lista de compras, es muy común que los programas trabajen con listas de string,
                    números y objetos. Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos de tu
                    Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. Todos estos sitios
                    utilizan listas para mostrar información de una manera simple y fácil de entender. Además, puedes
                    aprovechar las listas para hacer filtros, ordenaciones y otras funcionalidades muy útiles.
                </p><br />
                <p>
                    Al igual que nuestra lista de compras, es muy común que los programas trabajen con listas de string,
                    números y objetos. Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos de tu
                    Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. Todos estos sitios utilizan
                    listas para mostrar información de una manera simple y fácil de entender. Además, puedes aprovechar
                    las listas para hacer filtros, ordenaciones y otras funcionalidades muy útiles.
                </p><br />
                <p>
                    Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a
                    la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:
                </p>
                <CodeBox src="Day5.1.png" />
                <SolucionTitle />
            </div>
        </>
    )
}

export default DayFive