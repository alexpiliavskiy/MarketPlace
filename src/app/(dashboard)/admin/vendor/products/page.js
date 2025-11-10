import React from 'react';
import {Box} from "@mui/material";
import TableVendorProductsSection from "@/components/TableVendorProductsSection/TableVendorProductsSection";

export async function generateMetadata() {
    return {
        title: "All Products | MyThing",
        description: "Create a new product on MyThing. Add your exclusive products to our store and share them with the world.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "All Products | MyThing",
            description: "Add your exclusive products to MyThing. Create new products and manage your store.",
            url: "https://example.com/vendor/create-product",
            type: "website",
            images: [
                {
                    url: "/back.jpg",
                    width: 1200,
                    height: 630,
                    alt: "All Products - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "All Products | MyThing",
            description: "Create and manage your products on MyThing's platform.",
            images: ["/back.jpg"],
        },
    };
}

const AdminProductPage = () => {
    return (
        <>
            <Box component="section" pt="98px">
                <TableVendorProductsSection />
            </Box>
        </>

    );
};

export default AdminProductPage;