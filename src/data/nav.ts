/**
 * Primary navigation. Order here is the order shown in the header and footer.
 * `path` values are root-relative; links are made base-aware at render time.
 */
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Visit", path: "/info" },
  { label: "About", path: "/about" },
  { label: "Cookbook", path: "/cookbook" },
  { label: "Gallery", path: "/gallery" },
  { label: "Around Us", path: "/around" },
] as const;
