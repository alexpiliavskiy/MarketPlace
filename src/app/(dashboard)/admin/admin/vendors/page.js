import React from 'react';
import {Box} from "@mui/material";
import TableAdminAllVendorsSection from "@/components/TableAdminAllVendorsSection/TableAdminAllVendorsSection";

export async function generateMetadata() {
    return {
        title: "All Vendors | MyThing",
        description: "Manage your store, vendors, products, and settings from the MyThing admin panel.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "All Vendors | MyThing",
            description: "All Vendors to manage all store operations including products, vendors, and more.",
            url: "https://example.com/admin",
            type: "website",
            images: [
                {
                    url: "/back2.jpg",
                    width: 1200,
                    height: 630,
                    alt: "All Vendors - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "All Vendors | MyThing",
            description: "Manage all aspects of your store and vendors in the admin panel.",
            images: ["/back2.jpg"],
        },
    };
}

const AdminProductPage = () => {
    return (
        <>
            <Box component="section" pt="98px">
                <TableAdminAllVendorsSection />
            </Box>
        </>

    );
};

export default AdminProductPage;