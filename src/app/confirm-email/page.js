import React from 'react';
import {Box} from "@mui/material";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ConfirmEmail from "@/components/UI/confirmEmail";

export async function generateMetadata() {
    return {
        title: "Confirm Email | MyThing",
        description: "Confirm your email address to complete your registration on MyThing.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Confirm Email | MyThing",
            description: "Verify your email to finish signing up for MyThing.",
            url: "https://example.com/account/confirm-email",
            type: "website",
            images: [
                {
                    url: "/shop_banner.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Confirm Email - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Confirm Email | MyThing",
            description: "Confirm your email address to activate your MyThing account.",
            images: ["/shop_banner.jpg"],
        },
    };
}

const ProductPage = () => {
    return (
        <Box component="section">
            <Header />
            <ConfirmEmail />
            <Footer />
        </Box>
    );
};

export default ProductPage;