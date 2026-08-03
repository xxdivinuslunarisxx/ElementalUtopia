"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export function BookingButton() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="bookingButton"
                onClick={() => setIsOpen(true)}
            >
                Request a Quote →
            </button>

            {isOpen && (
                <BookingModal
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
