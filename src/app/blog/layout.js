import React from "react";

export async function generateMetadata() {
    return {
        title: "Blog | MyThing",
        description: "Read the latest articles on fashion, trends, style tips, and more at MyThing's blog. Stay updated with the hottest trends in fashion!",
        openGraph: {
            title: "Blog | MyThing",
            description: "Explore the latest insights on fashion, style tips, and more at MyThing. Get inspired with our fashion articles.",
            url: "https://example.com/blog",
            type: "website",
            images: [
                {
                    url: "/blog-2.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Fashion Blog - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Blog | MyThing",
            description: "Stay up to date with the latest fashion trends and style tips at MyThing's blog.",
            images: ["/blog-2.jpg"],
        },
    };
}

export default function BlogLayout({children}) {
    return (
        <>
            {children}
        </>
    );
}
