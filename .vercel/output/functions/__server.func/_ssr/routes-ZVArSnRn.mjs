import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Copy, i as Github, o as Check, r as SlidersHorizontal, s as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as email } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ZVArSnRn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "todos",
		label: "Todos"
	},
	{
		id: "audio",
		label: "Audio"
	},
	{
		id: "creativo",
		label: "Creativo"
	},
	{
		id: "juego",
		label: "Juego"
	},
	{
		id: "herramienta",
		label: "Herramienta"
	}
];
var projects = [
	{
		slug: "meow-audio",
		index: "01",
		name: "Meow Audio",
		repo: "Meow-Audio-App-PC",
		href: "https://github.com/galeed/Meow-Audio-App-PC",
		live: "https://galeed.github.io/Meow-Audio-App-PC/",
		language: "JavaScript",
		year: "2026",
		category: "audio",
		blurb: "Reproductor de audio local con skins Classic, TUI, Distros y Seasons. Incluye crossfade, normalización y limitador."
	},
	{
		slug: "meow-audio-android",
		index: "02",
		name: "Meow Audio Android",
		repo: "BETA-Meow-Audio-Android",
		href: "https://github.com/galeed/BETA-Meow-Audio-Android",
		live: "https://galeed.github.io/BETA-Meow-Audio-Android/",
		language: "JavaScript",
		year: "2026",
		category: "audio",
		blurb: "La misma cabina, en beta para el teléfono: skins, cola y controles pensados para el pulgar."
	},
	{
		slug: "masterlab",
		index: "03",
		name: "MasterLab",
		repo: "Meow-Mastering-Plus",
		href: "https://github.com/galeed/Meow-Mastering-Plus",
		live: "https://galeed.github.io/Meow-Mastering-Plus/",
		language: "JavaScript",
		year: "2026",
		category: "audio",
		blurb: "Mesa de mastering en el navegador. Escuchar, comparar y pulir una mezcla sin salir de la pestaña."
	},
	{
		slug: "hardstyle",
		index: "04",
		name: "Hardstyle Studio",
		repo: "hardstyle-studio",
		href: "https://github.com/galeed/hardstyle-studio",
		live: "https://galeed.github.io/hardstyle-studio/",
		language: "TypeScript",
		year: "2026",
		category: "audio",
		blurb: "Consola para mezclar y masterizar con presets raw, industrial y eufórico. Más cabina que formulario."
	},
	{
		slug: "meow-draw",
		index: "05",
		name: "Meow Draw",
		repo: "Meow-Draw",
		href: "https://github.com/galeed/Meow-Draw",
		live: "https://galeed.github.io/Meow-Draw/",
		language: "JavaScript",
		year: "2026",
		category: "creativo",
		blurb: "Estudio de pixel art con mascota gato. Cuadrícula nítida, paleta cálida y export listo para sprite."
	},
	{
		slug: "meow-code",
		index: "06",
		name: "Meow Code",
		repo: "Meow-Code-App",
		href: "https://github.com/galeed/Meow-Code-App",
		live: "https://galeed.github.io/Meow-Code-App/",
		language: "HTML",
		year: "2026",
		category: "herramienta",
		blurb: "Editor HTML visual con vista previa en vivo. Escribir, mirar y ajustar en el mismo lienzo."
	},
	{
		slug: "meow-ascii",
		index: "07",
		name: "Meow ASCII",
		repo: "Meow-FWT",
		href: "https://github.com/galeed/Meow-FWT",
		live: "https://galeed.github.io/Meow-FWT/",
		language: "HTML",
		year: "2026",
		category: "creativo",
		blurb: "El universo Meow reducido a caracteres. Una interfaz que cabe en una terminal."
	},
	{
		slug: "salto",
		index: "08",
		name: "Salto Estelar",
		repo: "Plataformas",
		href: "https://github.com/galeed/Plataformas",
		live: "https://galeed.github.io/Plataformas/",
		language: "HTML",
		year: "2026",
		category: "juego",
		blurb: "Prototipo de plataformas. Saltos cortos, HUD simple y un loop para probar el feel antes que el lore."
	},
	{
		slug: "solar",
		index: "09",
		name: "Sistema solar",
		repo: "solar-system-moustache-lab",
		href: "https://github.com/galeed/solar-system-moustache-lab",
		language: "JavaScript",
		year: "2026",
		category: "juego",
		blurb: "Simulador orbital en canvas, con un HUD encima de los planetas. Lectura juguetona del sistema solar."
	},
	{
		slug: "generador",
		index: "10",
		name: "Generador creativo",
		repo: "generador-creativo",
		href: "https://github.com/galeed/generador-creativo",
		live: "https://galeed.github.io/generador-creativo/",
		language: "JavaScript",
		year: "2026",
		category: "herramienta",
		blurb: "Máquina corta para combinar ideas y salir del bloqueo. Directa al grano, sin ceremonia."
	}
];
var skills = [
	{
		label: "Interfaz",
		detail: "HTML, CSS, React, Astro, Tailwind"
	},
	{
		label: "Audio",
		detail: "Reproductores, skins, crossfade, mastering"
	},
	{
		label: "Imagen",
		detail: "Pixel art, iconos, sistemas de marca"
	},
	{
		label: "Juego",
		detail: "Canvas, plataformas, órbitas"
	},
	{
		label: "Tipo",
		detail: "TypeScript, editores, generadores"
	},
	{
		label: "Publicación",
		detail: "GitHub Pages y sitios estáticos"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var THEME_IDS = [
	"matrix",
	"amber",
	"brutal",
	"editorial"
];
var STYLE_KEY = "galeed-style-v1";
var DEFAULT_PREFS = {
	theme: "matrix",
	scan: true,
	glow: "soft",
	density: "roomy"
};
var THEME_META = {
	matrix: {
		label: "Matrix",
		hint: "Fósforo sobre negro"
	},
	amber: {
		label: "Ámbar",
		hint: "Terminal cálida"
	},
	brutal: {
		label: "Brutalista",
		hint: "Papel, borde, sombra dura"
	},
	editorial: {
		label: "Editorial",
		hint: "Revista, serif, aire"
	}
};
var THEMES = new Set(THEME_IDS);
function readPrefs() {
	if (typeof window === "undefined") return DEFAULT_PREFS;
	try {
		const raw = localStorage.getItem(STYLE_KEY);
		if (!raw) return DEFAULT_PREFS;
		const parsed = JSON.parse(raw);
		const theme = THEMES.has(parsed.theme ?? "") ? parsed.theme : DEFAULT_PREFS.theme;
		const glow = parsed.glow === "off" || parsed.glow === "hot" || parsed.glow === "soft" ? parsed.glow : "soft";
		const density = parsed.density === "compact" ? "compact" : "roomy";
		return {
			theme,
			scan: typeof parsed.scan === "boolean" ? parsed.scan : theme === "matrix" || theme === "amber",
			glow,
			density
		};
	} catch {
		return DEFAULT_PREFS;
	}
}
function applyPrefs(prefs) {
	const root = document.documentElement;
	root.dataset.theme = prefs.theme;
	root.dataset.scan = prefs.scan ? "on" : "off";
	root.dataset.glow = prefs.glow;
	root.dataset.density = prefs.density;
	const themeColor = prefs.theme === "brutal" || prefs.theme === "editorial" ? "#efe6d4" : prefs.theme === "amber" ? "#140e06" : "#06110b";
	document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", themeColor);
}
var StyleContext = (0, import_react.createContext)(null);
function useStyle() {
	const ctx = (0, import_react.useContext)(StyleContext);
	if (!ctx) throw new Error("useStyle necesita StyleProvider");
	return ctx;
}
var SWATCH = {
	matrix: [
		"swatch-matrix",
		"swatch-matrix-accent",
		"swatch-matrix-ink"
	],
	amber: [
		"swatch-amber",
		"swatch-amber-accent",
		"swatch-amber-ink"
	],
	brutal: [
		"swatch-brutal",
		"swatch-brutal-accent",
		"swatch-brutal-ink"
	],
	editorial: [
		"swatch-editorial",
		"swatch-editorial-accent",
		"swatch-editorial-ink"
	]
};
function StyleDock() {
	const { prefs, setTheme, setScan, setGlow, setDensity } = useStyle();
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const target = event.target;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable) return;
			if (event.key === "/") {
				event.preventDefault();
				setOpen((value) => !value);
			}
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-3 bottom-3 z-40 flex flex-col items-end gap-2 sm:right-5 sm:bottom-5",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "editor-estilo",
			"aria-label": "Editor de estilo",
			className: "w-[min(100vw-1.5rem,22rem)] border border-border bg-surface p-4 text-fg shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-4 flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-accent uppercase",
							children: "Estilo.sys"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl leading-tight",
							children: "Editor de estilo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "El contenido no cambia. Cambia la piel."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center border border-border text-fg transition-transform duration-150 ease-out active:scale-[0.96]",
						onClick: () => setOpen(false),
						"aria-label": "Cerrar editor de estilo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					role: "radiogroup",
					"aria-label": "Tema",
					children: THEME_IDS.map((id) => {
						const selected = prefs.theme === id;
						const [bg, accent, ink] = SWATCH[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "radio",
							"aria-checked": selected,
							onClick: () => setTheme(id),
							className: cn("flex min-h-11 items-center gap-2 border px-2 py-2 text-left transition-transform duration-150 ease-out active:scale-[0.96]", selected ? "border-accent bg-chip" : "border-border"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex h-8 w-8 shrink-0 overflow-hidden border border-border",
								"aria-hidden": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-1/2", bg) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex w-1/2 flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1/2", accent) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1/2", ink) })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm leading-tight",
								children: THEME_META[id].label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: THEME_META[id].hint
							})] })]
						}, id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-4 border-0 p-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-2 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Barrido"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": prefs.scan,
							onClick: () => setScan(!prefs.scan),
							className: cn("min-h-11 w-full border px-3 text-left text-sm transition-transform duration-150 ease-out active:scale-[0.96]", prefs.scan ? "border-accent text-accent" : "border-border text-muted"),
							children: prefs.scan ? "Líneas de barrido activas" : "Líneas de barrido apagadas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "En brutalista y editorial el barrido se queda fuera."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
					label: "Resplandor",
					value: prefs.glow,
					options: [
						{
							id: "off",
							label: "Apagado"
						},
						{
							id: "soft",
							label: "Suave"
						},
						{
							id: "hot",
							label: "Alto"
						}
					],
					onChange: setGlow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
					label: "Aire",
					value: prefs.density,
					options: [{
						id: "compact",
						label: "Justo"
					}, {
						id: "roomy",
						label: "Amplio"
					}],
					onChange: setDensity
				})
			]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": open,
			"aria-controls": "editor-estilo",
			onClick: () => setOpen((value) => !value),
			className: "inline-flex min-h-11 items-center gap-2 border border-border bg-surface px-3 font-mono text-xs tracking-widest text-fg uppercase shadow-card transition-transform duration-150 ease-out active:scale-[0.96]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-accent" }),
				open ? "Cerrar" : "Estilo",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "/"
				})
			]
		})]
	});
}
function Segment({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "mt-4 border-0 p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "mb-2 font-mono text-xs tracking-widest text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid gap-2", options.length === 3 ? "grid-cols-3" : "grid-cols-2"),
			children: options.map((option) => {
				const selected = option.id === value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": selected,
					onClick: () => onChange(option.id),
					className: cn("min-h-11 border px-2 text-sm transition-transform duration-150 ease-out active:scale-[0.96]", selected ? "border-accent bg-accent text-accent-fg" : "border-border text-fg"),
					children: option.label
				}, option.id);
			})
		})]
	});
}
var contactSchema = object({
	name: string().trim().min(2, "Pon al menos dos letras."),
	email: email("Ese correo no parece válido."),
	message: string().trim().min(12, "Cuéntame un poco más, aunque sea una frase.")
});
function HomePage() {
	const [prefs, setPrefs] = (0, import_react.useState)(DEFAULT_PREFS);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setPrefs(readPrefs());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		applyPrefs(prefs);
		localStorage.setItem(STYLE_KEY, JSON.stringify(prefs));
	}, [prefs, ready]);
	const api = (0, import_react.useMemo)(() => ({
		prefs,
		ready,
		setTheme: (theme) => setPrefs((current) => ({
			...current,
			theme,
			scan: theme === "matrix" || theme === "amber" ? current.scan : false,
			glow: theme === "brutal" || theme === "editorial" ? "off" : current.glow === "off" ? "soft" : current.glow
		})),
		setScan: (scan) => setPrefs((current) => ({
			...current,
			scan
		})),
		setGlow: (glow) => setPrefs((current) => ({
			...current,
			glow
		})),
		setDensity: (density) => setPrefs((current) => ({
			...current,
			density
		}))
	}), [prefs, ready]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyleContext.Provider, {
		value: api,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Saltar al contenido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { themeLabel: THEME_META[prefs.theme].label }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						id: "contenido",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { themeLabel: THEME_META[prefs.theme].label })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleDock, {})
		]
	});
}
function SiteHeader({ themeLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-border bg-bg backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inicio",
					className: "font-mono text-sm tracking-wide",
					children: ["galeed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: ":~"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Secciones",
					className: "flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto text-sm sm:gap-3",
					children: [
						["#acerca", "Acerca"],
						["#habilidades", "Oficio"],
						["#proyectos", "Obra"],
						["#contacto", "Contacto"]
					].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "inline-flex min-h-11 shrink-0 items-center px-2 text-muted transition-colors duration-150 hover:text-fg",
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden font-mono text-xs tracking-widest text-muted uppercase lg:block",
					children: themeLabel
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.22em] text-accent uppercase",
				children: "01 — Portafolio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-medium sm:text-6xl",
				children: "Herramientas que se sienten como instrumentos."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-base text-muted sm:text-lg",
				children: "Soy Guillaume. En GitHub firmo galeed. Diseño audio, pixel y prototipos jugables, y este sitio cambia de piel sin cambiar de obra."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#proyectos",
					className: "inline-flex min-h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]",
					children: "Ver proyectos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://github.com/galeed",
					className: "inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm transition-transform duration-150 ease-out hover:border-accent active:scale-[0.96]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }), "github.com/galeed"]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
			className: "overflow-hidden border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-muted sm:text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: "galeed@cdmx"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [":~$ whoami", "\n"] }),
				"guillaume",
				"\n\n",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: "galeed@cdmx"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [":~$ ls ~/oficio", "\n"] }),
				"audio   pixel   prototipos   estilo",
				"\n\n",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: "galeed@cdmx"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [":~$ cat ahora.txt", "\n"] }),
				"Meow Audio, editores y un portafolio",
				"\n",
				"que se puede vestir de otra forma. ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "caret",
					"aria-hidden": true
				})
			]
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "acerca",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-section sm:px-8 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.22em] text-accent uppercase",
				children: "02 — Acerca de"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl sm:text-4xl",
				children: "Un archivo, no un escaparate."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-base",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Armo interfaces que se usan de verdad: reproductores con skins, un estudio de pixel, mesas de mastering y prototipos cortos de juego. El hilo es el mismo — consola, gato, ritmo — aunque el contenedor cambie." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							"Trabajo desde Ciudad de México. El código público vive en",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg underline decoration-border underline-offset-4 hover:decoration-accent",
								href: "https://github.com/galeed",
								children: "github.com/galeed"
							}),
							". Abierto a encargos de interfaz, audio y prototipos."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid gap-px border border-border bg-border sm:grid-cols-3",
						children: [
							["Base", "CDMX"],
							["Firma", "@galeed"],
							["Ahora", "Meow Audio"]
						].map(([term, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: term
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: detail
							})]
						}, term))
					})
				]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "habilidades",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-section sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-[0.22em] text-accent uppercase",
					children: "03 — Habilidades"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 max-w-xl text-3xl sm:text-4xl",
					children: "Oficio en una hoja, sin barras de porcentaje."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: skill.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: skill.detail
						})]
					}, skill.label))
				})
			]
		})
	});
}
function Work() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const [openSlug, setOpenSlug] = (0, import_react.useState)(null);
	const visible = projects.filter((project) => filter === "todos" || project.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proyectos",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-section sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-[0.22em] text-accent uppercase",
							children: "04 — Proyectos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-3 text-3xl sm:text-4xl",
							children: "Piezas en GitHub."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted",
							children: "Pasa el cursor para leer la nota. En el teléfono, toca «Nota». El número de catálogo no cambia al filtrar."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm text-muted tabular-nums",
						"aria-live": "polite",
						children: [
							visible.length.toString().padStart(2, "0"),
							" / ",
							projects.length.toString().padStart(2, "0")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					role: "radiogroup",
					"aria-label": "Filtrar por categoría",
					children: categories.map((category) => {
						const selected = filter === category.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "radio",
							"aria-checked": selected,
							onClick: () => setFilter(category.id),
							className: cn("chip min-h-11 border px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96]", selected ? "border-accent bg-accent text-accent-fg" : "border-border bg-chip text-fg"),
							children: category.label
						}, category.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "project-card group flex h-full flex-col p-4 sm:p-5",
						"data-open": openSlug === project.slug ? "true" : "false",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 font-mono text-xs tracking-widest text-muted uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.index }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: project.category
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-3 text-2xl leading-tight",
								children: project.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-xs text-muted",
								children: [
									project.language,
									" · ",
									project.year,
									" · ",
									project.repo
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "blurb-clip",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: project.blurb
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-center gap-2 sm:mt-auto sm:pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.href,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex min-h-11 items-center gap-1 border border-border px-3 text-sm hover:border-accent",
										children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
									}),
									project.live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.live,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex min-h-11 items-center gap-1 px-3 text-sm text-accent hover:underline",
										children: ["Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "note-toggle min-h-11 items-center px-3 text-sm text-muted",
										"aria-expanded": openSlug === project.slug,
										onClick: () => setOpenSlug((current) => current === project.slug ? null : project.slug),
										children: openSlug === project.slug ? "Ocultar nota" : "Nota"
									})
								]
							})
						]
					}) }, project.slug))
				})
			]
		})
	});
}
function Contact() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [receipt, setReceipt] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = Object.fromEntries(new FormData(form));
		const parsed = contactSchema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = String(issue.path[0] ?? "form");
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			setReceipt(null);
			return;
		}
		setErrors({});
		const stamp = (/* @__PURE__ */ new Date()).toLocaleString("es-MX", { hour12: false });
		const block = [
			`para: github.com/galeed`,
			`de: ${parsed.data.name} <${parsed.data.email}>`,
			`fecha: ${stamp}`,
			"",
			parsed.data.message
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-section sm:px-8 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-[0.22em] text-accent uppercase",
					children: "05 — Contacto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-3xl sm:text-4xl",
					children: "Escribe. El mensaje se queda en tu portapapeles."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "No hay buzón detrás de este formulario. Al enviar, armo un recibo y lo copio para que lo pegues donde quieras — el canal real es GitHub."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://github.com/galeed",
					className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }),
						"Abrir el perfil",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
					]
				})
			] }), receipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-surface p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-accent uppercase",
						children: copied ? "ok — copiado" : "ok — copia manual"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-fg",
						children: receipt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center gap-2 bg-accent px-4 text-sm text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]",
							onClick: async () => {
								try {
									await navigator.clipboard.writeText(receipt);
									setCopied(true);
								} catch {
									setCopied(false);
								}
							},
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copiado" : "Copiar de nuevo"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center border border-border px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
							onClick: () => setReceipt(null),
							children: "Escribir otro"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nombre",
						name: "name",
						error: errors.name,
						autoComplete: "name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Correo",
						name: "email",
						type: "email",
						error: errors.email,
						autoComplete: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "Mensaje"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 5,
								required: true,
								suppressHydrationWarning: true,
								className: "min-h-32 resize-y border border-border bg-surface px-3 py-3 text-fg outline-none placeholder:text-muted focus:border-accent",
								placeholder: "Un proyecto, una duda, un encargo."
							}),
							errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								role: "alert",
								className: "text-accent",
								children: errors.message
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "inline-flex min-h-11 items-center justify-center bg-accent px-4 text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Preparar mensaje"
					})
				]
			})]
		})
	});
}
function Field({ label, name, error, type = "text", autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tracking-widest text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name,
				type,
				autoComplete,
				required: true,
				suppressHydrationWarning: true,
				className: "min-h-11 border border-border bg-surface px-3 text-fg outline-none placeholder:text-muted focus:border-accent"
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				role: "alert",
				className: "text-accent",
				children: error
			}) : null
		]
	});
}
function SiteFooter({ themeLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Guillaume"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: ["galeed · Ciudad de México · ", (/* @__PURE__ */ new Date()).getFullYear()]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-muted uppercase",
					children: "Índice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1 text-sm",
					children: [
						["#acerca", "Acerca de"],
						["#habilidades", "Habilidades"],
						["#proyectos", "Proyectos"],
						["#contacto", "Contacto"]
					].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "inline-flex min-h-11 items-center hover:text-accent",
						children: label
					}) }, href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted uppercase",
						children: "Colofón"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Piel activa: ",
							themeLabel,
							". El estilo vive en este navegador. Sin rastreadores. Pulsa / para el editor."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "sys ok" })
						]
					})
				] })
			]
		})
	});
}
function Clock() {
	const [now, setNow] = (0, import_react.useState)("--:--:--");
	(0, import_react.useEffect)(() => {
		const tick = () => setNow((/* @__PURE__ */ new Date()).toLocaleTimeString("es-MX", { hour12: false }));
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums",
		children: now
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
