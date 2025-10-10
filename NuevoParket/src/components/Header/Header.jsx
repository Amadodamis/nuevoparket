import "./Header.css";
import logo from "../../imgs/Np.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    return (

        <header className="header">
            <Link to="/" className="logo-header" >
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <ul className={"header-ul"} >
                    <li className={"header-list"}>
                        <Link to="/quienes-somos">Quiénes Somos</Link>
                    </li>
                    <li className={"header-list"}>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li className={"header-list"}>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li className={"header-list"}>
                        <Link to="/inspiracion">Inspiración</Link>
                    </li>
                    <li className={"header-list"}>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <button className="quote-btn">Cotizar</button>
        </header>
    );
}

/*






*/