import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Contacto() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <ContactForm />
                <ContactInfo />
            </main>
            <CallToAction />
            <Footer />
        </>
    );
}
