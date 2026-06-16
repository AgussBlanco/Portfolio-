const skillGroups = [
  {
    category: "Lenguajes",
    skills: [
      {
        name: "Java",
        svg: (
          <svg viewBox="0 0 128 128" width="22" height="22">
      <path fill="#f89820" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
      <path fill="#f89820" d="M69.802 61.271c6.025 6.929-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 0-42.731 10.67-22.324 34.187z"/>
      <path fill="#f89820" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327.468-.617z"/>
      <path fill="#f89820" d="M76.491 1.587S89.459 14.563 64.62 34.588c-20.066 15.847-4.578 24.883-.008 35.235-11.71-10.565-20.318-19.877-14.551-28.553C58.042 28.73 81.722 22.997 76.491 1.587z"/>
      <path fill="#f89820" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
    </svg>
        ),
      },
      {
        name: "C",
        svg: (
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
          </svg>
        ),
      },
      {
        name: "C#",
        svg: (
          <svg viewBox="0 0 128 128" width="22" height="22">
      <path fill="#9b4f96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#68217a" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
      <path fill="#fff" d="M97.2 66.4h-3.6v-3.6h-3.6v3.6h-3.6v3.6h3.6v3.6h3.6v-3.6h3.6v-3.6zM108 66.4h-3.6v-3.6h-3.6v3.6H97v3.6h3.8v3.6h3.6v-3.6h3.6v-3.6z"/>
    </svg>
        ),
      },
    ],
  },
  {
    category: "Web",
    skills: [
      {
        name: "HTML5",
        svg: (
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#E44D26" d="M19.037 113.876L9.032 0h109.936l-10.016 113.864L63.962 128z"/>
            <path fill="#F16529" d="M64 119.819l34.193-9.49 8.559-95.878H64z"/>
            <path fill="#EBEBEB" d="M64 52.251H45.764L44.5 38.435H64V24.899H29.489l.33 3.382 3.382 37.86H64zm0 35.141l-.061.017-16.327-4.413-.993-11.258H32.398l2.055 22.976 29.439 8.187.108-.03z"/>
            <path fill="#fff" d="M63.952 52.251v13.536h16.16l-1.544 17.192-14.616 3.967v14.083l29.452-8.175.217-2.448 3.295-36.896.347-3.259zm0-27.352v13.536H98.67l.277-3.129.636-6.968.331-3.439z"/>
          </svg>
        ),
      },
      {
        name: "CSS3",
        svg: (
          <svg viewBox="0 0 128 128" width="22" height="22">
      <path fill="#1572b6" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
      <path fill="#33a9dc" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#fff" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#ebebeb" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
        ),
      },
    ],
  },
  {
    category: "Base de Datos",
    skills: [
      {
        name: "SQL",
        svg: (
         <svg viewBox="0 0 128 128" width="22" height="22">
      <path fill="#00758f" d="M64 0C28.7 0 0 10.3 0 23v82c0 12.7 28.7 23 64 23s64-10.3 64-23V23C128 10.3 99.3 0 64 0zm0 10c30.9 0 54 8.1 54 13S94.9 36 64 36 10 27.9 10 23s23.1-13 54-13zm0 108c-30.9 0-54-8.1-54-13V88.2c11.9 6.5 31.8 10.8 54 10.8s42.1-4.3 54-10.8V105c0 4.9-23.1 13-54 13zm54-40.5c0 4.9-23.1 13-54 13s-54-8.1-54-13V60.7C21.9 67.2 41.8 71.5 64 71.5s42.1-4.3 54-10.8v25.8z"/>
    </svg>
        ),
      },
    ],
  },
  {
    category: "Herramientas",
    skills: [
      {
        name: "VS Code",
        svg: (
          <svg viewBox="0 0 128 128" width="22" height="22">
      <clipPath id="vsc-clip">
        <path d="M90.767 127.126a10.294 10.294 0 006.304-.149l26.568-12.373a10.294 10.294 0 006.361-9.497V22.894a10.294 10.294 0 00-6.361-9.496L97.071 1.024a10.294 10.294 0 00-11.663 2.223L40.496 48.581 17.552 31.33a6.871 6.871 0 00-8.78.419L1.8 38.199a6.871 6.871 0 00-.005 10.166L20.58 64.001 1.795 79.637a6.871 6.871 0 00.005 10.166l6.972 6.45a6.871 6.871 0 008.78.418l22.944-17.25 44.912 45.334a10.294 10.294 0 007.359 2.371z"/>
      </clipPath>
      <g clipPath="url(#vsc-clip)">
        <path fill="#0065a9" d="M123.639 13.398L97.071 1.024a10.294 10.294 0 00-11.663 2.223L1.795 79.637a6.871 6.871 0 00.005 10.166l6.972 6.45a6.871 6.871 0 008.78.418l113.657-85.75a10.294 10.294 0 00-7.57-17.523z"/>
        <path fill="#007acc" d="M123.639 114.603L97.071 126.976a10.294 10.294 0 01-11.663-2.223L1.795 48.363a6.871 6.871 0 01.005-10.166l6.972-6.45a6.871 6.871 0 018.78-.418l113.657 85.75a10.294 10.294 0 01-7.57 17.524z"/>
        <path fill="#1f9cf0" d="M97.071 126.976a10.294 10.294 0 01-11.663-2.223c3.056 3.056 8.293 1.699 8.293-3.066V6.312c0-4.765-5.237-6.122-8.293-3.066a10.294 10.294 0 0111.663-2.222l26.568 12.374A10.294 10.294 0 01130 22.894v82.213a10.294 10.294 0 01-6.361 9.496z"/>
      </g>
    </svg>
        ),
      },
      {
        name: "IntelliJ",
        svg: (
    <svg viewBox="0 0 128 128" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ij-grad1" x1="8.6" y1="117.1" x2="114.4" y2="11.2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0079A5" />
          <stop offset="0.23" stopColor="#0079A5" />
          <stop offset="0.6" stopColor="#21D789" />
          <stop offset="1" stopColor="#21D789" />
        </linearGradient>
        <linearGradient id="ij-grad2" x1="124.6" y1="28.9" x2="16.7" y2="111.4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FC2566" />
          <stop offset="0.45" stopColor="#B83A85" />
          <stop offset="1" stopColor="#FFC800" />
        </linearGradient>
      </defs>

      {/* Fondo geométrico */}
      <path d="M115.6 13.9L8.4 45.6 3.5 97.2l47.9 28.7 73.8-31z" fill="url(#ij-grad1)" />
      <path d="M125.5 35.3L84.7 3.6 29.2 17l84.6 109.1 11.2-24.8z" fill="url(#ij-grad2)" />
      <path d="M101.9 119.3L13.6 83.9l19.5-66.2 80 43.1z" fill="#9727B2" opacity="0.6" />

      {/* Cuadrado negro central */}
      <rect x="23" y="23" width="82" height="82" rx="4" fill="#000000" />

      {/* Letras "IJ" correctas */}
      <path d="M36 37h9v31h-9z" fill="#FFFFFF" />
      <path d="M59 37h9v23c0 4.4-3.6 8-8 8h-9v-8h7c0.6 0 1-0.4 1-1V37z" fill="#FFFFFF" />
      
      {/* Barra de marca JetBrains */}
      <path d="M36 79h56v6H36z" fill="#FFFFFF" />
    </svg>

        ),
      },
    ],
  },
];

function SkillCard({ name, svg }: { name: string; svg: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: "rgba(13,32,48,0.7)",
        border: "1px solid rgba(45,93,123,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(137,80,209,0.45)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(137,80,209,0.12)";
        e.currentTarget.style.background = "rgba(13,32,48,0.95)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(45,93,123,0.2)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "rgba(13,32,48,0.7)";
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(45,93,123,0.12)" }}
      >
        {svg}
      </div>
      <span className="text-sm font-medium" style={{ color: "#e2eff8" }}>
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #07141a 0%, #0a1c26 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="mt-2"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#e2eff8" }}
          >
            Stack técnico
          </h2>
          <div
            className="mt-3 h-px w-16"
            style={{ background: "linear-gradient(90deg, #8950d1, transparent)" }}
          />
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(45,93,123,0.15)",
                    border: "1px solid rgba(45,93,123,0.3)",
                    color: "#2d5d7b",
                  }}
                >
                  {group.category}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(45,93,123,0.12)" }}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.skills.map((s) => (
                  <SkillCard key={s.name} name={s.name} svg={s.svg} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
