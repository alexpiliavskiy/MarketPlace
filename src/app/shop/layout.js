import React from "react";

export const metadata = {
    title: "Shop Page | MyThing",
    description: "Browse our exclusive collection of trendy and stylish products. Find your next favorite outfit at MyThing.",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    themeColor: "#ffffff",
    openGraph: {
        title: "Shop Page | MyThing",
        description: "Discover the latest collection of products at MyThing. Shop trendy and stylish items now!",
        url: "https://example.com/products",
        type: "website",
        images: [
            {
                url: "/about-1.jpg",
                width: 1200,
                height: 630,
                alt: "Product page preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shop Page | MyThing",
        description: "Shop the latest collection of trendy products at MyThing.",
        images: ["/about-1.jpg"],
    },
};

export default function ShopLayout({children}) {
    return (
        <>
            {children}
        </>
    );
}
