import '../styles/nav-styles.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <Link className="a" to="/">7 Days Of Code</Link>
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <i className="fas fa-times" />
                        </label>
                        <li>
                            <Link className='a' to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link className='a' to="/about">Acerca de</Link>
                        </li>
                        <li>
                            <Link className='a desktop-item' to="">
                                Desafíos
                            </Link>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Desafíos
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <Link className='a' to="/dayone">Día 1</Link>
                                </li>
                                <li>
                                    <Link className='a' to="/daytwo">Día 2</Link>
                                </li>
                                <li>
                                    <Link className='a' to="/daythree">Día 3</Link>
                                </li>
                                <li>
                                    <Link className='a' to="/dayfour">Día 4</Link>
                                </li>
                                <li>
                                    <Link className='a' to="/dayfive">Día 5</Link>
                                </li>
                                <li>
                                    <Link className='a' to="/daysix">Día 6</Link>
                                </li>
                                <li>
                                    <Link className='a' to="/dayseven">Día 7</Link>
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

export default Nav;
