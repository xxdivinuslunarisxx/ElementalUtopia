import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


function escapeHtml(text: string = "") {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

}



export async function POST(request: Request) {

    try {

        const body = await request.json();


        const name = escapeHtml(body.name);
        const email = escapeHtml(body.email);
        const phone = escapeHtml(body.phone || "Not provided");
        const location = escapeHtml(body.location || "Not provided");
        const guestCount = escapeHtml(body.guestCount || "Not provided");
        const message = escapeHtml(body.message);



        // ==============================
        // ADMIN EMAIL
        // ==============================

        await resend.emails.send({

            from: "Elemental Utopia <info@elementalutopia.com>",

            to: "info@elementalutopia.com",

            subject: `New Booking Enquiry - ${body.name}`,


            html: `

            <div style="
                font-family:Arial, Helvetica, sans-serif;
                color:#2b2b2b;
                max-width:600px;
            ">


                <h1 style="
                    color:#214d32;
                ">
                    🌿 New Booking Enquiry
                </h1>



                <table style="
                    width:100%;
                    border-collapse:collapse;
                    line-height:1.8;
                ">


                    <tr>
                        <td>
                            <strong>Name</strong>
                        </td>

                        <td>
                            ${name}
                        </td>
                    </tr>



                    <tr>
                        <td>
                            <strong>Email</strong>
                        </td>

                        <td>
                            ${email}
                        </td>
                    </tr>



                    <tr>
                        <td>
                            <strong>Phone</strong>
                        </td>

                        <td>
                            ${phone}
                        </td>
                    </tr>



                    <tr>
                        <td>
                            <strong>Location</strong>
                        </td>

                        <td>
                            ${location}
                        </td>
                    </tr>



                    <tr>
                        <td>
                            <strong>Guests</strong>
                        </td>

                        <td>
                            ${guestCount}
                        </td>
                    </tr>


                </table>



                <h2 style="
                    margin-top:30px;
                ">
                    Event Details
                </h2>



                <div style="
                    background:#214d32;
                    color:white;
                    padding:24px;
                    border-radius:16px;
                    line-height:1.6;
                ">

                    ${message}

                </div>


            </div>

            `

        });





        // ==============================
        // CUSTOMER CONFIRMATION EMAIL
        // ==============================


        await resend.emails.send({

            from: "Elemental Utopia <info@elementalutopia.com>",

            to: body.email,

            subject: "We've received your Elemental Utopia booking enquiry",


            html: `


            <div style="
                font-family:Arial, Helvetica, sans-serif;
                background:#faf7f0;
                padding:40px;
                color:#2b2b2b;
            ">


                <div style="
                    max-width:600px;
                    margin:auto;
                    background:white;
                    padding:40px;
                    border-radius:24px;
                ">


                    <h1 style="
                        color:#214d32;
                        margin-top:0;
                    ">
                        🌿 Thanks for getting in touch!
                    </h1>



                    <p>
                        Hi ${name},
                    </p>



                    <p style="
                        line-height:1.6;
                    ">
                        We've received your Elemental Utopia booking enquiry.
                        We'll review your details and get back to you soon with
                        availability and a personalised quote.
                    </p>





                    <div style="
                        margin-top:30px;
                        background:#ffffff;
                        border:1px solid #d8c8aa;
                        padding:30px;
                        border-radius:20px;
                    ">



                        <h2 style="
                            color:#214d32;
                            margin-top:0;
                        ">
                            Your enquiry details
                        </h2>




                        <div style="
                            background:#faf7f0;
                            padding:15px;
                            border-radius:12px;
                            margin-bottom:12px;
                        ">

                            <strong>
                                📍 Event location
                            </strong>

                            <br>

                            ${location}

                        </div>





                        <div style="
                            background:#faf7f0;
                            padding:15px;
                            border-radius:12px;
                            margin-bottom:12px;
                        ">

                            <strong>
                                👥 Estimated guests
                            </strong>

                            <br>

                            ${guestCount}

                        </div>





                        <div style="
                            background:#faf7f0;
                            padding:15px;
                            border-radius:12px;
                            margin-bottom:20px;
                        ">

                            <strong>
                                📞 Phone
                            </strong>

                            <br>

                            ${phone}

                        </div>





                        <div style="
                            background:#214d32;
                            color:white;
                            padding:22px;
                            border-radius:16px;
                        ">


                            <strong>
                                ☕ Event details
                            </strong>


                            <p style="
                                line-height:1.6;
                            ">

                                ${message}

                            </p>


                        </div>




                    </div>





                    <p style="
                        margin-top:35px;
                        line-height:1.6;
                    ">

                        We're looking forward to helping bring great coffee
                        to your event.

                    </p>




                    <p>

                        Thanks,<br>

                        <strong>
                            Elemental Utopia
                        </strong>

                    </p>




                </div>


            </div>


            `

        });





        return Response.json({

            success:true

        });



    } catch (error) {


        console.error(error);


        return Response.json(

            {
                success:false
            },

            {
                status:500
            }

        );

    }

}