import "./ProjectsGallery.css";

export default function ProjectsGallery() {
    return (
        <section className="projects">
            <h2>Proyectos Reales</h2>
            <div className="projects-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="project-img"></div>
                ))}
            </div>
        </section>
    );
}
