const softSkills = [
  { label: "Escucha activa", icon: "👂", desc: "Atento a las necesidades del equipo" },
  { label: "Colaboración", icon: "🤝", desc: "Trabajo efectivo en equipo" },
  { label: "Adaptabilidad", icon: "🔄", desc: "Flexible ante nuevos desafíos" },
  { label: "Pensamiento crítico", icon: "🧩", desc: "Análisis profundo de problemas" },
  { label: "Proactividad", icon: "🚀", desc: "Iniciativa y anticipación" },
  { label: "Gestión del tiempo", icon: "⏱️", desc: "Organización y eficiencia" },
];

export function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="py-28"
      style={{ background: "#07141a" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: "#8950d1" }}
          >
            05. Habilidades blandas
          </span>
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Competencias personales
          </h2>
          <div
            className="mt-3 h-px w-16"
            style={{ background: "linear-gradient(90deg, #8950d1, transparent)" }}
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {softSkills.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl flex items-start gap-4 transition-all duration-300"
              style={{
                background: "rgba(13,32,48,0.7)",
                border: "1px solid rgba(45,93,123,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(137,80,209,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                style={{
                  background: "rgba(45,93,123,0.15)",
                  border: "1px solid rgba(45,93,123,0.2)",
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e2eff8" }}>
                  {s.label}
                </h3>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "#8aabbd" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
