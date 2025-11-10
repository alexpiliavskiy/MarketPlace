import React from 'react';
import {Box, Typography} from "@mui/material";

export async function generateMetadata() {
    return {
        title: "Admin Panel | MyThing",
        description: "Manage your store, vendors, products, and settings from the MyThing admin panel.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Admin Panel | MyThing",
            description: "Access the admin panel to manage all store operations including products, vendors, and more.",
            url: "https://example.com/admin",
            type: "website",
            images: [
                {
                    url: "/back2.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Admin Panel - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Admin Panel | MyThing",
            description: "Manage all aspects of your store and vendors in the admin panel.",
            images: ["/back2.jpg"],
        },
    };
}

const AdminAccountPage = () => {
    return (
        <>
            <Box component="section" pt="98px">
                <Box sx={{
                    pt: "98px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant="h3">Hello from Admin</Typography>
                    <Typography variant="h5">Admin admin page</Typography>
                </Box>
            </Box>
        </>

    );
};

export default AdminAccountPage;