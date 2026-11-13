import { createContext, useContext } from "react";

export const THEME_IDS = ["matrix", "amber", "brutal", "editorial"] as const;
export type ThemeId = (typeof THEME_IDS)[number];
export type Glow = "off" | "soft" | "hot";
export type Density = "compact" | "roomy";

export type StylePrefs = {
  theme: ThemeId;
  scan: boolean;
  glow: Glow;
  density: Density;
};

export const STYLE_KEY = "galeed-style-v1";

export const DEFAULT_PREFS: StylePrefs = {
  theme: "matrix",
  scan: true,
  glow: "soft",
  density: "roomy",
};

export const THEME_META: Record<ThemeId, { label: string; hint: string }> = {
  matrix: { label: "Matrix", hint: "Fósforo sobre negro" },
  amber: { label: "Ámbar", hint: "Terminal cálida" },
  brutal: { label: "Brutalista", hint: "Papel, borde, sombra dura" },
  editorial: { label: "Editorial", hint: "Revista, serif, aire" },
};

const THEMES = new Set<string>(THEME_IDS);

export function readPrefs(): StylePrefs {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    const raw = localStorage.getItem(STYLE_KEY);
    if (!raw) return DEFAULT_PREFS;
    const parsed = JSON.parse(raw) as Partial<StylePrefs>;
    const theme = THEMES.has(parsed.theme ?? "") ? (parsed.theme as ThemeId) : DEFAULT_PREFS.theme;
    const glow: Glow = parsed.glow === "off" || parsed.glow === "hot" || parsed.glow === "soft" ? parsed.glow : "soft";
    const density: Density = parsed.density === "compact" ? "compact" : "roomy";
    return {
      theme,
      scan: typeof parsed.scan === "boolean" ? parsed.scan : theme === "matrix" || theme === "amber",
      glow,
      density,
    };
  } catch {
    return DEFAULT_PREFS;
  }
}

export function applyPrefs(prefs: StylePrefs) {
  const root = document.documentElement;
  root.dataset.theme = prefs.theme;
  root.dataset.scan = prefs.scan ? "on" : "off";
  root.dataset.glow = prefs.glow;
  root.dataset.density = prefs.density;
  const themeColor = prefs.theme === "brutal" || prefs.theme === "editorial" ? "#efe6d4" : prefs.theme === "amber" ? "#140e06" : "#06110b";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);
}

export type StyleApi = {
  prefs: StylePrefs;
  ready: boolean;
  setTheme: (theme: ThemeId) => void;
  setScan: (scan: boolean) => void;
  setGlow: (glow: Glow) => void;
  setDensity: (density: Density) => void;
};

export const StyleContext = createContext<StyleApi | null>(null);

export function useStyle() {
  const ctx = useContext(StyleContext);
  if (!ctx) throw new Error("useStyle necesita StyleProvider");
  return ctx;
}
