import { useEffect, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { THEME_IDS, THEME_META, type ThemeId, useStyle } from "@/components/portfolio/use-style";

const SWATCH: Record<ThemeId, [string, string, string]> = {
  matrix: ["swatch-matrix", "swatch-matrix-accent", "swatch-matrix-ink"],
  amber: ["swatch-amber", "swatch-amber-accent", "swatch-amber-ink"],
  brutal: ["swatch-brutal", "swatch-brutal-accent", "swatch-brutal-ink"],
  editorial: ["swatch-editorial", "swatch-editorial-accent", "swatch-editorial-ink"],
};

export function StyleDock() {
  const { prefs, setTheme, setScan, setGlow, setDensity } = useStyle();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable);
      if (typing) return;
      if (event.key === "/") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed right-3 bottom-3 z-40 flex flex-col items-end gap-2 sm:right-5 sm:bottom-5">
      {open ? (
        <section
          id="editor-estilo"
          aria-label="Editor de estilo"
          className="w-[min(100vw-1.5rem,22rem)] border border-border bg-surface p-4 text-fg shadow-card"
        >
          <header className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">Estilo.sys</p>
              <h2 className="font-display text-xl leading-tight">Editor de estilo</h2>
              <p className="mt-1 text-sm text-muted">El contenido no cambia. Cambia la piel.</p>
            </div>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-border text-fg transition-transform duration-150 ease-out active:scale-[0.96]"
              onClick={() => setOpen(false)}
              aria-label="Cerrar editor de estilo"
            >
              <X className="size-4" />
            </button>
          </header>

          <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Tema">
            {THEME_IDS.map((id) => {
              const selected = prefs.theme === id;
              const [bg, accent, ink] = SWATCH[id];
              return (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setTheme(id)}
                  className={cn(
                    "flex min-h-11 items-center gap-2 border px-2 py-2 text-left transition-transform duration-150 ease-out active:scale-[0.96]",
                    selected ? "border-accent bg-chip" : "border-border",
                  )}
                >
                  <span className="flex h-8 w-8 shrink-0 overflow-hidden border border-border" aria-hidden>
                    <span className={cn("w-1/2", bg)} />
                    <span className="flex w-1/2 flex-col">
                      <span className={cn("h-1/2", accent)} />
                      <span className={cn("h-1/2", ink)} />
                    </span>
                  </span>
                  <span>
                    <span className="block text-sm leading-tight">{THEME_META[id].label}</span>
                    <span className="block text-xs text-muted">{THEME_META[id].hint}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <fieldset className="mt-4 border-0 p-0">
            <legend className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">Barrido</legend>
            <button
              type="button"
              aria-pressed={prefs.scan}
              onClick={() => setScan(!prefs.scan)}
              className={cn(
                "min-h-11 w-full border px-3 text-left text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
                prefs.scan ? "border-accent text-accent" : "border-border text-muted",
              )}
            >
              {prefs.scan ? "Líneas de barrido activas" : "Líneas de barrido apagadas"}
            </button>
            <p className="mt-1 text-xs text-muted">En brutalista y editorial el barrido se queda fuera.</p>
          </fieldset>

          <Segment
            label="Resplandor"
            value={prefs.glow}
            options={[
              { id: "off", label: "Apagado" },
              { id: "soft", label: "Suave" },
              { id: "hot", label: "Alto" },
            ]}
            onChange={setGlow}
          />
          <Segment
            label="Aire"
            value={prefs.density}
            options={[
              { id: "compact", label: "Justo" },
              { id: "roomy", label: "Amplio" },
            ]}
            onChange={setDensity}
          />
        </section>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="editor-estilo"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-2 border border-border bg-surface px-3 font-mono text-xs tracking-widest text-fg uppercase shadow-card transition-transform duration-150 ease-out active:scale-[0.96]"
      >
        <SlidersHorizontal className="size-4 text-accent" />
        {open ? "Cerrar" : "Estilo"}
        <span className="text-muted">/</span>
      </button>
    </div>
  );
}

function Segment<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (next: T) => void;
}) {
  return (
    <fieldset className="mt-4 border-0 p-0">
      <legend className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">{label}</legend>
      <div className={cn("grid gap-2", options.length === 3 ? "grid-cols-3" : "grid-cols-2")}>
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                "min-h-11 border px-2 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
                selected ? "border-accent bg-accent text-accent-fg" : "border-border text-fg",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
