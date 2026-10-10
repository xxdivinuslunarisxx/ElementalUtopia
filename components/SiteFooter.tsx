import Link from "next/link";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/siteConfig";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Book" },
  { href: "/experiments", label: "Coffee Lab" },
  { href: "/species", label: "Coffee Species" },
  { href: "/connect", label: "Connect" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <p>Elemental Utopia</p>
        <p>Specialty coffee driven by science and flavour exploration.</p>
      </div>

      <nav className="footerLinks" aria-label="Footer">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="footerContact">
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          Instagram @{INSTAGRAM_HANDLE}
        </a>
      </div>

      <p className="footerCopyright">
        © {year} Elemental Utopia. All rights reserved.
      </p>
    </footer>
  );
}
