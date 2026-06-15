const skillGroups = [
  {
    category: "Lenguajes",
    skills: [
      {
        name: "Java",
        svg: (
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
            <path fill="#EA2D2E" d="M73.604 41.51s6.07 6.07-5.761 15.39c-9.497 7.49-2.165 11.765-.003 16.625-5.532-4.99-9.594-9.382-6.869-13.47 3.997-6.003 15.081-8.916 12.633-18.545z"/>
            <path fill="#0074BD" d="M82.669 107.73c-.333.43-1.703 1.47-1.703 1.47s20.116-10.44 11.16-23.552c-8.335-12.246-14.762-18.333 19.899-39.287 0 .001-21.654 5.409-29.356 17.187-6.557 10.134 1.309 19.303 0 44.182zM48.515 114.256s-3.622 2.11 3.988 2.798c11.53 1.06 18.368.906 32.216-1.228 0 0 1.532 1.555 3.94 2.401-28.526 8.357-66.499-.384-40.144-3.971z"/>
            <path fill="#EA2D2E" d="M56.046 68.814s-16.08 3.818-5.694 5.205c4.388.59 13.139.456 21.287-.23 6.664-.554 13.356-1.739 13.356-1.739s-2.35 1.005-4.051 2.163c-16.362 4.302-47.965 2.298-38.862-2.095 7.666-3.73 13.964-3.304 13.964-3.304z"/>
            <path fill="#0074BD" d="M90.429 93.479c16.634-8.64 8.936-16.943 3.568-15.83-1.313.274-1.896.511-1.896.511s.487-.762 1.414-1.092c10.565-3.716 18.695 10.953-3.419 16.762.001.001.247-.222.333-.351z"/>
            <path fill="#EA2D2E" d="M76.196 1.986s9.195 9.203-8.72 23.34c-14.368 11.348-3.278 17.832-.002 25.224-8.384-7.567-14.535-14.23-10.411-20.428 6.05-9.086 22.83-13.49 19.133-28.136z"/>
            <path fill="#0074BD" d="M53.961 126.933c15.963.937 40.474-.585 41.056-8.36 0 0-1.116 2.867-13.207 5.138-13.728 2.559-30.661 2.263-40.697.621 0 .001 2.053 1.698 12.848 2.601z"/>
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
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.9 1.2 4.4 2.9 5.4l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-1.9-1.2-4.4-2.8-5.4z"/>
            <path fill="#fff" d="M101.1 淡64c0 20.4-16.6 37-37 37S27.1 84.4 27.1 64s16.6-37 37-37 37 16.6 37 37z" opacity=".1"/>
            <path fill="#fff" d="M67.3 64c0 .3 0 .7-.1 1H82c.1-.3.1-.7.1-1s0-.7-.1-1H67.2c.1.3.1.7.1 1zm0 0"/>
            <path fill="#fff" d="M51 56.5c3.8-6.6 10.9-11 19-11 7.3 0 13.9 3.5 18 9l8.5-5c-5.5-8.5-15-14-25.5-14-15.1 0-27.7 10.8-30.5 25.1L51 56.5zm0 15.1l-10.5-4.1C43.3 82.2 55.9 93 71 93c10.5 0 20-5.5 25.5-14l-8.5-5c-4.1 5.5-10.7 9-18 9-8.1 0-15.2-4.4-19-11zm29.1-9.8H76v-3.6h-3.6V54H69v4.2h-3.6v3.6H69v3.6h3.4v-3.6h3.6v3.6H80v-3.6h3.7v-3.6H80v-3.6zm10 0h-3.7v-3.6H83v3.6h-3.6v3.6H83v3.6h3.4v-3.6h3.7v-3.6z"/>
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
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#1572B6" d="M19.037 113.876L9.032 0h109.936l-10.016 113.864L63.962 128z"/>
            <path fill="#33A9DC" d="M64 119.819l34.193-9.49 8.559-95.878H64z"/>
            <path fill="#fff" d="M64 52.251H44.763l.693 8.36H64V52.25zm0-27.352H29.807l.693 8.36H64V24.9zm0 54.942l-.061.017-16.327-4.413-.993-11.258H38.4l1.907 21.67 23.682 6.574.011-.003z"/>
            <path fill="#EBEBEB" d="M64 52.251v8.36h17.91l-1.622 18.104L64 82.162v8.966l23.708-6.58.174-1.956 2.768-31.046.288-3.295zm0-27.352v8.36h35.16l.29-3.129.636-6.968.311-3.263z"/>
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
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#00758F" d="M116 48.5c0-23.2-23.2-42-52-42S12 25.3 12 48.5c0 10.7 5 20.5 13.4 28.1C18.1 82 14 89.7 14 98c0 18.5 22.4 33.5 50 33.5S114 116.5 114 98c0-8.3-4.1-16-11.4-21.4C111 69 116 59.2 116 48.5z"/>
            <path fill="#F29111" d="M64 90c-26.5 0-48-16.1-48-36s21.5-36 48-36 48 16.1 48 36-21.5 36-48 36z"/>
            <path fill="#fff" d="M64 26c-24.3 0-44 12.5-44 28s19.7 28 44 28 44-12.5 44-28S88.3 26 64 26zm0 48c-21.5 0-38-8.9-38-20s16.5-20 38-20 38 8.9 38 20-16.5 20-38 20z"/>
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
          <svg viewBox="0 0 128 128" width="28" height="28">
            <path fill="#0065A9" d="M90.767 127.126a10.59 10.59 0 007.316-2.996l25.569-24.959a7.957 7.957 0 000-11.377l-25.57-24.96a10.59 10.59 0 00-7.315-2.995 10.683 10.683 0 00-10.684 10.684v8.352L50.531 64l29.552-14.875v8.451a10.683 10.683 0 0010.684 10.684z"/>
            <path fill="#007ACC" d="M38.074 83.408l-33.596-5.99A5.317 5.317 0 010 72.167V55.833a5.317 5.317 0 014.478-5.251l33.596-5.99L80.083 64z"/>
            <path fill="#1F9CF0" d="M90.767.874a10.59 10.59 0 00-7.316 2.995L4.478 73.426A5.317 5.317 0 000 78.677v.656a5.317 5.317 0 004.478 5.252L80.083 64 90.767 127.126a10.683 10.683 0 010-126.252z" opacity=".25"/>
          </svg>
        ),
      },
      {
        name: "IntelliJ",
        svg: (
          <svg viewBox="0 0 128 128" width="28" height="28">
            <defs>
              <linearGradient id="ij-a" x1="34.57" y1="15.72" x2="66.85" y2="115.08" gradientUnits="userSpaceOnUse">
                <stop offset=".01" stopColor="#f97a12"/>
                <stop offset=".99" stopColor="#b07b02"/>
              </linearGradient>
              <linearGradient id="ij-b" x1="64.1" y1="100.23" x2="106.39" y2="24.71" gradientUnits="userSpaceOnUse">
                <stop offset=".01" stopColor="#f97a12"/>
                <stop offset=".99" stopColor="#b07b02"/>
              </linearGradient>
            </defs>
            <path fill="url(#ij-a)" d="M0 0h128v128H0z"/>
            <path fill="#fff" d="M25 25h78v78H25z" opacity=".1"/>
            <path fill="#fff" d="M34 88h60v8H34z"/>
            <path fill="#fff" d="M34 38h12v52H34zm46 0h14v52H80z"/>
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
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: "#8950d1" }}
          >
            02. Habilidades
          </span>
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
