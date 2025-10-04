import "./Header.css";
import logo from "../../imgs/Np.png"
export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt={'logo'} className={"logo"}/>
            <nav>
                <ul>
                    <li>Quiénes Somos</li>
                    <li>Productos</li>
                    <li>Proyectos</li>
                    <li>Inspiración</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <button className="quote-btn">Cotizar</button>
        </header>
    );
}
