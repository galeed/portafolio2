import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Github } from "lucide-react";
import { z } from "zod";
import { categories, projects, skills, type Category } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { StyleDock } from "@/components/portfolio/style-dock";
import {
  applyPrefs,
  DEFAULT_PREFS,
  readPrefs,
  STYLE_KEY,
  StyleContext,
  THEME_META,
  type Density,
  type Glow,
  type StylePrefs,
  type ThemeId,
} from "@/components/portfolio/use-style";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Pon al menos dos letras."),
  email: z.email("Ese correo no parece válido."),
  message: z.string().trim().min(12, "Cuéntame un poco más, aunque sea una frase."),
});

type Filter = "todos" | Category;

export function HomePage() {
  const [prefs, setPrefs] = useState<StylePrefs>(DEFAULT_PREFS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPrefs(readPrefs());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyPrefs(prefs);
    localStorage.setItem(STYLE_KEY, JSON.stringify(prefs));
  }, [prefs, ready]);

  const api = useMemo(
    () => ({
      prefs,
      ready,
      setTheme: (theme: ThemeId) =>
        setPrefs((current) => ({
          ...current,
          theme,
          scan: theme === "matrix" || theme === "amber" ? current.scan : false,
          glow: theme === "brutal" || theme === "editorial" ? "off" : current.glow === "off" ? "soft" : current.glow,
        })),
      setScan: (scan: boolean) => setPrefs((current) => ({ ...current, scan })),
      setGlow: (glow: Glow) => setPrefs((current) => ({ ...current, glow })),
      setDensity: (density: Density) => setPrefs((current) => ({ ...current, density })),
    }),
    [prefs, ready],
  );

  return (
    <StyleContext.Provider value={api}>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Saltar al contenido
      </a>
      <div className="relative z-10">
        <SiteHeader themeLabel={THEME_META[prefs.theme].label} />
        <main id="contenido">
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
        <SiteFooter themeLabel={THEME_META[prefs.theme].label} />
      </div>
      <StyleDock />
    </StyleContext.Provider>
  );
}

