import { CopyEmail } from "@/components/CopyEmail";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Elemental Utopia through social media, email, and future events.",
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

      <section className="connectGrid">
        <article className="connectCard">
          <h2>📸 Instagram</h2>

          <p>
            Behind-the-scenes brewing, coffee experiments, and updates from the
            journey.
          </p>

          <Link
            href="https://www.instagram.com/elemental_utopia_coffee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile →
          </Link>
        </article>

        <article className="connectCard">
          <h2>✉️ Email</h2>

          <p>
            Questions, collaborations, or event enquiries are always welcome.
          </p>

          <Link href="mailto:xxdivinuslunarisxx@gmail.com">
            Send an Email →
          </Link>
          <span>
            or click here to copy:
          </span>

          <CopyEmail />
        </article>

        <article className="connectCard">
          <h2>📍 Upcoming Market</h2>
          <p> 
            We are currently preparing our mobile coffee setup and looking for
            opportunities to bring specialty coffee to events, workplaces, and
            communities across West London.
          </p>
        </article>

        <article className="connectCard">
          <h2>🎥 More Content</h2>

          <p>
            Future brewing guides, educational videos, and coffee research.
          </p>

          <span className="comingSoon">Coming Soon</span>
        </article>
      </section>
    </main>
  );
}