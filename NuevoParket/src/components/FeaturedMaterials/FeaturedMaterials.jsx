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
                        <p className="material-name">Material {mat}</p>
                        <div className="material-buttons">
                            <button className="btn btn-more">Saber más</button>
                            <button className="btn btn-cart">Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
