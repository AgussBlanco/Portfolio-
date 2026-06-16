const languages = [
  {
    name: "Español",
    level: "Nativo",
    levelTag: "Native",
    flag: "🇦🇷",
    description: "Lengua materna. Comunicación oral y escrita a nivel profesional.",
    dots: 5,
    color: "#8950d1",
  },
  {
    name: "Inglés",
    level: "C1 — Advanced",
    levelTag: "C1",
    flag: "uk",
    description: "Dominio completo del idioma. Lectura técnica, escritura y comprensión auditiva avanzadas.",
    dots: 5,
    color: "#2d5d7b",
  },
];

export function Languages() {
  return (
    <section
      id="languages"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #07141a 0%, #0a1c26 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Idiomas
          </h2>
          <div
            className="mt-3 h-px w-16"
            style={{ background: "linear-gradient(90deg, #8950d1, transparent)" }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="p-7 rounded-2xl flex flex-col gap-5 transition-all duration-300"
              style={{
                background: "rgba(13,32,48,0.7)",
                border: "1px solid rgba(45,93,123,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(137,80,209,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e2eff8" }}>
                      {lang.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#8aabbd" }}>
                      {lang.level}
                    </div>
                  </div>
                </div>
                <span
                  className="font-mono text-xs px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    background: `rgba(${lang.color === "#8950d1" ? "137,80,209" : "45,93,123"},0.15)`,
                    border: `1px solid rgba(${lang.color === "#8950d1" ? "137,80,209" : "45,93,123"},0.35)`,
                    color: lang.color,
                  }}
                >
                  {lang.levelTag}
                </span>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex-1 h-1.5 rounded-full"
                    style={{
                      background:
                        i <= lang.dots
                          ? `linear-gradient(90deg, ${lang.color}, ${lang.color}99)`
                          : "rgba(45,93,123,0.2)",
                    }}
                  />
                ))}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "#8aabbd" }}>
                {lang.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
