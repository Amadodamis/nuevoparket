import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Productos() {
  return (
    <>
      <Header />
      <Hero />
      <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2>Próximamente: nuestra colección completa de productos</h2>
        <p>Vinílicos, melamínicos, pisos de madera y más.</p>
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}
