import React, { useState, useEffect } from "react";
import "./Footer.css";
import fb_icon from "../../imgs/icons/fb.png";
import ig_icon from "../../imgs/icons/ig.png";
import wsp_icon from "../../imgs/icons/wsp.png";

export default function Footer() {
  // --- WhatsApp La Plata / Gonnet (3 números) ---
  const vendedoresLP = [
    "https://wa.me/5492213641867", // 1
    "https://wa.me/5492216768181", // 2
    "https://wa.me/5492216172006", // 3
  ];

  // --- WhatsApp Quilmes (1 número) ---
  const vendedorQuilmes = "https://wa.me/5491156238774";

  // seleccionamos vendedorLP según el minuto en zona Buenos Aires
  const [vendedorLPselected, setVendedorLPselected] = useState(vendedoresLP[0]);

  useEffect(() => {
    function pickByBuenosAiresMinute() {
      try {
        // obtener la parte del minuto en timezone America/Argentina/Buenos_Aires
        const dtf = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Argentina/Buenos_Aires",
          hour12: false,
          minute: "2-digit",
        });
        const parts = dtf.formatToParts(new Date());
        const minutePart = parts.find((p) => p.type === "minute");
        const minute = minutePart ? parseInt(minutePart.value, 10) : new Date().getMinutes();

        if (minute >= 0 && minute <= 19) {
          setVendedorLPselected(vendedoresLP[0]);
        } else if (minute >= 20 && minute <= 39) {
          setVendedorLPselected(vendedoresLP[1]);
        } else {
          setVendedorLPselected(vendedoresLP[2]);
        }
      } catch (err) {
        // fallback simple si algo falla: usar primero
        setVendedorLPselected(vendedoresLP[0]);
      }
    }

    pickByBuenosAiresMinute();

    // opcional: volver a evaluar cada 30 segundos por si mantienen la página abierta
    const id = setInterval(pickByBuenosAiresMinute, 30_000);
    return () => clearInterval(id);
  }, []); // se ejecuta al montar

  // --- Map carousel data ---
  const mapData = [
    {
      name: "La Plata / Gonnet",
      address: "Calle 42 N° 557; Cno. Gral. Belgrano N° 3756",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.74311032542!2d-57.95460292329868!3d-34.92131237283738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e633d9370b39%3A0x6b42b6623c21a115!2sCalle%2042%20557%2C%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar",
    },
    {
      name: "Quilmes",
      address: "Av. 12 de Octubre 499, Quilmes",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.74311032542!2d-57.95460292329868!3d-34.92131237283738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e633d9370b39%3A0x6b42b6623c21a115!2sCalle%2042%20557%2C%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === mapData.length - 1 ? 0 : prev + 1));
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? mapData.length - 1 : prev - 1));

  const currentMap = mapData[currentIndex];

  return (
    <footer className="footer">
      {/* CONTACTO */}
      <div className="footer-contact">
        <h1>Contacto</h1>

        <div className="footer-branch">
          <h2>La Plata / Gonnet</h2>
          <p>
            <a href={vendedorLPselected} target="_blank" rel="noopener noreferrer">
              WhatsApp: La Plata / Gonnet
            </a>
          </p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61571210476450"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook La Plata Gonnet"
            >
              <img src={fb_icon} alt="Facebook La Plata / Gonnet" />
            </a>
            <a
              href="https://www.instagram.com/nuevo_parket/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram La Plata Gonnet"
            >
              <img src={ig_icon} alt="Instagram La Plata / Gonnet" />
            </a>
            <a href={vendedorLPselected} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp La Plata Gonnet">
              <img src={wsp_icon} alt="WhatsApp La Plata / Gonnet" />
            </a>
          </div>
        </div>

        <div className="footer-branch">
          <h2>Quilmes</h2>
          <p>
            <a href={vendedorQuilmes} target="_blank" rel="noopener noreferrer">
              WhatsApp: Quilmes
            </a>
          </p>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/nuevoparket.sucursalquilmes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Quilmes"
            >
              <img src={ig_icon} alt="Instagram Quilmes" />
            </a>
            <a href={vendedorQuilmes} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Quilmes">
              <img src={wsp_icon} alt="WhatsApp Quilmes" />
            </a>
          </div>
        </div>
      </div>

      {/* MAPA */}
      <div className="map-section">
        <h1>Ubicaciones</h1>
        <div className="carousel-stack">
          <div className="map-wrapper">
            <iframe
              title={`Mapa de ${currentMap.name}`}
              src={currentMap.iframeSrc}
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p>{currentMap.name}: {currentMap.address}</p>
          </div>

          {/* Flechas visibles sobre el mapa */}
          <button onClick={goToPrev} className="carousel-button left-arrow" aria-label="Anterior">
            ‹
          </button>
          <button onClick={goToNext} className="carousel-button right-arrow" aria-label="Siguiente">
            ›
          </button>
        </div>
      </div>
    </footer>
  );
}
