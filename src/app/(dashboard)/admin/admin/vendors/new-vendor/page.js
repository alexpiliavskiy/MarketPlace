import React from 'react';
import {Box} from "@mui/material";
import VendorForm from "@/components/UI/VendorForm";

export async function generateMetadata() {
    return {
        title: "Create Vendor | MyThing",
        description: "Add a new vendor to your store. Manage vendor details and product listings on MyThing.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Create Vendor | MyThing",
            description: "Create a new vendor for your store. Add vendor details, products, and manage vendor operations.",
            url: "https://example.com/admin/create-vendor",
            type: "website",
            images: [
                {
                    url: "/back2.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Create Vendor - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Create Vendor | MyThing",
            description: "Add a new vendor and manage vendor information in your store's admin panel.",
            images: ["/back2.jpg"],
        },
    };
}

const AddNewVendorPage = () => {
    return (
        <>
            <Box component="section" pt="98px">
                <VendorForm />
            </Box>
        </>

    );
};

export default AddNewVendorPage;