function SiteHeader({ themeLabel }: { themeLabel: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a href="#inicio" className="font-mono text-sm tracking-wide">
          galeed<span className="text-accent">:~</span>
        </a>
        <nav aria-label="Secciones" className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto text-sm sm:gap-3">
          {[
            ["#acerca", "Acerca"],
            ["#habilidades", "Oficio"],
            ["#proyectos", "Obra"],
            ["#contacto", "Contacto"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 shrink-0 items-center px-2 text-muted transition-colors duration-150 hover:text-fg"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="hidden font-mono text-xs tracking-widest text-muted uppercase lg:block">{themeLabel}</p>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
      <div>
        <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">01 — Portafolio</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-medium sm:text-6xl">
          Herramientas que se sienten como instrumentos.
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
          Soy Guillaume. En GitHub firmo galeed. Diseño audio, pixel y prototipos jugables, y este sitio
          cambia de piel sin cambiar de obra.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="inline-flex min-h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/galeed"
            className="inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm transition-transform duration-150 ease-out hover:border-accent active:scale-[0.96]"
          >
            <Github className="size-4" />
            github.com/galeed
          </a>
        </div>
      </div>
      <pre className="overflow-hidden border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-muted sm:text-sm">
        <span className="text-accent">galeed@cdmx</span>
        <span>:~$ whoami{"\n"}</span>
        guillaume{"\n\n"}
        <span className="text-accent">galeed@cdmx</span>
        <span>:~$ ls ~/oficio{"\n"}</span>
        audio   pixel   prototipos   estilo{"\n\n"}
        <span className="text-accent">galeed@cdmx</span>
        <span>:~$ cat ahora.txt{"\n"}</span>
        Meow Audio, editores y un portafolio{"\n"}
        que se puede vestir de otra forma. <span className="caret" aria-hidden />
      </pre>
    </section>
  );
}

function About() {
  return (
    <section id="acerca" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-section sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">02 — Acerca de</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">Un archivo, no un escaparate.</h2>
        </div>
        <div className="space-y-4 text-base">
          <p>
            Armo interfaces que se usan de verdad: reproductores con skins, un estudio de pixel, mesas de
            mastering y prototipos cortos de juego. El hilo es el mismo — consola, gato, ritmo — aunque el
            contenedor cambie.
          </p>
          <p className="text-muted">
            Trabajo desde Ciudad de México. El código público vive en{" "}
            <a className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent" href="https://github.com/galeed">
              github.com/galeed
            </a>
            . Abierto a encargos de interfaz, audio y prototipos.
          </p>
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              ["Base", "CDMX"],
              ["Firma", "@galeed"],
              ["Ahora", "Meow Audio"],
            ].map(([term, detail]) => (
              <div key={term} className="bg-bg px-4 py-3">
                <dt className="font-mono text-xs tracking-widest text-muted uppercase">{term}</dt>
                <dd className="mt-1">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="habilidades" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-section sm:px-8">
        <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">03 — Habilidades</p>
        <h2 className="font-display mt-3 max-w-xl text-3xl sm:text-4xl">Oficio en una hoja, sin barras de porcentaje.</h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {skills.map((skill) => (
            <li key={skill.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6">
              <span className="font-display text-lg">{skill.label}</span>
              <span className="text-muted">{skill.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Work() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const visible = projects.filter((project) => filter === "todos" || project.category === filter);

  return (
    <section id="proyectos" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-section sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">04 — Proyectos</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Piezas en GitHub.</h2>
            <p className="mt-3 max-w-xl text-muted">
              Pasa el cursor para leer la nota. En el teléfono, toca «Nota». El número de catálogo no cambia al filtrar.
            </p>
          </div>
          <p className="font-mono text-sm text-muted tabular-nums" aria-live="polite">
            {visible.length.toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Filtrar por categoría">
          {categories.map((category) => {
            const selected = filter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "chip min-h-11 border px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
                  selected ? "border-accent bg-accent text-accent-fg" : "border-border bg-chip text-fg",
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <article
                className="project-card group flex h-full flex-col p-4 sm:p-5"
                data-open={openSlug === project.slug ? "true" : "false"}
              >
                <div className="flex items-center justify-between gap-3 font-mono text-xs tracking-widest text-muted uppercase">
                  <span>{project.index}</span>
                  <span className="text-accent">{project.category}</span>
                </div>
                <h3 className="font-display mt-3 text-2xl leading-tight">{project.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {project.language} · {project.year} · {project.repo}
                </p>
                <div className="blurb-clip">
                  <p className="text-sm text-muted">{project.blurb}</p>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-auto sm:pt-5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1 border border-border px-3 text-sm hover:border-accent"
                  >
                    GitHub <ArrowUpRight className="size-4" />
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-1 px-3 text-sm text-accent hover:underline"
                    >
                      Demo <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                  <button
                    type="button"
                    className="note-toggle min-h-11 items-center px-3 text-sm text-muted"
                    aria-expanded={openSlug === project.slug}
                    onClick={() => setOpenSlug((current) => (current === project.slug ? null : project.slug))}
                  >
                    {openSlug === project.slug ? "Ocultar nota" : "Nota"}
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [receipt, setReceipt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setReceipt(null);
      return;
    }
    setErrors({});
    const stamp = new Date().toLocaleString("es-MX", { hour12: false });
    const block = [
      `para: github.com/galeed`,
      `de: ${parsed.data.name} <${parsed.data.email}>`,
      `fecha: ${stamp}`,
      "",
      parsed.data.message,
    ].join("\n");
    setReceipt(block);
    setCopied(false);
    try {
      await navigator.clipboard.writeText(block);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    form.reset();
  }

  return (
    <section id="contacto" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-section sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">05 — Contacto</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">Escribe. El mensaje se queda en tu portapapeles.</h2>
          <p className="mt-4 text-muted">
            No hay buzón detrás de este formulario. Al enviar, armo un recibo y lo copio para que lo pegues donde
            quieras — el canal real es GitHub.
          </p>
          <a
            href="https://github.com/galeed"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-accent"
          >
            <Github className="size-4" />
            Abrir el perfil
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {receipt ? (
          <div className="border border-border bg-surface p-4 sm:p-5">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              {copied ? "ok — copiado" : "ok — copia manual"}
            </p>
            <pre className="mt-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-fg">{receipt}</pre>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-2 bg-accent px-4 text-sm text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(receipt);
                    setCopied(true);
                  } catch {
                    setCopied(false);
                  }
                }}
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copiado" : "Copiar de nuevo"}
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center border border-border px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]"
                onClick={() => setReceipt(null)}
              >
                Escribir otro
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-4">
            <Field label="Nombre" name="name" error={errors.name} autoComplete="name" />
            <Field label="Correo" name="email" type="email" error={errors.email} autoComplete="email" />
            <label className="grid gap-2 text-sm">
              <span className="font-mono text-xs tracking-widest text-muted uppercase">Mensaje</span>
              <textarea
                name="message"
                rows={5}
                required
                suppressHydrationWarning
                className="min-h-32 resize-y border border-border bg-surface px-3 py-3 text-fg outline-none placeholder:text-muted focus:border-accent"
                placeholder="Un proyecto, una duda, un encargo."
              />
              {errors.message ? (
                <span role="alert" className="text-accent">
                  {errors.message}
                </span>
              ) : null}
            </label>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center bg-accent px-4 text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Preparar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-mono text-xs tracking-widest text-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        suppressHydrationWarning
        className="min-h-11 border border-border bg-surface px-3 text-fg outline-none placeholder:text-muted focus:border-accent"
      />
      {error ? (
        <span role="alert" className="text-accent">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function SiteFooter({ themeLabel }: { themeLabel: string }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Guillaume</p>
          <p className="mt-2 text-sm text-muted">galeed · Ciudad de México · {new Date().getFullYear()}</p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Índice</p>
          <ul className="mt-3 space-y-1 text-sm">
            {[
              ["#acerca", "Acerca de"],
              ["#habilidades", "Habilidades"],
              ["#proyectos", "Proyectos"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-11 items-center hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Colofón</p>
          <p className="mt-3 text-sm text-muted">
            Piel activa: {themeLabel}. El estilo vive en este navegador. Sin rastreadores. Pulsa / para el editor.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <Clock />
            <span aria-hidden>·</span>
            <span>sys ok</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Clock() {
  const [now, setNow] = useState("--:--:--");
  useEffect(() => {
    const tick = () => setNow(new Date().toLocaleTimeString("es-MX", { hour12: false }));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="tabular-nums">{now}</span>;
}
