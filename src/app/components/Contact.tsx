import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Globe, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    background: "rgba(13,32,48,0.8)",
    border: `1px solid ${focused === field ? "rgba(137,80,209,0.5)" : "rgba(45,93,123,0.25)"}`,
    color: "#e2eff8",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  });

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "blancoagustin049@gmail.com",
      href: "mailto:blancoagustin049@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Teléfono",
      value: "+54 11 2647-2889",
      href: "tel:+541126472889",
    },
  ];

  const socials = [
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Globe size={18} />, label: "Portfolio", href: "#" },
  ];

  return (
    <section
      id="contact"
      className="py-28"
      style={{
        background: "linear-gradient(180deg, #07141a 0%, #0a1220 100%)",
        borderTop: "1px solid rgba(45,93,123,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Hablemos
          </h2>
          <div
            className="mt-3 h-px w-16 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, #8950d1, transparent)" }}
          />
          <p className="mt-6 text-base max-w-md mx-auto" style={{ color: "#8aabbd" }}>
            ¿Tenés una oportunidad o querés colaborar? Escribime y te respondo a la brevedad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactItems.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "rgba(13,32,48,0.7)",
                    border: "1px solid rgba(45,93,123,0.2)",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                    e.currentTarget.style.background = "rgba(13,32,48,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                    e.currentTarget.style.background = "rgba(13,32,48,0.7)";
                  }}
                >
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ background: "rgba(137,80,209,0.12)", color: "#8950d1" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "#8aabbd" }}>{c.label}</div>
                    <div className="text-sm font-medium mt-0.5" style={{ color: "#e2eff8" }}>
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "#8aabbd" }}>
                Redes sociales
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: "rgba(13,32,48,0.7)",
                      border: "1px solid rgba(45,93,123,0.2)",
                      color: "#8aabbd",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(137,80,209,0.4)";
                      e.currentTarget.style.color = "#8950d1";
                      e.currentTarget.style.background = "rgba(137,80,209,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
                      e.currentTarget.style.color = "#8aabbd";
                      e.currentTarget.style.background = "rgba(13,32,48,0.7)";
                    }}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-xs font-mono tracking-wider uppercase mb-2"
                style={{ color: "#8aabbd" }}
              >
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                style={inputStyle("name")}
              />
            </div>
            <div>
              <label
                className="block text-xs font-mono tracking-wider uppercase mb-2"
                style={{ color: "#8aabbd" }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                style={inputStyle("email")}
              />
            </div>
            <div>
              <label
                className="block text-xs font-mono tracking-wider uppercase mb-2"
                style={{ color: "#8aabbd" }}
              >
                Mensaje
              </label>
              <textarea
                placeholder="¿En qué puedo ayudarte?"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                style={{ ...inputStyle("message"), resize: "none" }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: sent
                  ? "linear-gradient(135deg, #2d5d7b, #36217e)"
                  : "linear-gradient(135deg, #8950d1, #36217e)",
                color: "#ffffff",
                boxShadow: "0 0 24px rgba(137,80,209,0.25)",
              }}
              onMouseEnter={(e) => {
                if (!sent) e.currentTarget.style.boxShadow = "0 0 36px rgba(137,80,209,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 24px rgba(137,80,209,0.25)";
              }}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
