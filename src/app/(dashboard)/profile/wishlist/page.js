import React from 'react';
import ProfileWishlistSection from "@/components/ProfileWishlistSection/ProfileWishlistSection";

export async function generateMetadata() {
    return {
        title: "Wishlist | MyThing",
        description: "View and manage your wishlist on MyThing. Save your favorite products for later.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Wishlist | MyThing",
            description: "Add and manage products to your wishlist on MyThing.",
            url: "https://example.com/account/wishlist",
            type: "website",
            images: [
                {
                    url: "/image1.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Wishlist - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Wishlist | MyThing",
            description: "Save your favorite products and manage your wishlist on MyThing.",
            images: ["/image1.jpg"],
        },
    };
}

const ProfileWishlistPage = () => {
    return (
        <ProfileWishlistSection />
    );
};

export default ProfileWishlistPage;