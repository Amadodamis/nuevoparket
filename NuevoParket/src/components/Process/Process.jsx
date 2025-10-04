import "./Process.css";

export default function Process() {
    const steps = ["Consulta", "Selección de material", "Instalación"];

    return (
        <section className="process">
            <h2>Nuestro Proceso</h2>
            <div className="process-steps">
                {steps.map((step, i) => (
                    <div key={i} className="step">
                        <div className="icon"></div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
