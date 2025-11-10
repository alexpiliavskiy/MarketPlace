import React from 'react';
import ProfileAddressesSection from "@/components/ProfileAddressesSection/ProfileAddressesSection";

export async function generateMetadata() {
    return {
        title: "Addresses | MyThing",
        description: "Manage your shipping and billing addresses on MyThing.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Addresses | MyThing",
            description: "Add, edit, and manage your addresses for delivery and billing.",
            url: "https://example.com/account/addresses",
            type: "website",
            images: [
                {
                    url: "/shop_banner.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Addresses - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Addresses | MyThing",
            description: "Manage your shipping and billing addresses for easy checkout.",
            images: ["/shop_banner.jpg"],
        },
    };
}

const ProfileAddressesPage = () => {
    return (
        <ProfileAddressesSection />
    );
};

export default ProfileAddressesPage;