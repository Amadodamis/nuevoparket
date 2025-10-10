import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import GalleryProyectos from "../components/GalleryProyectos/GalleryProyectos";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Proyectos() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <GalleryProyectos />
            </main>
            <CallToAction />
            <Footer />
        </>
    );
}
