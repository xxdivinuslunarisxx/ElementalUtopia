import type { Metadata } from "next";
import { LogoMark } from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Logo",
  description:
    "The meaning behind the Elemental Utopia logo: earth, water, air, fire, and the sun."
};

const elements = [
  {
    name: "Earth",
    body: "Grounding and foundation, from sourcing to preparation."
  },
  {
    name: "Water",
    body: "Flow and balance, shaping extraction and bringing everything together smoothly."
  },
  {
    name: "Air",
    body: "Precision and clarity, the attention to detail in every step."
  },
  {
    name: "Fire",
    body: "Transformation, where raw ingredients become something bold, rich, and alive."
  },
  {
    name: "The Sun",
    body: "Warmth, intention, energy, and the life behind every drink we serve."
  }
];

export default function LogoPage() {
  return (
    <div className="pageStack">
      <section className="pageHero logoHero">
        <LogoMark priority className="logoPageMark" />
        <div>
          <h1>Our Logo</h1>
          <p>
            The logo is made up of the four elements and the sun. Each part
            represents a core piece of the process behind every coffee we craft.
          </p>
        </div>
      </section>

      <section className="elementGrid" aria-label="Logo element meanings">
        {elements.map((element) => (
          <article className="elementCard" key={element.name}>
            <h2>{element.name}</h2>
            <p>{element.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
