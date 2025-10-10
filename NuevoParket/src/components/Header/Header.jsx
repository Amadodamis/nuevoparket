import "./Header.css";
import logo from "../../imgs/Np.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <Link to="/" className="logo-header">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <ul className="header-ul">
                    <li className={`header-list ${location.pathname === "/" ? "active-page" : ""}`}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/quienes-somos" ? "active-page" : ""}`}>
                        <Link to="/quienes-somos">Quiénes Somos</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/productos" ? "active-page" : ""}`}>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/proyectos" ? "active-page" : ""}`}>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/inspiracion" ? "active-page" : ""}`}>
                        <Link to="/inspiracion">Inspiración</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/contacto" ? "active-page" : ""}`}>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <button className="quote-btn">Cotizar</button>
        </header>
    );
}
