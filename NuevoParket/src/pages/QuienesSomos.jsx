import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TextQuienesSomos from "../components/TextQuienesSomos/TextQuienesSomos";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function QuienesSomos() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <TextQuienesSomos />
            </main>
            <CallToAction />
            <Footer />
        </>
    );
}
