import type { Metadata } from "next";
import { LogoMark } from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Elemental Utopia, its portable coffee setup, and its science-led approach to specialty coffee."
};

export default function AboutPage() {
  return (
    <div className="narrativePage">
      <section className="pageHero">
        <h1>Our Story</h1>
        <p>
          Elemental Utopia started in October 2023, on a holiday, from a single
          video about coffee.
        </p>
      </section>

      <section className="storyGrid">
        <div className="storyBlock">
          <h2>Curiosity Became Obsession</h2>
          <p>
            At first, it was not a business idea. It was curiosity. A small
            espresso setup and a hand grinder turned casual learning into a deep
            dive into specialty coffee.
          </p>
          <p>
            The difference between commodity coffee and specialty
            Coffee was massive. It felt like discovering that coffee was not
            one thing, but a whole spectrum of flavour waiting to be understood.
          </p>
          <p>
            One moment that stayed was tasting a coffee that tasted
            like blueberries, bright, sweet, almost like juice in a cup. It was
            unexpected, almost unreal, and that clarity and intensity has shaped
            the chase ever since.
          </p>
        </div>

        <article className="storyBlock">
          <h2>Building Through Iteration</h2>
          <p>
            From there, the idea stopped being theoretical. The equipment was
            there, the interest was there, and the mindset shifted to something
            simple: if I can do it, why would I not?
          </p>
          <p>
            That mindset became the driving force behind everything: learning,
            failing, rebuilding, experimenting with extraction, and constructing
            a portable coffee setup from scratch.
          </p>
          <p>
            Wood, fittings, pump, sink, finish, everything. Elemental Utopia
            slowly became real through iteration, not permission. It is still
            evolving, but it exists.
          </p>
        </article>
      </section>

      <section className="contentBand storyBand">
        <div>
          <h2>Why We Exist</h2>
          <p>
            Elemental Utopia exists because coffee, in its most common form, is
            underestimated. For many people it is bitter, functional, and
            routine: something consumed for caffeine rather than experience.
          </p>
          <p>
            When treated with care, precision, and intention, coffee becomes
            something completely different. It becomes flavour, ritual, and
            attention.
          </p>
          <p>
            We exist to challenge the idea that coffee is supposed to be average
            and to push coffee beyond convenience, back into craft.
          </p>
        </div>
        <LogoMark className="storyLogo" />
      </section>

      <section className="storyGrid">
        <article className="storyBlock">
          <h2>What Makes Us Different</h2>
          <p>
            Elemental Utopia is not a traditional coffee setup. It is a
            portable, experimental coffee system designed to move, adapt, and
            exist anywhere.
          </p>
          <p>
            The goal is simple: remove location as a limitation on quality. The
            approach is what makes that possible.
          </p>
          <p>
            Coffee is treated like a science as much as a craft. Every cup is
            part of an ongoing exploration into extraction, flavour,
            temperature, pressure, and eventually roasting.
          </p>
        </article>

        <article className="storyBlock">
          <h2>Craft, Ethics, People</h2>
          <p>
            The long-term ambition is a coffee lab where flavour is tested,
            refined, and pushed further, including fruit-forward espresso with
            clear notes of berries, pineapple, and beyond.
          </p>
          <p>
            Quality and ethics are part of the same system. Sustainability, fair
            sourcing, and reducing harm in the supply chain matter.
          </p>
          <p>
            The working culture matters too: calm, respectful, accessible, and
            sensory-aware, so people feel good working here, not just performing
            here.
          </p>
        </article>
      </section>
    </div>
  );
}
