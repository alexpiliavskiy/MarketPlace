import React from 'react';
import {Box, Typography} from "@mui/material";

export async function generateMetadata() {
    return {
        title: "Vendor Page | MyThing",
        description: "Explore the vendor page at MyThing. Find information about our trusted vendors and partners.",
        robots: "noindex, nofollow",
        openGraph: {
            title: "Vendor Page | MyThing",
            description: "Get to know the trusted vendors and partners behind MyThing's products.",
            url: "https://example.com/vendor",
            type: "website",
            images: [
                {
                    url: "/back.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Vendor Page - MyThing",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Vendor Page | MyThing",
            description: "Learn about MyThing's trusted vendors and partners in the fashion industry.",
            images: ["/back.jpg"],
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
                    <Typography variant="h3">Hello from Vendor</Typography>
                    <Typography variant="h5">admin page</Typography>
                </Box>
            </Box>
        </>

    );
};

export default AdminAccountPage;