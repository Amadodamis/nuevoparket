import { useState } from "react";
import "./Hero.css";

export default function Hero() {
    const slides = [
        {
            color: "black",
            text: "Transformá tu espacio con nuestros pisos y revestimientos",
        },
        {
            color: "gray",
            text: "Pisos vinílicos, melamínicos y opciones de alto tránsito",
        },
        {
            color: "darkgray",
            text: "Wall panels interiores: madera, mármol, piedra o cemento",
        },
        {
            color: "#1a1a1a",
            text: "Colocación, pulido e hidrolaqueado de pisos de madera",
        },
        {
            color: "#d6d6d6",
            text: "Decks de WPC: diseño y resistencia para exteriores",
        },
        {
            color: "#2b2b2b",
            text: "Revestimientos exteriores: paneles que transforman fachadas",
        },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="hero">
            <div
                className="hero-slide"
                style={{ backgroundColor: slides[current].color }}
            >
                <div className="hero-content">
                    <h1>{slides[current].text}</h1>
                    <button>Ver más</button>
                </div>

                <button className="arrow left" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="arrow right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    );
}
