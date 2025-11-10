import React from 'react';
import Link from "next/link";
import {Box, Grid, Typography} from "@mui/material";
import styles from "@/components/ContactSection/InfoContactSection.module.scss";

const InfoContactSection = () => {
    return (
        <Box component="section">
            <Grid container spacing={4} style={{ marginTop: '40px' }}>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.topTitle} variant="h4">Store in London</Typography>
                    <Typography className={styles.topText} variant="body1">1418 River Drive, Suite 35 Cottonhall, CA 9622
                        United States</Typography>
                    <Typography className={styles.linkEmailText}>
                        <Link className={styles.emailLink} href={"mailto:sale@uomo.com"}>sale@uomo.com</Link>
                    </Typography>
                    <Typography className={styles.linkPhoneText}>
                        <Link className={styles.phoneLink} href={"tel:+1 246-345-0695"}>+1 246-345-0695</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.topTitle} variant="h4">Store in Istanbul</Typography>
                    <Typography className={styles.topText} variant="body1">1418 River Drive, Suite 35 Cottonhall, CA 9622
                        Istanbul</Typography>
                    <Typography className={styles.linkEmailText}>
                        <Link className={styles.emailLink} href={"mailto:sale@uomo.com"}>sale@uomo.com</Link>
                    </Typography>
                    <Typography className={styles.linkPhoneText}>
                        <Link className={styles.phoneLink} href={"tel:+1 246-345-0695"}>+1 246-345-0695</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InfoContactSection;