import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <h2>Testimonios</h2>
            <div className="testimonial-slider">
                <div className="testimonial">
                    <div className="client-img"></div>
                    <p>"Excelente servicio y calidad en los materiales"</p>
                </div>
                <div className="testimonial">
                    <div className="client-img"></div>
                    <p>"Mis clientas quedaron encantadas con el resultado"</p>
                </div>
            </div>
        </section>
    );
}
