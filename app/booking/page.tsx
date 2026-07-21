import Image from "next/image";
import { CopyEmail } from "@/components/CopyEmail";
import Link from "next/link";


export default function BookingPage() {

return (

    <main className="bookPage">

        <section className="bookSection bookIntro">

            <p className="bookEyebrow">
                Book Elemental Utopia
            </p>

            <h1>
                Coffee Made For Moments Worth Sharing
            </h1>

            <p className="bookHeroLead">
                A mobile coffee experience built around carefully prepared espresso,
                curiosity, and genuine connection.
            </p>

            <p>
                Bringing thoughtfully prepared coffee, conversation, and discovery
                to workplaces, events, markets, and communities.
            </p>

        </section>


        <section className="bookSection">

            <h2>
                The Elemental Utopia Experience
            </h2>

            <div className="bookGallery">

                <Image
                    src="/images/Test trading/people ordering coffee.JPG"
                    alt="Customers interacting with Elemental Utopia"
                    width={1200}
                    height={800}
                />

                <Image
                    src="/images/Test trading/side shot.JPG"
                    alt="Elemental Utopia coffee setup"
                    width={1200}
                    height={800}
                />

            </div>

            <p>
                Elemental Utopia brings a complete mobile coffee experience to
                workplaces, events, and communities.
            </p>

            <p>
                More than simply serving coffee, we create a welcoming space where
                people can discover something new, have conversations, and enjoy a
                moment away from the everyday.
            </p>

        </section>


        <section className="bookSection">

            <h2>
                Bring Elemental Utopia To Your Event
            </h2>

            <p>
                Whether you are planning a workplace coffee morning, community
                gathering, fundraiser, workshop, or private celebration, Elemental
                Utopia creates a unique coffee experience for your guests.
            </p>

            <ul>

                <li>
                    Founder-operated mobile coffee setup
                </li>

                <li>
                    Espresso-based drinks prepared fresh on site
                </li>

                <li>
                    Coffee discovery and conversations
                </li>

                <li>
                    Suitable space for a compact coffee station
                </li>

                <li>
                    Access to mains electricity required
                </li>

            </ul>

        </section>


        <section className="bookSection">

            <h2>
                Suitable For
            </h2>

            <ul>

                <li>
                    Workplace coffee mornings
                </li>

                <li>
                    Corporate events
                </li>

                <li>
                    Community gatherings
                </li>

                <li>
                    Charity fundraisers
                </li>

                <li>
                    Creative workshops
                </li>

                <li>
                    Private celebrations
                </li>

            </ul>

        </section>


        <section className="bookSection">

            <h2>
                Meet The Founder
            </h2>

            <article className="bookFounder">
                <Image
                    src="/images/Test trading/Behind stall.jpg"
                    alt="Behind the Elemental Utopia coffee stall"
                    width={1200}
                    height={800}
                />

                <div className="bookFounderText">
                    <p>
                        Hi, I'm Jane, the founder of Elemental Utopia.
                    </p>

                    <p>
                        Elemental Utopia began with a simple question: why does
                        coffee have to be something people simply tolerate?
                    </p>

                    <p>
                        I wanted to create an experience that showed people another
                        side of coffee — one where sweetness, balance, and complexity
                        are naturally present within the bean.
                    </p>

                    <p>
                        Through learning, tasting, experimentation, and developing
                        my own approach to preparation, I discovered how much a
                        coffee can change when every detail is carefully considered.
                    </p>
                </div>
            </article>
        </section>


        <section className="bookSection">
            <h2>
                Built From The Ground Up
            </h2>

            <p>
                Elemental Utopia started as an idea: creating a mobile coffee
                experience that could bring carefully prepared coffee, curiosity,
                and conversation beyond the traditional café.
            </p>

            <div className="bookGallery">

                <Image
                    src="/images/Test trading/the original idea.jpeg"
                    alt="Early Elemental Utopia concept"
                    width={1200}
                    height={800}
                />

                <Image
                    src="/images/Test trading/the wooooodd.jpeg"
                    alt="Building the first Elemental Utopia coffee setup"
                    width={1200}
                    height={800}
                />
            </div>
            <p>
                From a simple wooden prototype to a complete mobile coffee station,
                every part of Elemental Utopia has been designed, built, tested,
                and refined.
            </p>
        </section>


        <section className="bookSection">
            <h2>
                Coffee With Intention
            </h2>

            <p>
                Coffee does not have to be bitter, harsh, or something that needs
                sugar to become enjoyable.
            </p>

            <p>
                Through careful preparation and experimentation, we highlight the
                natural sweetness and character already present within the coffee.
            </p>

            <h2>
                Understanding Every Coffee
            </h2>

            <p>
                Every coffee has its own character. The origin, processing method,
                roast profile, and preparation can completely change the experience
                in the cup.
            </p>

            <p>
                Rather than approaching coffee with a fixed recipe, Elemental
                Utopia takes the time to understand each coffee individually.
                Through tasting, testing, and careful adjustment, we explore what
                each coffee is capable of and find the preparation that best brings
                out its unique qualities.
            </p>

            <p>
                Different recipes can reveal different sides of the same coffee:
                sweetness, clarity, richness, body, or complexity. The goal is not
                to force every coffee into the same shape, but to discover the
                profile where that particular coffee shines.
            </p>

            <p>
                During trading, this process continues through regular tasting and
                adjustment, ensuring every cup represents the best version of that
                coffee at that moment.
            </p>

            <article className="bookCard">
                <h3>
                    🧪 Experimentation & Discovery
                </h3>

                <p>
                    Every coffee has a story. Small changes in preparation can
                    reveal completely different flavours and experiences.
                </p>

                <Link href="/experiments">
                    Explore Our Coffee Experiments →
                </Link>
            </article>
        </section>


        <section className="bookCTA">

            <h2>
                Ready To Bring Elemental Utopia To Your Space?
            </h2>

            <p>
                Interested in creating a coffee experience for your workplace,
                event, or community?
            </p>

            <Link href="mailto:xxdivinuslunarisxx@gmail.com">
                Get In Touch →
            </Link>

            <br />
            <br />

            <span>
                Or copy email:
            </span>

            <br />
            <br />

            <CopyEmail />
        </section>
    </main>
    );
}