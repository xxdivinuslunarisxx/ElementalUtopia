import { LogoMark } from "@/components/LogoMark";
import {
  CONTACT_EMAIL,
  GOOGLE_REVIEW_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/siteConfig";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Elemental Utopia. Leave a Google review, follow us on Instagram, get in touch, or book specialty coffee for your event.",
  alternates: {
    canonical: "https://elementalutopia.com/connect",
  },
};

export default function ConnectPage() {
  return (
    <div className="connectPage">
      <header className="connectHeader">
        <LogoMark className="connectLogo" priority />
        <h1>Elemental Utopia</h1>
        <p className="connectIntro">
          Welcome. We&apos;re Elemental Utopia, and we serve specialty coffee.
          We&apos;d love to stay in touch.
        </p>
      </header>

      <nav className="connectLinks" aria-label="Ways to connect">
        <a
          className="connectLink connectLinkPrimary"
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave a Google review
        </a>

        <a
          className="connectLink"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram @{INSTAGRAM_HANDLE}
        </a>

        <a className="connectLink" href={`mailto:${CONTACT_EMAIL}`}>
          Email {CONTACT_EMAIL}
        </a>

        <Link className="connectLink" href="/booking">
          Book us for your event
        </Link>

        <Link className="connectLink" href="/">
          Visit the website
        </Link>

        <a className="connectLink connectLinkSubtle" href="/elemental-utopia.vcf">
          Save contact
        </a>
      </nav>
    </div>
  );
}
