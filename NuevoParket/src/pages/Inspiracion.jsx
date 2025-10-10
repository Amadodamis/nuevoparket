import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TextInspiracion from "../components/TextInspiracion/TextInspiracion";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Inspiracion() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <TextInspiracion />
            </main>
            <CallToAction />
            <Footer />
        </>
    );
}
