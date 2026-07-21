import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";

const focusAreas = [
  {
    title: "Extraction first",
    body: "Every drink starts with dialling in: grind, dose, yield, time, and taste all matter before the cup reaches someone."
  },
  {
    title: "Built to move",
    body: "The setup is portable by design, so the coffee can show up in different spaces without treating quality as optional."
  },
  {
    title: "Flavour led",
    body: "The aim is clarity, sweetness, and depth - the kind of cup that makes familiar coffee feel newly discovered."
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="homeSection">
        <div className="homebigbox">
          <div className="homevisualbox">
            <LogoMark priority className="homeLogo" />
          </div>
          <div className="hometextbox">
            <h1>
              Elemental Utopia
            </h1>
            <p className="heroSubtitle">
              Specialty Coffee / Coffee Science / Extraction Focus
            </p>
            <p>
              A UK-based specialty coffee brand built around experimentation,
              flavour profiling, and a scientific approach to espresso and
              coffee extraction.
            </p>
            <div className="buttonRow">
              <Link
                className="button buttonPrimary"
                href="/menu"
              >
                Explore Menu
              </Link>
              <Link
                className="button buttonSecondary"
                href="/connect"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Upcoming Event */}
      <section className="homeSection">

        <div className="elementalEvent">

          <Link
            className="homeEvent"
            href="/booking"
          >

            <div className="homeEventContent">

              <p className="homeEventLabel">
                Now Booking
              </p>

              <h2>
                Specialty Coffee
                <br />
                Pop-Ups
              </h2>

              <p className="homeEventDescription">
                Bring Elemental Utopia to your workplace,
                event, or community. Specialty coffee,
                experiments, and conversations.
              </p>

              <div className="homeEventDetails">

                <span>
                  West London
                </span>

                <span>
                  Events & Private Bookings
                </span>

              </div>

              <span className="homeEventLink">
                Enquire →
              </span>

            </div>

          </Link>

        </div>

      </section>

      {/* Brand Philosophy */}
      <section className="homeSection">
        <div className="contentBand">
          <div className="sectionHeader">
            <h2>
              Coffee Beyond Routine
            </h2>
            <p>
              Elemental Utopia treats coffee as craft, science,
              and a moment worth noticing.
            </p>
          </div>

          <div className="featureGrid">
            {focusAreas.map((area) => (
              <article
                className="featureCard"
                key={area.title}
              >
                <h3>
                  {area.title}
                </h3>
                <p>
                  {area.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}