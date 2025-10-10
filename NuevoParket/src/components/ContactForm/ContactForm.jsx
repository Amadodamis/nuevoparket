import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-form">
      <h2>Escribinos</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Tu mensaje" rows="5" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}
