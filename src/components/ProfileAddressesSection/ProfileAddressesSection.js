import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import MenuProfileSection from "@/components/ProfileMainSection/MenuProfileSection";
import ProfileAddressesContent from "@/components/ProfileAddressesSection/ProfileAddressesContent";
import styles from "@/components/ProfileAddressesSection/ProfileAddressesSection.module.scss";

const ProfileAddressesSection = () => {
    return (
        <Box component="section" className={styles.addressesContainer}>
            <Container>
                <Typography variant="h3" className={styles.mainTitle}>Addresses</Typography>
                <Grid container>
                    <Grid item xs={12} md={4} lg={3}>
                        <MenuProfileSection />
                    </Grid>
                    <Grid item xs={12} md={8} lg={9} className={styles.contentContainer}>
                        <ProfileAddressesContent />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProfileAddressesSection;