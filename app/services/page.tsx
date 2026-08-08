import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="servicesPage">

      {/* HERO */}
      <header className="servicesHero">
        <div className="servicesBadge">
          <span>Services</span>
          <span>West London</span>
        </div>

        <h1>
          Mobile Specialty Coffee for Events, Workplaces & Communities
        </h1>

        <p className="servicesHeroText">
          Elemental Utopia is a founder-operated mobile specialty coffee
          service serving West London. We bring carefully prepared specialty
          coffee directly to workplaces, events, markets and communities,
          using a science-led approach to brewing and extraction.
        </p>

        <Link href="/booking" className="servicesButton">
          Book Elemental Utopia
        </Link>
      </header>


      {/* SERVICES */}
      <section className="servicesSection">
        <div className="servicesSectionHeading">
          <span className="servicesEyebrow">What we offer</span>
          <h2>Specialty coffee, wherever people gather.</h2>
          <p>
            A flexible mobile coffee service for workplaces, events,
            communities and pop-ups across West London.
          </p>
        </div>

        <div className="servicesGrid">

          <article className="serviceCard">
            <span className="serviceNumber">01</span>
            <h3>Workplace Coffee</h3>

            <p>
              Give your team something better than the usual office coffee.
            </p>

            <p>
              Elemental Utopia can bring a mobile specialty coffee setup to
              workplaces across West London, serving freshly prepared
              espresso-based drinks for staff, visitors or clients.
            </p>

            <ul>
              <li>Team mornings</li>
              <li>Staff appreciation days</li>
              <li>Office events</li>
              <li>Business launches</li>
              <li>Client hospitality</li>
              <li>Workplace celebrations</li>
            </ul>
          </article>


          <article className="serviceCard">
            <span className="serviceNumber">02</span>
            <h3>Events & Corporate Hospitality</h3>

            <p>
              Coffee can be more than something people grab on the way past.
            </p>

            <p>
              For corporate events, launches, networking sessions and other
              gatherings, Elemental Utopia provides a mobile coffee service
              designed to fit naturally into your event.
            </p>
          </article>


          <article className="serviceCard">
            <span className="serviceNumber">03</span>
            <h3>Private & Community Events</h3>

            <p>
              From local gatherings to private celebrations, good coffee
              gives people another reason to stop, talk and stay a while.
            </p>

            <p>
              Elemental Utopia provides mobile specialty coffee for
              community events, private occasions and other gatherings where
              you want something more considered than standard refreshments.
            </p>
          </article>


          <article className="serviceCard">
            <span className="serviceNumber">04</span>
            <h3>Markets & Pop-Ups</h3>

            <p>
              Elemental Utopia is designed around mobility.
            </p>

            <p>
              Our setup can operate as a compact coffee pop-up, allowing us
              to bring specialty coffee to markets, community spaces and
              other suitable locations.
            </p>

            <p>
              Every pop-up is an opportunity to experiment, refine and serve
              coffee at its best.
            </p>
          </article>

        </div>
      </section>


      {/* DIFFERENCE */}
      <section className="servicesSection servicesDifference">
        <div className="servicesSectionHeading">
          <span className="servicesEyebrow">The Elemental Utopia approach</span>
          <h2>What makes us different?</h2>
        </div>

        <div className="servicesFeatureGrid">

          <article className="servicesFeature">
            <span className="serviceFeatureIcon">01</span>
            <h3>Science-led brewing</h3>

            <p>
              Coffee is surprisingly sensitive. Small changes in temperature,
              grind size, flow, ratio and extraction time can change what ends
              up in the cup.
            </p>

            <p>
              We pay attention to how the coffee is actually extracting and
              tasting rather than simply following one recipe regardless of
              what is happening in the cup.
            </p>

            <strong>The goal is better coffee.</strong>
          </article>


          <article className="servicesFeature">
            <span className="serviceFeatureIcon">02</span>
            <h3>Coffee dialled in with intention</h3>

            <p>
              Coffee changes throughout the day. As conditions change,
              recipes may need to change with them.
            </p>

            <p>
              We focus on tasting, adjusting and keeping the coffee performing
              properly throughout service.
            </p>
          </article>


          <article className="servicesFeature">
            <span className="serviceFeatureIcon">03</span>
            <h3>A genuinely mobile service</h3>

            <p>
              Elemental Utopia was created to remove location as a limitation
              on quality.
            </p>

            <p>
              The setup is designed to move, adapt and operate in different
              environments, making it suitable for events and spaces that
              don't have a permanent coffee bar.
            </p>
          </article>


          <article className="servicesFeature">
            <span className="serviceFeatureIcon">04</span>
            <h3>Founder-operated</h3>

            <p>
              Elemental Utopia is operated directly by its founder, Jane.
            </p>

            <p>
              The person developing the coffee, experimenting with extraction
              and building the service is directly involved in delivering it.
            </p>
          </article>

        </div>
      </section>


      {/* MENU */}
      <section className="servicesSection servicesMenu">
        <div className="servicesMenuContent">
          <div>
            <span className="servicesEyebrow">The coffee</span>

            <h2>What's on the menu?</h2>

            <p>
              The exact menu can be adapted depending on the event and setup,
              but our specialty coffee service can include classic
              espresso-based drinks.
            </p>

            <Link href="/menu" className="servicesTextLink">
              View the full menu →
            </Link>
          </div>

          <ul className="servicesDrinkList">
            <li>Espresso</li>
            <li>Americano</li>
            <li>Flat White</li>
            <li>Latte</li>
            <li>Cappuccino</li>
          </ul>
        </div>
      </section>


      {/* LOCATION */}
      <section className="servicesSection servicesLocation">
        <div className="servicesSectionHeading">
          <span className="servicesEyebrow">Where we operate</span>

          <h2>West London, and the places around it.</h2>

          <p>
            Elemental Utopia currently focuses on West London, keeping our
            service practical and allowing us to provide a reliable mobile
            coffee experience without excessive travel.
          </p>
        </div>

        <div className="servicesLocationList">
          <span>Ealing</span>
          <span>Brentford</span>
          <span>Chiswick</span>
          <span>Richmond</span>
          <span>Hammersmith</span>
          <span>West London</span>
        </div>
      </section>


      {/* BOOKING */}
      <section className="servicesCTA">
        <div className="servicesCTAContent">
          <span className="servicesEyebrow">Planning an event?</span>

          <h2>Let's make genuinely good coffee part of it.</h2>

          <p>
            Every event is different. Tell us the date, location, approximate
            guest numbers and what you're looking for, and we'll work through
            the practical details with you.
          </p>

          <Link href="/booking" className="servicesButton">
            Book Elemental Utopia
          </Link>
        </div>
      </section>


      {/* FAQ */}
        <section className="servicesSection servicesFAQ">
            <div className="servicesSectionHeading">
            <span className="servicesEyebrow">Questions</span>
            <h2>Frequently asked questions</h2>
            </div>

            <div className="servicesFAQGrid">

            <article className="servicesFAQItem">
                <h3>How far does Elemental Utopia travel?</h3>
                <p>
                Elemental Utopia primarily operates across West London.
                Travel distance depends on the event location and requirements,
                so get in touch with your event details and we'll let you know
                whether we can accommodate it.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>Do you need electricity?</h3>
                <p>
                Our equipment has specific power requirements. We'll discuss
                the available power supply when planning your event to make
                sure the setup is suitable.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>How many people can you serve?</h3>
                <p>
                This depends on the event duration, menu and service format.
                Tell us your expected guest numbers and we'll recommend a
                suitable setup.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>Can you cater for workplace events?</h3>
                <p>
                Yes. Workplace coffee mornings, staff events, client
                hospitality and business gatherings are all suitable uses for
                the mobile coffee service.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>Can you attend community events?</h3>
                <p>
                Yes. Elemental Utopia is designed to operate in a variety of
                settings, including suitable community events and pop-ups.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>Can I book Elemental Utopia for a private event?</h3>
                <p>
                Yes. Send us the date, location, approximate guest numbers and
                what you'd like from the coffee service, and we'll discuss the
                options.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>What makes your coffee "specialty"?</h3>
                <p>
                Specialty coffee generally refers to coffee produced and
                evaluated to a high standard throughout its journey from farm
                to cup. At Elemental Utopia, that quality is paired with
                careful preparation, extraction and tasting rather than simply
                relying on the label.
                </p>
            </article>

            <article className="servicesFAQItem">
                <h3>How do I book?</h3>
                <p>
                Use the booking form to send us your event details. We'll
                review the requirements and get back to you with the next
                steps.
                </p>
            </article>

            </div>
        </section>

        

      {/* FINAL CTA */}
      <section className="servicesFinalCTA">
        <h2>Coffee should be part of the experience.</h2>

        <p>
          West London. Mobile. Science-led. Made to taste good.
        </p>

        <Link href="/booking" className="servicesButton">
          Book a Coffee Pop-Up
        </Link>
      </section>

    </main>
  );
}