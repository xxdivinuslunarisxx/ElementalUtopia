"use client";

import { useState } from "react";

type BookingModalProps = {
    onClose: () => void;
};

export default function BookingModal({ onClose }: BookingModalProps) {

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        setLoading(true);

        const form = e.currentTarget;


        const data = {

            name: (
                form.elements.namedItem("name") as HTMLInputElement
            ).value,


            email: (
                form.elements.namedItem("email") as HTMLInputElement
            ).value,


            phone: (
                form.elements.namedItem("phone") as HTMLInputElement
            ).value,


            location: (
                form.elements.namedItem("location") as HTMLInputElement
            ).value,


            guestCount: (
                form.elements.namedItem("guestCount") as HTMLInputElement
            ).value,


            message: (
                form.elements.namedItem("message") as HTMLTextAreaElement
            ).value,

        };


        try {

            const response = await fetch("/api/booking", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(data),

            });


            if (response.ok) {

                setSubmitted(true);

            } else {

                alert("Something went wrong. Please try again.");

            }


        } catch (error) {

            console.error(error);

            alert("Something went wrong. Please try again.");

        }


        setLoading(false);

    }



    return (

        <div
            className="modalOverlay"
            onClick={onClose}
        >


            <div
                className={`bookingModal ${submitted ? "successModal" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >


                <button
                    type="button"
                    className="modalClose"
                    onClick={onClose}
                    aria-label="Close booking form"
                >
                    ×
                </button>



                {submitted ? (

                    <>

                        <div className="successIcon">
                            🌿
                        </div>


                        <h2>
                            Booking Request Sent!
                        </h2>


                        <p>
                            Thanks for getting in touch. We've received your
                            enquiry and will review your event details before
                            getting back to you with availability and a
                            personalised quote.
                        </p>


                        <button
                            type="button"
                            className="bookingSubmit"
                            onClick={onClose}
                        >
                            Close
                        </button>

                    </>


                ) : (

                    <>


                        <h2>
                            Request a Quote
                        </h2>



                        <p>
                            Tell us about your event and we'll help create the
                            right coffee experience for your guests.
                        </p>




                        <form onSubmit={handleSubmit}>


                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                            />



                            <label htmlFor="email">
                                Email
                            </label>


                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />



                            <label htmlFor="phone">
                                Phone (optional)
                            </label>


                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Your phone number"
                            />



                            <label htmlFor="location">
                                Event location
                            </label>


                            <input
                                id="location"
                                name="location"
                                type="text"
                                placeholder="Venue name, town, or postcode"
                                required
                            />



                            <label htmlFor="guestCount">
                                Estimated guests
                            </label>


                            <input
                                id="guestCount"
                                name="guestCount"
                                type="number"
                                min="1"
                                placeholder="Approximate number of guests"
                                required
                            />



                            <label htmlFor="message">
                                Tell us about your event
                            </label>


                            <p className="formHint">
                                Include the type of event, date, timings,
                                and anything else you'd like us to know.
                            </p>


                            <textarea
                                id="message"
                                name="message"
                                placeholder="Example: Charity event in Brentford with around 80 guests..."
                                required
                            />



                            <button
                                type="submit"
                                className={`bookingSubmit ${loading ? "loading" : ""}`}
                                disabled={loading}
                            >

                                {loading
                                    ? "Sending..."
                                    : "Send Enquiry →"
                                }

                            </button>



                        </form>


                    </>

                )}



            </div>


        </div>

    );

}