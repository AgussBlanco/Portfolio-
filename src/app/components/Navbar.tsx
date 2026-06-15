import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(7, 20, 26, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(45,93,123,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="font-mono text-sm tracking-widest cursor-pointer select-none"
          style={{ color: "#8950d1" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AB<span style={{ color: "#e2eff8", opacity: 0.4 }}>.dev</span>
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm transition-colors duration-200 cursor-pointer"
                style={{ color: "#8aabbd" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#e2eff8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#8aabbd")
                }
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLink("#contact")}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: "rgba(137,80,209,0.15)",
                border: "1px solid rgba(137,80,209,0.4)",
                color: "#8950d1",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(137,80,209,0.3)";
                el.style.borderColor = "#8950d1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(137,80,209,0.15)";
                el.style.borderColor = "rgba(137,80,209,0.4)";
              }}
            >
              Contrátame
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#e2eff8" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(7,20,26,0.97)",
            borderBottom: "1px solid rgba(45,93,123,0.2)",
          }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-left py-2 text-sm border-b"
              style={{ color: "#e2eff8", borderColor: "rgba(45,93,123,0.2)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
