import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CircuitBoard,
  Code2,
  Cpu,
  FolderGit2,
  Gamepad2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Target,
  Telescope,
  Triangle,
  Github,
  MonitorSmartphone,
  Boxes,
  Smartphone,
} from "lucide-react";

const tabs = [
  { id: "home", label: "Inicio", icon: Sparkles },
  { id: "electronica", label: "Electrónica", icon: CircuitBoard },
  { id: "juegos", label: "Juegos", icon: Gamepad2 },
  { id: "vr", label: "VR / Plantillas", icon: MonitorSmartphone },
  { id: "hobbies", label: "Hobbies", icon: Telescope },
  { id: "contacto", label: "Contacto", icon: Mail },
];

const skills = [
  {
    title: "Desarrollo",
    items: ["Unity", "C#", "Python", "C", "UI/UX", "Prototipado"],
  },
  {
    title: "Electrónica",
    items: ["ESP32", "LoRa", "Sensores", "Telemetría", "PCB", "Integración"],
  },
  {
    title: "Sistemas",
    items: ["Bluetooth", "WiFi", "GPS", "MPU6050", "Si7021", "DS18B20"],
  },
];

const electronicsProjects = [
  {
    name: "Cohete experimental con telemetría",
    desc: "Sistema de envío de datos entre cohete y base con visualización de altitud, velocidad y estado general.",
    tags: ["ESP32-S3", "SX1262", "GPS", "sensores"],
  },
  {
    name: "Placa de control compacta",
    desc: "Diseño cuadrado ajustado al tubo de 2 pulgadas, pensado para antenas, sensores y control del sistema.",
    tags: ["PCB", "integración", "telemetría"],
  },
  {
    name: "Módulo de expulsión de paracaídas",
    desc: "Liberación por servomotor con compuerta y asistencia elástica o por resorte para despliegue confiable.",
    tags: ["servos", "control", "seguridad"],
  },
];

const gameProjects = [
  {
    name: "Juego Unity en desarrollo",
    desc: "Proyecto en equipo con enfoque en diseño, programación, animación y estructura escalable.",
    tags: ["Unity", "2D/3D", "equipo"],
  },
  {
    name: "Animaciones y gráficos con control",
    desc: "Sistemas visuales y animaciones pensados para interactuar con mando o entrada en tiempo real.",
    tags: ["animación", "input", "interacción"],
  },
  {
    name: "Prototipos técnicos jugables",
    desc: "Pruebas rápidas para validar mecánicas antes de convertirlas en una experiencia completa.",
    tags: ["prototipo", "gameplay", "UX"],
  },
];

const vrProjects = [
  {
    name: "Plantillas VR",
    desc: "Base organizada para escenas VR, interacción, menús, movimientos y pruebas de usabilidad.",
    tags: ["VR", "plantillas", "escenas"],
  },
  {
    name: "Interfaz inmersiva",
    desc: "HUD y menús limpios para experiencias inmersivas con estilo técnico y visual neutral.",
    tags: ["UI", "inmersión", "prototipo"],
  },
  {
    name: "Laboratorio de pruebas",
    desc: "Espacio para revisar confort, locomoción, colisiones e interacciones antes de publicar.",
    tags: ["testing", "VR", "interacción"],
  },
];

const hobbies = [
  "Videojuegos",
  "Diseño 3D / voxel art",
  "Electrónica DIY",
  "Explorar ideas de hardware",
  "Construir interfaces limpias",
];

