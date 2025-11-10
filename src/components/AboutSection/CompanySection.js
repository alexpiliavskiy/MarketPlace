import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

import styles from "@/components/AboutSection/CompanySection.module.scss";

const CompanySection = () => {
    return (
        <Box component="section">
            <Grid container spacing={4} alignItems="center" className={styles.companyContent}>
                <Grid item xs={12} md={6}>
                    <Box className={styles.imageBottom} sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}>
                        <img src="/about-2.jpg" alt="Company" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className={`${styles.titleCompany} textUppercase`} variant="h5">
                        The Company
                    </Typography>
                    <Typography className={styles.textCompany} variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.
                    </Typography>
                    <Typography className={styles.textTwoCompany} variant="body1" paragraph>
                        Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CompanySection;