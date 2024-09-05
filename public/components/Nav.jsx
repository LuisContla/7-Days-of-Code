import '../styles/nav-styles.css'

function Nav() {

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <a href="/">7 Days of Code</a>
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <i className="fas fa-times" />
                        </label>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Acerca de</a>
                        </li>
                        <li>
                            <a href="#" className="desktop-item">
                                Desafíos
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Desafíos
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <a href="#">Día 1</a>
                                </li>
                                <li>
                                    <a href="#">Día 2</a>
                                </li>
                                <li>
                                    <a href="#">Día 3</a>
                                </li>
                                <li>
                                    <a href="#">Día 4</a>
                                </li>
                                <li>
                                    <a href="#">Día 5</a>
                                </li>
                                <li>
                                    <a href="#">Día 6</a>
                                </li>
                                <li>
                                    <a href="#">Día 7</a>
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