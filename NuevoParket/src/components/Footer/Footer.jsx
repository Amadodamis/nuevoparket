import React, { useState } from 'react';
import "./Footer.css";

export default function Footer() {
    
    // --- LÓGICA DEL CARRUSEL DE MAPAS ---
    const mapData = [
        {
            name: "La Plata",
            address: "Calle 42 numero : 557 esquina 6",
            // IMPORTANTE: Sustituye esta URL con el código <iframe> 'src' que obtuviste de Google Maps
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.74311032542!2d-57.95460292329868!3d-34.92131237283738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e633d9370b39%3A0x6b42b6623c21a115!2sCalle%2042%20557%2C%20B1900ARL%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar0" 
        },
        {
            name: "Gonnet",
            address: "Cno. Gral. Belgrano numero : 3756 entre 493 y 495",
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.74311032542!2d-57.95460292329868!3d-34.92131237283738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e633d9370b39%3A0x6b42b6623c21a115!2sCalle%2042%20557%2C%20B1900ARL%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar1" 
        },
        {
            name: "Quilmes",
            address: "Av. 12 de Octubre 499",
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.74311032542!2d-57.95460292329868!3d-34.92131237283738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e633d9370b39%3A0x6b42b6623c21a115!2sCalle%2042%20557%2C%20B1900ARL%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar2"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === mapData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? mapData.length - 1 : prevIndex - 1
        );
    };

    const currentMap = mapData[currentIndex];
    // ------------------------------------

    return (
        <footer className="footer">

            <div className="footer-section">
                <p>Contacto</p>
            </div>

            <div className="footer-section">
                <p>Redes</p>
            </div>

            <div className="footer-section">
                <h2>Direcciones</h2>
                <p>La Plata: Calle 42 numero : 557 esquina 6</p>
                <p>Gonnet: Cno. Gral. Belgrano numero :3756  entre 493 y 495</p>
                <p>Quilmes: Av. 12 de Octubre 499 </p>
            </div>

            {/* SECCIÓN DEL MAPA - CARRUSEL INTEGRADO */}
            <div className="footer-section map-carousel-section">
                
                <h2>Ubicación: {currentMap.name}</h2> 
                
                {/* Contenedor principal para posicionar las flechas sobre el mapa */}
                <div className="carousel-stack">
                    
                    {/* Mapa y Dirección */}
                    <div className="map-wrapper">
                        <iframe
                            title={`Mapa de ${currentMap.name}`}
                            src={currentMap.iframeSrc}
                            width="100%"
                            height="180" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p className="map-address">{currentMap.address}</p>
                    </div>

                    {/* Flecha Izquierda (Anterior) */}
                    <button 
                        onClick={goToPrev} 
                        className="carousel-button left-arrow" 
                        aria-label="Anterior Ubicación"
                    >
                        &lt;
                    </button>
                    {/* Flecha Derecha (Siguiente) */}
                    <button 
                        onClick={goToNext} 
                        className="carousel-button right-arrow" 
                        aria-label="Siguiente Ubicación"
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div className="footer-section">
                <p>Enlaces</p>
            </div>
        </footer>
    );
}