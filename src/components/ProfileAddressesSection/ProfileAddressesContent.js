import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import styles from "@/components/ProfileAddressesSection/ProfileAddressesContent.module.scss";

const ProfileAddressesContent = () => {
    return (
        <Box component="section" className={styles.addressesContentContainer}>
                <Typography variant="h6" className={styles.addressesContentText}>The following addresses will be used on the checkout page by default.</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box className={styles.addressesInfo}>
                        <Box className={styles.addressesInfoMain}>
                            <Typography variant="h5" className={styles.addressesInfoTitle}>BILLING ADDRESS</Typography>
                            <Button variant="text" className={styles.addressesInfoBtn}>Edit</Button>
                        </Box>
                        <Box className={styles.addressesInfoText}>
                            <Typography variant="body1">Daniel Robinson</Typography>
                            <Typography variant="body2">1418 River Drive, Suite 35 Cottonhall, CA 9622</Typography>
                            <Typography variant="body2">United States</Typography>
                            <Typography variant="body2" className={styles.infoEmail}>sale@uomo.com</Typography>
                            <Typography variant="body2" className={styles.infoTel}>+1 246-345-0695</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={styles.addressesInfo}>
                        <Box className={styles.addressesInfoMain}>
                            <Typography variant="h5" className={styles.addressesInfoTitle}>SHIPPING ADDRESS</Typography>
                            <Button variant="text" className={styles.addressesInfoBtn}>Edit</Button>
                        </Box>
                        <Box className={styles.addressesInfoText}>
                            <Typography variant="body1">Daniel Robinson</Typography>
                            <Typography variant="body2">1418 River Drive, Suite 35 Cottonhall, CA 9622</Typography>
                            <Typography variant="body2">United States</Typography>
                            <Typography variant="body2" className={styles.infoEmail}>sale@uomo.com</Typography>
                            <Typography variant="body2" className={styles.infoTel}>+1 246-345-0695</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProfileAddressesContent;