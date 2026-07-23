/**
 * Base-aware URL helpers.
 *
 * GitHub Pages may serve the site from the domain root ("/") or from a project
 * sub-path ("/repo-name/"). Building every internal link through `href()` keeps
 * navigation, assets, and canonical URLs correct in both cases automatically.
 */

const BASE = import.meta.env.BASE_URL; // "/" or "/repo-name/"

/** Build an internal link that respects the configured base path. */
export function href(path = "/"): string {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}` || "/";
}

/** Resolve a path to an absolute URL for canonical / Open Graph tags. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const rel = href(path);
  return site ? new URL(rel, site).toString() : rel;
}

/** True when `path` is the current page (used to mark active nav links). */
export function isActive(current: string, path: string): boolean {
  const norm = (p: string) => {
    const stripped = p.replace(BASE, "/").replace(/\/+/g, "/");
    return stripped !== "/" && stripped.endsWith("/")
      ? stripped.slice(0, -1)
      : stripped;
  };
  const c = norm(current);
  const p = norm(path);
  if (p === "/") return c === "/";
  return c === p || c.startsWith(`${p}/`);
}
