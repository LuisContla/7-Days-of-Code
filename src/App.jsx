import '../public/styles/app-styles.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import Home from "../public/pages/Home";
import About from "../public/pages/About";
import DayOne from "../public/pages/DayOne";
import DayTwo from "../public/pages/DayTwo";
import DayThree from "../public/pages/DayThree";
import DayFour from "../public/pages/DayFour";
import DayFive from "../public/pages/DayFive";
import DaySix from "../public/pages/DaySix";
import DaySeven from "../public/pages/DaySeven";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
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
)

function App({ routes }) {
  return (
    <>
      <div className='contenedor-principal'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App
