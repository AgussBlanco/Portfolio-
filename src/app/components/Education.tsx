import { GraduationCap, MapPin, Calendar } from "lucide-react";

const subjects = ["Proyecto Informatico", "Bases de datos", "POO", "Redes", "Lógica Computacional", "Desarrollo de sistemas"];

export function Education() {
  return (
    <section
      id="education"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #0a1c26 0%, #07141a 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Formación académica
          </h2>
          <div
            className="mt-3 h-px w-16"
            style={{ background: "linear-gradient(90deg, #8950d1, transparent)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
            style={{ background: "linear-gradient(180deg, #8950d1, #2d5d7b, transparent)" }}
          />

          <div className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
            {/* Content — left on desktop */}
            <div className="md:pr-16 md:text-right">
              {/* Dot */}
              <div
                className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #8950d1, #36217e)",
                  boxShadow: "0 0 12px rgba(137,80,209,0.5)",
                  zIndex: 10,
                }}
              />

              <div
                className="p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(13,32,48,0.7)",
                  border: "1px solid rgba(45,93,123,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(137,80,209,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-start gap-3 md:flex-row-reverse md:justify-start">
                  <div
                    className="p-2.5 rounded-xl shrink-0"
                    style={{
                      background: "rgba(137,80,209,0.12)",
                      color: "#8950d1",
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2eff8" }}>
                      Escuela Técnica N° 35
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: "#8950d1" }}>
                      "Ing. Eduardo Latzina"
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: "#8aabbd" }}>
                    <Calendar size={13} />
                    <span>2021 — Presente</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: "#8aabbd" }}>
                    <MapPin size={13} />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#8aabbd" }}>
                  Formación técnica en desarrollo de software con enfoque en
                  programación orientada a objetos, lógica computacional y
                  gestión de bases de datos.
                </p>
              </div>
            </div>

            {/* Subjects — right on desktop */}
            <div className="mt-6 md:mt-0 md:pl-16">
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "#8aabbd" }}>
                Materias cursadas
              </p>
              <div className="grid grid-cols-2 gap-2">
                {subjects.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(13,32,48,0.5)",
                      border: "1px solid rgba(45,93,123,0.15)",
                      color: "#8aabbd",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(137,80,209,0.35)";
                      e.currentTarget.style.color = "#e2eff8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(45,93,123,0.15)";
                      e.currentTarget.style.color = "#8aabbd";
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#8950d1" }}
                    />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
