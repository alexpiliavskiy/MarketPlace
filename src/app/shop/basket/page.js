import React from 'react';
import ShoppingCartSection from "@/components/ShoppingCartSection/ShoppingCartSection";

export async function generateMetadata() {
    return {
        title: "Basket | MyThing",
        description: "View and manage the items in your basket before proceeding to checkout on MyThing.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Basket | MyThing",
            description: "Manage your basket and prepare for checkout on MyThing.",
            url: "https://example.com/account/basket",
            type: "website",
            images: [
                {
                    url: "/image1.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Basket - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Basket | MyThing",
            description: "Review and manage the items in your basket before finalizing your order.",
            images: ["/image1.jpg"],
        },
    };
}

const ShoppingCartPage = () => {
    return (
        <ShoppingCartSection />
    );
};

export default ShoppingCartPage;