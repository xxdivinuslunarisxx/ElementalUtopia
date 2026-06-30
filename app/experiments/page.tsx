import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Coffee extraction experiments from Elemental Utopia, covering grind, ratio, time, and flavour outcomes."
};

export default function ExperimentsPage() {
  return (
    <div className="pageStack">
      <section className="pageHero">
        <h1>Experiments</h1>
        <p>
          This page is ready for extraction notes once there is real experiment
          data to publish.
        </p>
        <div className="buttonRow">
          <Link className="button buttonPrimary" href="/menu">
            Explore Menu
          </Link>
          <Link className="button buttonSecondary" href="/about">
            Read the Story
          </Link>
        </div>
      </section>

      <section className="emptyState">
        <h2>Coming Soon</h2>
        <p>
          Future entries can live here as simple typed content: title, brew
          variables, flavour notes, and what changed between tests.
        </p>
      </section>
    </div>
  );
}
