import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

import styles from "@/components/AboutSection/MissionSection.module.scss";

const MissionSection = () => {
    return (
        <Box>
            <Grid container spacing={4} justifyContent="center" className={styles.missionContainer}>
                <Grid item xs={5}>
                    <Typography className={styles.aboutSubTitle} variant="h5">
                        Our Mission
                    </Typography>
                    <Typography className={styles.aboutSubText} variant="body1">
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography className={styles.aboutSubTitle} variant="h5">
                        Our Vision
                    </Typography>
                    <Typography className={styles.aboutSubText} variant="body1">
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MissionSection;