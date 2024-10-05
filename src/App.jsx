import '../public/styles/app-styles.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import Nav from "../public/components/Nav";
import Home from "../public/pages/Home";
import About from "../public/pages/About";
import DayOne from "../public/pages/DayOne";
import DayTwo from "../public/pages/DayTwo";
import DayThree from "../public/pages/DayThree";
import DayFour from "../public/pages/DayFour";
import DayFive from "../public/pages/DayFive";
import DaySix from "../public/pages/DaySix";
import DaySeven from "../public/pages/DaySeven";

// Definir las rutas de la aplicación
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>  {/* Usamos Layout para envolver rutas y navegación */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dayone" element={<DayOne />} />
      <Route path="daytwo" element={<DayTwo />} />
      <Route path="daythree" element={<DayThree />} />
      <Route path="dayfour" element={<DayFour />} />
      <Route path="dayfive" element={<DayFive />} />
      <Route path="daysix" element={<DaySix />} />
      <Route path="dayseven" element={<DaySeven />} />
    </Route>
  )
);

// Creación del layout principal para envolver las rutas
function Layout() {
  return (
    <>
      <Nav />  {/* Colocamos Nav dentro del contexto de RouterProvider */}
      <Outlet />  {/* Aquí se renderizan las páginas que coincidan con las rutas */}
    </>
  );
}

function App() {
  return (
    <div className='contenedor-principal'>
      <RouterProvider router={router} />  {/* El RouterProvider envuelve todo el layout */}
    </div>
  );
}

export default App;
