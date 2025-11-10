import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import MenuProfileSection from "@/components/ProfileMainSection/MenuProfileSection";
import ProfileAccountDetailContent from "@/components/ProfileAccountDetailSection/ProfileAccountDetailContent";
import styles from "@/components/ProfileAccountDetailSection/ProfileAccountDetailSection.module.scss";

const ProfileAccountDetailSection = () => {
    return (
        <Box component="section" className={styles.accountDetailContainer}>
            <Container>
                <Typography variant="h3" className={styles.mainTitle}>Account details</Typography>
                <Grid container>
                    <Grid item xs={12} md={4} lg={3}>
                        <MenuProfileSection />
                    </Grid>
                    <Grid item xs={12} md={8} lg={9} className={styles.contentContainer}>
                        <ProfileAccountDetailContent />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProfileAccountDetailSection;