export type Category = "audio" | "creativo" | "juego" | "herramienta";

export type Project = {
  slug: string;
  index: string;
  name: string;
  repo: string;
  href: string;
  live?: string;
  language: string;
  year: string;
  category: Category;
  blurb: string;
};

export const categories: { id: "todos" | Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "audio", label: "Audio" },
  { id: "creativo", label: "Creativo" },
  { id: "juego", label: "Juego" },
  { id: "herramienta", label: "Herramienta" },
];

export const projects: Project[] = [
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
    blurb:
      "Reproductor de audio local con skins Classic, TUI, Distros y Seasons. Incluye crossfade, normalización y limitador.",
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
    blurb:
      "La misma cabina, en beta para el teléfono: skins, cola y controles pensados para el pulgar.",
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
    blurb:
      "Mesa de mastering en el navegador. Escuchar, comparar y pulir una mezcla sin salir de la pestaña.",
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
    blurb:
      "Consola para mezclar y masterizar con presets raw, industrial y eufórico. Más cabina que formulario.",
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
    blurb:
      "Estudio de pixel art con mascota gato. Cuadrícula nítida, paleta cálida y export listo para sprite.",
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
    blurb: "Editor HTML visual con vista previa en vivo. Escribir, mirar y ajustar en el mismo lienzo.",
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
    blurb: "El universo Meow reducido a caracteres. Una interfaz que cabe en una terminal.",
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
    blurb: "Prototipo de plataformas. Saltos cortos, HUD simple y un loop para probar el feel antes que el lore.",
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
    blurb: "Simulador orbital en canvas, con un HUD encima de los planetas. Lectura juguetona del sistema solar.",
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
    blurb: "Máquina corta para combinar ideas y salir del bloqueo. Directa al grano, sin ceremonia.",
  },
];

export const skills: { label: string; detail: string }[] = [
  { label: "Interfaz", detail: "HTML, CSS, React, Astro, Tailwind" },
  { label: "Audio", detail: "Reproductores, skins, crossfade, mastering" },
  { label: "Imagen", detail: "Pixel art, iconos, sistemas de marca" },
  { label: "Juego", detail: "Canvas, plataformas, órbitas" },
  { label: "Tipo", detail: "TypeScript, editores, generadores" },
  { label: "Publicación", detail: "GitHub Pages y sitios estáticos" },
];
