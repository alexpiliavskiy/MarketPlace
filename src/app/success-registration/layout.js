import React from "react";

export async function generateMetadata() {
    return {
        title: "Registration Success | MyThing",
        description: "Congratulations! Your registration on MyThing is successful. Start shopping and explore the latest trends in fashion.",
        openGraph: {
            title: "Registration Success | MyThing",
            description: "Your registration is complete! Start shopping at MyThing and explore exclusive collections.",
            url: "https://example.com/success-registration",
            type: "website",
            images: [
                {
                    url: "/back2.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Registration Success - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Registration Success | MyThing",
            description: "You’ve successfully registered at MyThing! Start shopping and enjoy our exclusive offers.",
            images: ["/back2.jpg"],
        },
    };
}

export default function SuccessRegistrationLayout({children}) {
    return (
        <>
            {children}
        </>
    );
}
