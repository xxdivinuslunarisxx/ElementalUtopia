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
    <>
      <section className="homebigbox">
        <div className="homevisualbox">
          <LogoMark priority className="homeLogo" />
        </div>
        <div className="hometextbox">
          <h1>Elemental Utopia</h1>
          <p className="heroSubtitle">
            Specialty Coffee / Coffee Science / Extraction Focus
          </p>
          <p>
            A UK-based specialty coffee brand built around experimentation,
            flavour profiling, and a scientific approach to espresso and coffee
            extraction.
          </p>
          <div className="buttonRow">
            <Link className="button buttonPrimary" href="/menu">
              Explore Menu
            </Link>
            <Link className="button buttonSecondary" href="/logo">
              View Logo Story
            </Link>
          </div>
        </div>
      </section>

      <section className="contentBand">
        <div className="sectionHeader">
          <h2>Coffee Beyond Routine</h2>
          <p>
            Elemental Utopia treats coffee as craft, science, and a moment worth
            noticing.
          </p>
        </div>
        <div className="featureGrid">
          {focusAreas.map((area) => (
            <article className="featureCard" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
