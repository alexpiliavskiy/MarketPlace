import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import MissionSection from "@/components/AboutSection/MissionSection";

import styles from "@/components/AboutSection/InfoContentSection.module.scss";

const InfoSection = () => {
    return (
        <Box component="section">
            <Grid container spacing={4} justifyContent="center" className={styles.aboutContainer}>
                <Grid item xs={12}>
                    <Typography className={`${styles.mainTitle} textUppercase`} variant="h3">ABOUT UOMO</Typography>
                </Grid>
                <Grid className={styles.imageTop} item xs={12}>
                    <img src="/about-1.jpg" alt="About-1" />
                </Grid>
                <Grid item xs={10} className={styles.infoContent}>
                    <Typography className={styles.aboutTitle} variant="h5">OUR STORY</Typography>
                    <Typography className={styles.aboutOneText} variant="body1" paragraph>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography className={styles.aboutTwoText} variant="body1" paragraph>
                        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you&apos;re unto that. Had. Female replenish for yielding so saw all one to yielding grass you&apos;ll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they&apos;re great.
                    </Typography>
                </Grid>
                <MissionSection />
            </Grid>
        </Box>
    );
};

export default InfoSection;