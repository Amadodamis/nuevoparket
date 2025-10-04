import "./Values.css";

export default function Values() {
    const values = ["Garantía", "Origen", "Sostenibilidad"];

    return (
        <section className="values">
            <h2>Nuestros Valores</h2>
            <div className="values-grid">
                {values.map((val, i) => (
                    <div key={i} className="value-card">
                        <div className="value-icon"></div>
                        <p>{val}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
