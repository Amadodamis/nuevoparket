import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FeaturedMaterials from "../components/FeaturedMaterials/FeaturedMaterials";
import ProjectsGallery from "../components/ProjectsGallery/ProjectsGallery";
import Process from "../components/Process/Process";
import Professionals from "../components/Professionals/Professionals";
import Testimonials from "../components/Testimonials/Testimonials";
import Values from "../components/Values/Values";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <FeaturedMaterials />
            <ProjectsGallery />
            <Process />
            <Professionals />
            <Testimonials />
            <Values />
            <CallToAction />
            <Footer />
        </>
    );
}
