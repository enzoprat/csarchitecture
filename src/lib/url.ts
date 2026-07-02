/**
 * Préfixe un chemin interne avec la base du site (import.meta.env.BASE_URL).
 * Fonctionne en dev, sur GitHub Pages (/csarchitecture/) et sur un domaine racine.
 * Usage : withBase("/references/") -> "/csarchitecture/references/"
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
