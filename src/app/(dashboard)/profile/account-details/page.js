import React from 'react';
import ProfileAccountDetailSection from "@/components/ProfileAccountDetailSection/ProfileAccountDetailSection";

export async function generateMetadata() {
    return {
        title: "Account Details | MyThing",
        description: "View and manage your account details, order history, and personal information on MyThing.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Account Details | MyThing",
            description: "Manage your personal information and order history on MyThing.",
            url: "https://example.com/account/details",
            type: "website",
            images: [
                {
                    url: "/image1.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Account Details - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Account Details | MyThing",
            description: "Manage your account details, orders, and personal settings at MyThing.",
            images: ["/image1.jpg"],
        },
    };
}

const ProfileAccountDetailPage = () => {
    return (
        <ProfileAccountDetailSection />
    );
};

export default ProfileAccountDetailPage;