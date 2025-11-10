import React from 'react';
import {Box} from "@mui/material";
import ProductForm from "@/components/UI/ProductForm";

export async function generateMetadata() {
    return {
        title: "My Product | MyThing",
        description: "My product on MyThing. Add your exclusive products to our store and share them with the world.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Create Product | MyThing",
            description: "Add your exclusive products to MyThing. Create new products and manage your store.",
            url: "https://example.com/vendor/create-product",
            type: "website",
            images: [
                {
                    url: "/back.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Create Product - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Create Product | MyThing",
            description: "Create and manage your products on MyThing's platform.",
            images: ["/back.jpg"],
        },
    };
}

const AddNewProductPage = () => {
    return (
        <>
            <Box component="section" pt="98px">
                <ProductForm />
            </Box>
        </>

    );
};

export default AddNewProductPage;