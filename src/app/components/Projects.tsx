import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Pixel Pong",
    description:
      "Versión del clásico Pong desarrollada en Java. Implementa manejo de eventos de teclado, física básica de colisiones y actualización gráfica en tiempo real.",
    tech: ["Java", "Swing", "POO"],
    color: "#2d5d7b",
    accent: "#8950d1",
    emoji: "🏓",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Echoes of Abyss",
    description:
      "Videojuego 2D inspirado en Dark Souls. Participación en el diseño y animación de personajes dentro de un entorno de desarrollo colaborativo.",
    tech: ["Diseño de personajes", "Animación 2D", "Game Dev"],
    color: "#36217e",
    accent: "#8950d1",
    emoji: "⚔️",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Ergopad",
    description:
      "Página web desarrollada en equipo para promocionar un producto ficticio utilizando HTML y CSS. Enfoque en diseño responsivo y maquetación semántica.",
    tech: ["HTML", "CSS", "Diseño Web"],
    color: "#2d5d7b",
    accent: "#36217e",
    emoji: "🖥️",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop&auto=format",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
      style={{
        background: "rgba(13,32,48,0.7)",
        border: "1px solid rgba(45,93,123,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(137,80,209,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden" style={{ background: "#0d2030" }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.color}40, ${project.accent}30)`,
          }}
        />
        <div
          className="absolute top-4 left-4 text-2xl w-10 h-10 flex items-center justify-center rounded-xl"
          style={{ background: "rgba(7,20,26,0.7)" }}
        >
          {project.emoji}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              background: "rgba(7,20,26,0.7)",
              color: "#8aabbd",
              border: "1px solid rgba(45,93,123,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#8950d1";
              e.currentTarget.style.borderColor = "rgba(137,80,209,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8aabbd";
              e.currentTarget.style.borderColor = "rgba(45,93,123,0.3)";
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={15} />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              background: "rgba(7,20,26,0.7)",
              color: "#8aabbd",
              border: "1px solid rgba(45,93,123,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#8950d1";
              e.currentTarget.style.borderColor = "rgba(137,80,209,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8aabbd";
              e.currentTarget.style.borderColor = "rgba(45,93,123,0.3)";
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e2eff8" }}>
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "#8aabbd" }}>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{
                background: "rgba(45,93,123,0.15)",
                border: "1px solid rgba(45,93,123,0.25)",
                color: "#8aabbd",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28" style={{ background: "#07141a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Trabajo destacado
          </h2>
          <div
            className="mt-3 h-px w-16"
            style={{ background: "linear-gradient(90deg, #8950d1, transparent)" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
