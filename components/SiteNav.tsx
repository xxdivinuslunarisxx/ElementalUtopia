"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

type NavLinkItem = { href: string; label: string; cta?: boolean };
type NavGroup = { label: string; id: string; items: NavLinkItem[] };
type NavEntry = NavLinkItem | NavGroup;

const navItems: NavEntry[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  {
    label: "About",
    id: "about-menu",
    items: [
      { href: "/about", label: "Our Story" },
      { href: "/logo", label: "Our Logo" },
    ],
  },
  {
    label: "Coffee Lab",
    id: "coffee-lab-menu",
    items: [
      { href: "/experiments", label: "Experiments" },
      { href: "/species", label: "Coffee Species" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/connect", label: "Contact" },
  // Call-to-action: rendered as a primary button at the end of the nav.
  { href: "/booking", label: "Book", cta: true },
];

function isGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavDropdown({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  // True between a pointer press and its click, so a mouse/tap on another
  // menu item isn't swallowed by this list collapsing on blur mid-click.
  const pointerActive = useRef(false);
  const groupActive = group.items.some((item) => isActive(pathname, item.href));

  // Close on outside click/tap (on "click", so a tap on another menu item
  // completes before this list collapses) and on Escape (returning focus to the button).
  useEffect(() => {
    if (!open) return;

    function onPointerDown() {
      pointerActive.current = true;
    }

    function onOutsideClick(event: MouseEvent) {
      pointerActive.current = false;
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("click", onOutsideClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("click", onOutsideClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="navGroup"
      ref={wrapper}
      onBlur={(event) => {
        // Close when keyboard focus leaves the group (pointer clicks are
        // handled by the outside-click listener instead).
        if (pointerActive.current) return;
        if (!wrapper.current?.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={button}
        type="button"
        className={`navLink navGroupButton ${groupActive ? "navLinkActive" : ""}`}
        aria-expanded={open}
        aria-controls={group.id}
        onClick={() => setOpen((value) => !value)}
      >
        {group.label}
        <span className="navGroupCaret" aria-hidden="true">
          ▾
        </span>
      </button>

      <ul
        id={group.id}
        className={`navGroupList ${open ? "navGroupListOpen" : ""}`}
      >
        {group.items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                className={`navLink ${active ? "navLinkActive" : ""}`}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  setOpen(false);
                  onNavigate();
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

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
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "X" : "☰"}</span>
          {/*Button image for Mobile*/}
        </button>
        <div className={`navLinks ${open ? "navLinksOpen" : ""}`} id="primary-menu">
          {navItems.map((entry) => {
            if (isGroup(entry)) {
              return (
                <NavDropdown
                  key={entry.id}
                  group={entry}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              );
            }

            const active = isActive(pathname, entry.href);
            const className = entry.cta
              ? "button buttonPrimary navCta"
              : `navLink ${active ? "navLinkActive" : ""}`;

            return (
              <Link
                className={className}
                href={entry.href}
                key={entry.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {entry.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
