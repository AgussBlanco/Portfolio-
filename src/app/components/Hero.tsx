import { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = "rgba(45,93,123,0.06)";
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(137,80,209,${p.alpha})`;
        ctx.fill();
      });

      // Connect close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(45,93,123,${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#07141a" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(137,80,209,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-32">
        {/* Text */}
        <div className="space-y-8">
          <div>
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase mb-4 block"
              style={{ color: "#8950d1" }}
            >
              Disponible para oportunidades
            </span>
            <h1
              className="leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                color: "#e2eff8",
                letterSpacing: "-0.02em",
              }}
            >
              Agustín{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2d5d7b, #8950d1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Blanco
              </span>
            </h1>
          </div>

          <div
            className="font-mono text-sm space-y-1"
            style={{ color: "#8aabbd" }}
          >
            <div className="flex items-center gap-2">
              <span style={{ color: "#8950d1" }}>▹</span>
              <span>Estudiante de Computación</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: "#2d5d7b" }}>▹</span>
              <span>Desarrollador de Software</span>
            </div>
          </div>

          <p className="text-base leading-relaxed max-w-md" style={{ color: "#8aabbd" }}>
            Estudiante técnico con formación en programación, bases de datos y
            desarrollo de software. Experiencia en gestión de datos y desarrollo
            de proyectos académicos.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
              style={{
                background: "linear-gradient(135deg, #8950d1, #36217e)",
                color: "#ffffff",
                boxShadow: "0 0 24px rgba(137,80,209,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 36px rgba(137,80,209,0.5)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 24px rgba(137,80,209,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Ver proyectos
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
              style={{
                background: "transparent",
                border: "1px solid rgba(45,93,123,0.5)",
                color: "#e2eff8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2d5d7b";
                e.currentTarget.style.background = "rgba(45,93,123,0.1)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,93,123,0.5)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contactarme
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {[
              { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:blancoagustin049@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#8aabbd", border: "1px solid rgba(45,93,123,0.2)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#8950d1";
                  e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                  e.currentTarget.style.background = "rgba(137,80,209,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8aabbd";
                  e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                  e.currentTarget.style.background = "transparent";
                }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #8950d1, #2d5d7b, #36217e, #8950d1)",
                padding: "2px",
                borderRadius: "50%",
                animation: "spin 8s linear infinite",
              }}
            />
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{
                border: "3px solid transparent",
                background: "linear-gradient(#07141a, #07141a) padding-box, conic-gradient(from 0deg, #8950d1, #2d5d7b, #36217e, #8950d1) border-box",
                boxShadow: "0 0 60px rgba(137,80,209,0.2)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0d2030, #1a0a40)" }}
              >
                <div className="text-center space-y-2">
                  <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #2d5d7b, #8950d1)",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    AB
                  </div>
                  <div className="font-mono text-xs" style={{ color: "#8aabbd" }}>
                    &lt;dev /&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: "#8aabbd" }}
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} style={{ animation: "bounce 2s infinite" }} />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
      `}</style>
    </section>
  );
}
