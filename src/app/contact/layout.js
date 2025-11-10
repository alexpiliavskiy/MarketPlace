import React from "react";

export async function generateMetadata() {
    return {
        title: "Contact Us | MyThing",
        description: "Get in touch with MyThing. Find out how to reach us for customer support, inquiries, or collaborations.",
        openGraph: {
            title: "Contact Us | MyThing",
            description: "Reach out to MyThing for any inquiries or support. We are here to help you!",
            url: "https://example.com/contacts",
            type: "website",
            images: [
                {
                    url: "/shop_banner.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Contact Us - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Us | MyThing",
            description: "Get in touch with MyThing for any inquiries or support.",
            images: ["shop_banner.jpg"],
        },
    };
}

export default function ContactLayout({children}) {
    return (
        <>
            {children}
        </>
    );
}
