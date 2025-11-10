import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import MenuProfileSection from "@/components/ProfileMainSection/MenuProfileSection";
import ProfileOrderTable from "@/components/ProfileOrdersSection/ProfileOrderTable";
import styles from "@/components/ProfileOrdersSection/ProfileOrdersSection.module.scss";


const ProfileOrdersSection = () => {
    return (
        <Box component="section" className={styles.ordersContainer}>
            <Container>
                <Typography variant="h3" className={styles.mainTitle}>Orders</Typography>
                <Grid container>
                    <Grid item xs={12} md={4} lg={3}>
                        <MenuProfileSection />
                    </Grid>
                    <Grid item xs={12} md={8} lg={9} className={styles.contentContainer}>
                        <ProfileOrderTable />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProfileOrdersSection;