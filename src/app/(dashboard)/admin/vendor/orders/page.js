import React from 'react';
import {Box, Typography} from "@mui/material";

export async function generateMetadata() {
    return {
        title: "Orders | MyThing",
        description: "View and manage your past orders on MyThing.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Orders | MyThing",
            description: "Manage your order history and track past purchases on MyThing.",
            url: "https://example.com/account/orders",
            type: "website",
            images: [
                {
                    url: "/shop_banner.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Orders - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Orders | MyThing",
            description: "View and track your previous orders on MyThing.",
            images: ["/shop_banner.jpg"],
        },
    };
}

const AdminOrderPage = () => {
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
                    <Typography variant="h3">Hello from Vendor Order page</Typography>
                    <Typography variant="h5">admin page</Typography>
                </Box>
            </Box>
        </>
    );
};

export default AdminOrderPage;