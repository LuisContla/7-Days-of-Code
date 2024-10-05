import '../styles/nav-styles.css'
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Nav = (props) => {

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <a className="a" href="/">7 Days Of Code</a>
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <i className="fas fa-times" />
                        </label>
                        <li>
                            <a className='a' href='/'>Inicio</a>
                        </li>
                        <li>
                            <a className='a' href="/about">Acerca de</a>
                        </li>
                        <li>
                            <a className='a desktop-item' href="" >
                                Desafíos
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Desafíos
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <a className='a' href="/day1">Día 1</a>
                                </li>
                                <li>
                                    <a className='a' href="/day2">Día 2</a>
                                </li>
                                <li>
                                    <a className='a' href="/day3">Día 3</a>
                                </li>
                                <li>
                                    <a className='a' href="/day4">Día 4</a>
                                </li>
                                <li>
                                    <a className='a' href="/day5">Día 5</a>
                                </li>
                                <li>
                                    <a className='a' href="/day6">Día 6</a>
                                </li>
                                <li>
                                    <a className='a' href="/day7">Día 7</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn">
                        <i className="fas fa-bars" />
                    </label>
                </div>
            </nav>
        </>
    )

}

export default Nav