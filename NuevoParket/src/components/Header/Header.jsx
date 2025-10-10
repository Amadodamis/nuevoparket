import "./Header.css";
import logo from "../../imgs/Np.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <Link to="/" className="logo-header" onClick={closeMenu}>
                <img src={logo} alt="logo" />
            </Link>

            <button
                className={`burger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Abrir menú"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
                <ul className="header-ul">
                    <li className={`header-list ${location.pathname === "/" ? "active-page" : ""}`}>
                        <Link to="/" onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/quienes-somos" ? "active-page" : ""}`}>
                        <Link to="/quienes-somos" onClick={closeMenu}>Quiénes Somos</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/productos" ? "active-page" : ""}`}>
                        <Link to="/productos" onClick={closeMenu}>Productos</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/proyectos" ? "active-page" : ""}`}>
                        <Link to="/proyectos" onClick={closeMenu}>Proyectos</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/inspiracion" ? "active-page" : ""}`}>
                        <Link to="/inspiracion" onClick={closeMenu}>Inspiración</Link>
                    </li>
                    <li className={`header-list ${location.pathname === "/contacto" ? "active-page" : ""}`}>
                        <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
                    </li>
                </ul>
                <button className="quote-btn mobile-quote" onClick={closeMenu}>
                    Cotizar
                </button>
            </nav>

            <button className="quote-btn desktop-quote">Cotizar</button>
        </header>
    );
}
