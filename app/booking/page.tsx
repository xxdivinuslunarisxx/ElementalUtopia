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
                Coffee Catering For Events in London
            </h1>

            <p className="bookHeroLead">
                Specialty coffee served by the founder of Elemental Utopia.
            </p>
            <h3>
                Bookings start from £70
            </h3>

        </section>

        <section>
            
             <h3>
                Suitable For
            </h3>

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

            <h3>
                What's included?
            </h3>

            <ul>
                <li>
                    complete mobile coffee station
                </li>
                <li>
                    professional espresso equipment
                </li>
                <li>
                    speciality coffee beans
                </li>
                <li>
                    milk and oat milk
                </li>
                <li>
                    compostable cups and lids
                </li>
                <li>
                    setup and pack-down
                </li>
                    founder-operated service
                <li>
                    public liability insurance
                </li>
            </ul>
        </section>

        <section className="bookSection">
            <br />
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
                Every booking includes everything needed to create a complete mobile coffee experience. I bring the full coffee station, professional espresso equipment, carefully selected speciality coffee, fresh milk and oat milk, compostable cups and lids, and take care of both setup and pack-down, so you can focus on enjoying your event. Every coffee is prepared and served by me, ensuring each guest receives the same care and attention from start to finish.


            </p>

            <p>
                Bookings start from £70, with the final price depending on factors such as the event duration, expected number of guests, location, and any additional requirements. Once you get in touch, I'll provide a clear, no-obligation quote tailored to your event, so you'll know exactly what's included before making a decision.
            </p>

        </section>


        <section className="bookSection">

            <h2>FAQ</h2>

            <ul>
                <li>
                    Typical Booking - 1 to 4 Hours
                </li>

                <li>
                    Travel - West London (Further by request)
                </li>

                <li>
                    Outside Space requirement - 3x3m
                </li>
                
                <li>
                    Inside Space requirement 2x2m
                </li>

                <li>
                    Water - We bring our own water
                </li>

                <li>
                    We have a gazebo so we are not limited by weather.
                </li>
            </ul>

        </section>


        <section className="bookSection">

           

        </section>


        {/* <section className="bookSection">
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
        </section> */}


        <section className="bookSection">
           
            <article className="bookCard">
                <h3>
                    🧪 Experimentation & Discovery
                </h3>

                <p>
                    Every coffee has a story, and small changes in preparation can reveal
                    completely different flavours and experiences. Explore our Coffee Lab to
                    see how we develop recipes, experiment with extraction, and discover what
                    makes each coffee unique.
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
                <br /><br />

                Experiences start from £70. Share your requirements via email for a clear quote
                
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