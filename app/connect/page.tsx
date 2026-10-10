import { BookingButton } from "@/components/BookingButton";
import { CopyEmail } from "@/components/CopyEmail";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/siteConfig";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Elemental Utopia through Instagram, email, and upcoming markets and events across West London.",
  alternates: {
    canonical: "https://elementalutopia.com/connect",
  },
};

export default function ConnectPage() {
  return (
    <main className="connectPage">
      <header className="connectHeader">
        <p className="connectEyebrow">Elemental Utopia</p>

        <h1>Connect</h1>

        <p className="connectIntro">
          Whether you're curious about an experiment, have a coffee question,
          or simply want to follow the journey, here's where you can find
          Elemental Utopia.
        </p>
      </header>

      <section className="connectFeature" aria-labelledby="upcoming-market">
        <span className="eventBadge">Now Booking</span>

        <h2 id="upcoming-market">📍 Upcoming Market</h2>

        <p>
          We are currently preparing our mobile coffee setup and looking for
          opportunities to bring specialty coffee to events, workplaces, and
          communities across West London.
        </p>

        <p>
          Running a market, event or workplace day? Tell us the date, location
          and rough guest numbers and we'll get back to you with a quote.
        </p>

        <div className="connectFeatureActions">
          <BookingButton />
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Follow @{INSTAGRAM_HANDLE} for dates →
          </a>
        </div>
      </section>

      <section className="connectGrid">
        <article className="connectCard">
          <h2>📸 Instagram</h2>

          <p>
            Behind-the-scenes brewing, coffee experiments, and updates from the
            journey, including where to find us next.
          </p>

          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            @{INSTAGRAM_HANDLE} · View Profile →
          </a>
        </article>

        <article className="connectCard">
          <h2>✉️ Email</h2>

          <p>
            Questions, collaborations, or event enquiries are always welcome.
          </p>

          <a href={`mailto:${CONTACT_EMAIL}`}>Send an Email →</a>

          <span>or click here to copy:</span>

          <CopyEmail />
        </article>

        <article className="connectCard">
          <h2>🧪 Coffee Lab</h2>

          <p>
            Follow our brewing experiments and discover lesser-known coffee
            species.
          </p>

          <Link href="/experiments">Explore the Coffee Lab →</Link>
        </article>
      </section>
    </main>
  );
}
