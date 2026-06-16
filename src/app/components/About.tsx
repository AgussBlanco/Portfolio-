import { Code2, FolderOpen, GraduationCap } from "lucide-react";

const stats = [
  { icon: <GraduationCap size={20} />, value: "5+", label: "Años de formación" },
  { icon: <Code2 size={20} />, value: "4+", label: "Tecnologías aprendidas" },
];

export function About() {
  return (
    <section id="about" className="py-28" style={{ background: "#07141a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Quién soy
          </h2>
          <div
            className="mt-3 h-px w-16"
            style={{ background: "linear-gradient(90deg, #8950d1, transparent)" }}
          />
        </div>

        {/* Top: bio + code snippet */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: "#8aabbd" }}>
              Soy un estudiante técnico con formación en{" "}
              <span style={{ color: "#e2eff8" }}>lógica de programación</span>,{" "}
              <span style={{ color: "#e2eff8" }}>bases de datos</span> y{" "}
              <span style={{ color: "#e2eff8" }}>desarrollo de software</span>.
              Cuento con experiencia en carga y gestión de datos, manejo y
              organización de información.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#8aabbd" }}>
              Me caracterizo por el{" "}
              <span style={{ color: "#8950d1" }}>esfuerzo</span>,{" "}
              <span style={{ color: "#8950d1" }}>organización</span> y{" "}
              <span style={{ color: "#8950d1" }}>responsabilidad</span>. Siempre
              busco aplicar lo aprendido en proyectos reales, mejorando mis
              habilidades y contribuyendo a equipos de trabajo.
            </p>
          </div>
        </div>

        {/* Bottom: 3 stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl flex items-center gap-5 transition-all duration-300"
              style={{
                background: "rgba(13,32,48,0.7)",
                border: "1px solid rgba(45,93,123,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(137,80,209,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="p-3 rounded-xl shrink-0"
                style={{
                  background: "rgba(137,80,209,0.12)",
                  color: "#8950d1",
                }}
              >
                {s.icon}
              </div>
              <div>
                <div
                  style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e2eff8", lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "#8aabbd" }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
