"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/logo", label: "Logo" },
  { href: "/experiments", label: "Experiments" },
  { href: "/connect", label: "Connect"}
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <nav className="siteNav" aria-label="Primary navigation">
        <Link className="brandLink" href="/" onClick={() => setOpen(false)}>
          Elemental Utopia
        </Link>
        <ThemeToggle />
        <button
          className="menuToggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "X" : "☰"}   
          {/*Button image for Mobile*/}
        </button>
        <div className={`navLinks ${open ? "navLinksOpen" : ""}`} id="primary-menu">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={`navLink ${active ? "navLinkActive" : ""}`}
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
