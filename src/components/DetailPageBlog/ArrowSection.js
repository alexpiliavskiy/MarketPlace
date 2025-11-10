import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "@/components/DetailPageBlog/ArrowSection.module.scss";

const ArrowSection = () => {
    return (
        <Box component="section">
            <Grid className={styles.arrowContainer} container justifyContent="space-between">
                <Grid item>
                    <Link className={styles.linkArrowPrev} href="/home" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowBackIcon sx={{ mr: 1 }} />
                        <Typography className={styles.titleArrow} variant="body2">PREVIOUS POST</Typography>
                    </Link>
                    <Typography className={styles.textArrow} variant="caption">Given Set was without from god divide rule Hath</Typography>
                </Grid>
                <Grid item>
                    <Link className={styles.linkArrowNext} href="/home" underline="hover" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography className={styles.titleArrow} variant="body2">NEXT POST</Typography>
                        <ArrowForwardIcon sx={{ ml: 1 }} />
                    </Link>
                    <Typography className={styles.textArrow} variant="caption">Tree earth fowl given moveth deep lesser After</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ArrowSection;