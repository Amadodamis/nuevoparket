import "./FeaturedMaterials.css";

export default function FeaturedMaterials() {
    const materials = [1, 2, 3, 4];

    return (
        <section className="featured">
            <h2>Materiales Destacados</h2>
            <div className="featured-grid">
                {materials.map((mat) => (
                    <div key={mat} className="material-card">
                        <div className="material-img"></div>
                        <p>Material {mat}</p>
                        <button>Más info</button>
                        <button>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