function SectionCard({ title, icon: Icon, children, accent = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-md ${accent ? "ring-1 ring-white/15" : ""}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
          <Icon className="h-5 w-5 text-white/90" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-black/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-white">{project.name}</h3>
        <ArrowRight className="mt-1 h-4 w-4 text-white/35 transition group-hover:translate-x-1 group-hover:text-white/70" />
      </div>
      <p className="mt-2 text-sm leading-6 text-white/70">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPerryWang() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLabel = useMemo(() => tabs.find((t) => t.id === activeTab)?.label ?? "Inicio", [activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0b10] text-white">
      <style>{`
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 42px 42px;
        }
        .glow-line {
          position: absolute;
          inset: auto;
          height: 2px;
          width: 160%;
          left: -30%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), rgba(255,255,255,0.85), rgba(255,255,255,0.05), transparent);
          filter: blur(0.4px);
          transform: rotate(-12deg);
          animation: sweep 11s linear infinite;
        }
        .glow-line.two { top: 18%; animation-delay: -3s; opacity: 0.55; }
        .glow-line.three { top: 66%; animation-delay: -6s; opacity: 0.35; }
        .glow-line.four { top: 83%; animation-delay: -8s; opacity: 0.22; }
        @keyframes sweep {
          0%   { transform: translateX(-25%) rotate(-12deg); }
          100% { transform: translateX(25%) rotate(-12deg); }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .floaty { animation: floaty 5s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-[0.11]" />
        <div className="glow-line" />
        <div className="glow-line two" />
        <div className="glow-line three" />
        <div className="glow-line four" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0b10]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
              <SquareTerminal className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/50">Portafolio</p>
              <p className="font-semibold tracking-wide">Perry Wang</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 lg:flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${active ? "bg-white text-black" : "text-white/75 hover:bg-white/10 hover:text-white"}`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="rounded-2xl border border-white/10 bg-white/5 p-2 lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-black/35 lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${activeTab === tab.id ? "border-white/20 bg-white text-black" : "border-white/10 bg-white/5 text-white/80"}`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              <Rocket className="h-4 w-4" />
              Electrónica, software y creación visual en un solo lugar
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                Construyo ideas <span className="text-white/50">como sistemas vivos</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="mt-5 max-w-2xl text-lg leading-8 text-white/70"
              >
                Portafolio técnico y creativo para mostrar tus proyectos de electrónica, videojuegos, VR y prototipos con una estética oscura, limpia y profesional.
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#secciones"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                Ver portafolio
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85 transition hover:bg-white/10"
              >
                Contacto
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">Electrónica</p>
                <p className="text-sm text-white/60">Telemetría, sensores, control y PCB.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">Unity</p>
                <p className="text-sm text-white/60">Juegos, UI, animación y prototipos.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">VR</p>
                <p className="text-sm text-white/60">Plantillas y experiencias inmersivas.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="floaty relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.11),transparent_44%)]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between text-sm text-white/60">
                  <span>Estado del portafolio</span>
                  <span>{activeLabel}</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><CircuitBoard className="h-5 w-5" /></div>
                      <p className="font-semibold">Perfil técnico</p>
                    </div>
                    <p className="text-sm leading-6 text-white/70">Ingeniería electrónica + desarrollo de software + prototipado visual.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><FolderGit2 className="h-5 w-5" /></div>
                      <p className="font-semibold">Presentación clara</p>
                    </div>
                    <p className="text-sm leading-6 text-white/70">Bloques con carpetas, subcarpetas y navegación por pestañas.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><Target className="h-5 w-5" /></div>
                      <p className="font-semibold">Enfoque laboral</p>
                    </div>
                    <p className="text-sm leading-6 text-white/70">Hecho para mostrar tu valor, no solo tus proyectos.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><ShieldCheck className="h-5 w-5" /></div>
                      <p className="font-semibold">Estilo premium</p>
                    </div>
                    <p className="text-sm leading-6 text-white/70">Negro, gris y brillo controlado con sensación futurista.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="secciones" className="mt-12 grid gap-6 lg:grid-cols-3">
          {skills.map((group) => (
            <SectionCard key={group.title} title={group.title} icon={Layers3}>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </SectionCard>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionCard title="Carpetas y subcarpetas" icon={FolderGit2} accent>
            <div className="space-y-3 text-sm text-white/75">
              <p>La estructura ideal para GitHub y Vercel puede quedar así:</p>
              <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-white/75">
{`/src
  /components
    /hero
    /sections
    /cards
  /data
    skills.ts
    projects.ts
  /pages
    index.tsx
  /assets
    /icons
    /images
    /backgrounds`}
              </pre>
              <p className="text-white/55">Esto hace que tu página crezca ordenada y fácil de mantener.</p>
            </div>
          </SectionCard>

          <SectionCard title="Qué hace que se vea profesional" icon={Sparkles}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium">Movimiento sutil</p>
                <p className="mt-1 text-sm text-white/60">Animaciones suaves, sin saturar.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium">Tipografía fuerte</p>
                <p className="mt-1 text-sm text-white/60">Jerarquía clara en títulos y secciones.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium">Contenido real</p>
                <p className="mt-1 text-sm text-white/60">Proyectos con contexto, no solo nombres.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium">Estética técnica</p>
                <p className="mt-1 text-sm text-white/60">Rayos, rejilla y bloques limpios.</p>
              </div>
            </div>
          </SectionCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <SectionCard title="Electrónica" icon={CircuitBoard}>
            <div className="space-y-3">
              {electronicsProjects.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Videojuegos" icon={Gamepad2}>
            <div className="space-y-3">
              {gameProjects.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="VR / Plantillas" icon={MonitorSmartphone}>
            <div className="space-y-3">
              {vrProjects.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title="Hobbies y perfil personal" icon={Telescope}>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <Tag key={h}>{h}</Tag>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Este bloque sirve para que tu portafolio no se vea frío. Le da personalidad, muestra tu lado creativo y ayuda a que un reclutador recuerde tu marca.
            </p>
          </SectionCard>

          <SectionCard title="Contacto" icon={Mail}>
            <div id="contacto" className="space-y-3 text-sm text-white/75">
              <p><span className="text-white">Correo:</span> tucorreo@dominio.com</p>
              <p><span className="text-white">GitHub:</span> @tuusuario</p>
              <p><span className="text-white">LinkedIn:</span> /in/tu-perfil</p>
              <p><span className="text-white">Ubicación:</span> Colombia</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"><Github className="h-4 w-4" /> GitHub</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </div>
          </SectionCard>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Lista para convertir esto en tu web final</h2>
              <p className="mt-2 text-white/65">
                Ya tienes un diseño base muy serio. Con tus datos reales lo dejo más cercano a una landing de contratación.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">GitHub</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">Vercel</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">Dominio</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
