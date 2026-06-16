export function Footer() {
  return (
    <footer
      className="py-10 text-center"
      style={{
        background: "#07141a",
        borderTop: "1px solid rgba(45,93,123,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        <span
          className="font-mono text-sm tracking-widest"
          style={{ color: "#8950d1" }}
        >
          
        </span>
        <p className="text-sm" style={{ color: "#8aabbd" }}>
          Agustín Blanco — Estudiante de Computación
        </p>
        <p className="font-mono text-xs" style={{ color: "rgba(138,171,189,0.4)" }}>
          © 2026 · Diseñado y desarrollado con ❤️
        </p>
      </div>
    </footer>
  );
}
