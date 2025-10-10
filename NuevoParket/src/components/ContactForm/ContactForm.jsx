import "./ContactForm.css";

export default function ContactForm() {


  return (
    <section className="contact-form">
      <h2>Escribinos</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required className="input-contact" />
        <input type="email" placeholder="Correo electrónico" required className="input-contact" />
        <textarea placeholder="Tu mensaje" rows="5" required className="input-contact">

        </textarea>
        <button type="submit" className="contact-button-send-message"><p>Enviar mensaje</p></button>
      </form>
    </section>
  );
}
