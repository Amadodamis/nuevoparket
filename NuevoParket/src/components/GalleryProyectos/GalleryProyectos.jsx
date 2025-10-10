import "./GalleryProyectos.css";

export default function GalleryProyectos() {
    const proyectos = [
        { id: 1, name: "Residencia Urbana", color: "#ccc" },
        { id: 2, name: "Showroom Palermo", color: "#999" },
        { id: 3, name: "Casa Campo", color: "#bbb" },
        { id: 4, name: "Hotel Boutique", color: "#888" },
        { id: 5, name: "Oficinas Belgrano", color: "#aaa" },
        { id: 6, name: "Depto Nordelta", color: "#666" },
    ];

    return (
        <section className="gallery-container">
            <h2>Nuestros Proyectos</h2>
            <div className="gallery-grid">
                {proyectos.map((p) => (
                    <div key={p.id} className="gallery-item" style={{ backgroundColor: p.color }}>
                        <p>{p.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
