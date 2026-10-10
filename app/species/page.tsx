import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coffee Species: Arabica, Stenophylla, Liberica & Excelsa",
  description:
    "A short guide to four coffee species (arabica, stenophylla, liberica and excelsa): where they come from, how they taste, and why lesser-known coffees may matter as the climate changes.",
  alternates: {
    canonical: "https://elementalutopia.com/species",
  },
};

type Species = {
  name: string;
  latin: string;
  tagline: string;
  origin: string;
  flavour: string;
  climate: string;
  interest: string;
  note?: string;
};

const SPECIES: Species[] = [
  {
    name: "Arabica",
    latin: "Coffea arabica",
    tagline: "The familiar favourite",
    origin:
      "Native to the highland forests of south-western Ethiopia and neighbouring areas. Today it is grown across the tropics, from Latin America to East Africa and Asia.",
    flavour:
      "The benchmark for specialty coffee: sweetness, bright acidity and a huge range of aromas, from floral and citrus to chocolate and stone fruit, depending on variety, origin and processing.",
    climate:
      "Prefers cool, stable conditions at altitude. It is sensitive to heat and drought and vulnerable to disease such as coffee leaf rust, and cultivated arabica has a narrow genetic base, which limits its ability to adapt.",
    interest:
      "Arabica makes up the majority of the world's coffee and almost all specialty coffee. Research suggests the land suitable for growing it is likely to shrink as temperatures rise, which is why scientists are looking again at other species.",
  },
  {
    name: "Stenophylla",
    latin: "Coffea stenophylla",
    tagline: "Arabica-like flavour, built for heat",
    origin:
      "Native to the forests of Upper West Africa: Guinea, Sierra Leone and Côte d'Ivoire. It was farmed in the region in the 19th century but fell out of use, and had not been recorded in the wild in Sierra Leone for decades until botanists found it again in 2018.",
    flavour:
      "In tasting trials published in 2021, expert panels found its flavour remarkably similar to good arabica, with natural sweetness, fruitiness, good body and lively acidity.",
    climate:
      "It grows naturally in a noticeably warmer climate than arabica. The same research found it tolerates average temperatures several degrees higher, a rare combination of heat tolerance and arabica-like taste.",
    interest:
      "Very little exists. The plants yield modestly and only small trial quantities are produced, so it is not yet a coffee you will find on café menus. Its potential for a warmer future is what makes it so exciting.",
    note:
      "We are exploring stenophylla and have been in conversation with researchers at the Royal Botanic Gardens, Kew, who study wild coffee species. It is early days, but it is a coffee we are following closely.",
  },
  {
    name: "Liberica",
    latin: "Coffea liberica",
    tagline: "Big beans, big character",
    origin:
      "Native to West and Central Africa and named after Liberia. Today it is grown mainly in South-East Asia, notably the Philippines and Malaysia, as well as in parts of West Africa.",
    flavour:
      "Bold and unusual. Traditionally described as smoky, woody and full-bodied, sometimes with ripe, jackfruit-like fruit notes. More careful picking and processing is revealing cleaner, fruitier cups.",
    climate:
      "A large, vigorous tree that copes with heat and low altitudes better than arabica. When coffee leaf rust devastated arabica in parts of Asia in the late 1800s, liberica was planted as a hardier alternative.",
    interest:
      "Tall trees, large cherries that ripen unevenly, and large, irregular beans make it harder to harvest and process, and it has long had a reputation as a lower-quality coffee. It is a small part of world production, but its resilience is drawing fresh attention.",
  },
  {
    name: "Excelsa",
    latin: "Coffea liberica var. dewevrei",
    tagline: "Liberica's tart, fruity relative",
    origin:
      "Native to Central Africa. Once treated as a separate species, excelsa is now classified by botanists as a variety of liberica. It is grown mainly in South-East Asia, including Vietnam, the Philippines and Indonesia.",
    flavour:
      "Often described as tart and fruity, with dark-fruit notes and a lighter body than classic liberica, a distinctive, complex cup.",
    climate:
      "Considered hardy: tolerant of heat and drought, and grown in lowland conditions where arabica struggles.",
    interest:
      "Produced in tiny volumes and historically used mostly in blends rather than celebrated on its own. A growing number of specialty roasters are now experimenting with it.",
  },
];

const FACTS: Array<[keyof Species, string]> = [
  ["origin", "Origin"],
  ["flavour", "Flavour"],
  ["climate", "Climate resilience"],
  ["interest", "Why it's interesting"],
];

export default function SpeciesPage() {
  return (
    <div className="narrativePage">
      <section className="pageHero">
        <h1>Coffee Species</h1>
        <p>
          Almost all the coffee people drink comes from just two species:
          arabica and robusta (Coffea canephora). But there are well over a
          hundred known wild coffee species, and some of them may matter a great
          deal as the climate changes. Here are four we find especially
          interesting.
        </p>
      </section>

      <section className="speciesGrid" aria-label="Coffee species">
        {SPECIES.map((species) => (
          <article className="speciesCard" key={species.latin}>
            <p className="speciesTagline">{species.tagline}</p>
            <h2>{species.name}</h2>
            <p className="speciesLatin">
              <em>{species.latin}</em>
            </p>

            <dl className="speciesFacts">
              {FACTS.map(([key, label]) => (
                <div key={key}>
                  <dt>{label}</dt>
                  <dd>{species[key]}</dd>
                </div>
              ))}
            </dl>

            {species.note && <p className="speciesNote">{species.note}</p>}
          </article>
        ))}
      </section>

      <section className="contentBand speciesFooter">
        <p>
          This page draws on published research, including studies led by
          scientists at the Royal Botanic Gardens, Kew. Coffee science moves
          quickly, and we will update it as we learn more.
        </p>
        <Link className="button buttonSecondary" href="/experiments">
          ← Back to the Coffee Lab
        </Link>
      </section>
    </div>
  );
}
