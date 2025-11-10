import React from "react";

export async function generateMetadata() {
    return {
        title: "About Us | MyThing",
        description: "Learn more about MyThing, our story, values, and mission to provide trendy fashion for everyone.",
        openGraph: {
            title: "About Us | MyThing",
            description: "Get to know MyThing, our values, mission, and vision for providing stylish fashion for all.",
            url: "https://example.com/about",
            type: "website",
            images: [
                {
                    url: "/about-1.jpg",
                    width: 1200,
                    height: 630,
                    alt: "About Us - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "About Us | MyThing",
            description: "Learn about MyThing's journey and how we aim to bring you stylish clothing.",
            images: ["/about-1.jpg"],
        },
    };
}

export default function AboutLayout({children}) {
    return (
        <>
            {children}
        </>
    );
}
