import React from 'react';
import {Box, Button, Container, Divider, Grid, Typography} from "@mui/material";
import BottomContainer from "@/components/DetailPageBlog/BottomContainer";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import TextFooterSection from "@/components/DetailPageBlog/TextFooterSection";
import SocialLinkSection from "@/components/DetailPageBlog/SocialLinkSection";
import ArrowSection from "@/components/DetailPageBlog/ArrowSection";
import styles from "@/components/DetailPageBlog/DetailPageBlog.module.scss";

const DetailPageBlog = () => {
    return (
        <Box component="section" pt="98px">
            <Container spacing={2} className={styles.pageDetailContainer}>
                <Box className={styles.mainContainer}>
                    <Typography className={`${styles.mainTitle} textUppercase`} variant="h3">5 Tips to Increase Your Online Sales</Typography>
                    <Button className={styles.subBtn} variant="text">BY ADMIN</Button>
                    <Button className={styles.subBtn} variant="text">APRIL 05, 2020</Button>
                    <Button className={styles.subBtn} variant="text">TRENDS</Button>
                </Box>
                <Box className={styles.blogsCategoryItemImage}>
                    <img src="/blog-14.jpg" alt="Blog" />
                </Box>
                <Box className={styles.contentSection}>
                    <Typography variant="body1" className={styles.textOne} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
                    </Typography>
                </Box>
                <Box className={styles.contentSection}>
                    <Typography className={styles.contentTitle} variant="h6" paragraph>Sed do eiusmod tempor incididunt ut labore</Typography>
                    <Typography variant="body1" className={styles.textOne} paragraph>
                        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you&apos;re unto that. Had. Female replenish for yielding so saw all one to yielding grass you&apos;ll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they&apos;re great.
                    </Typography>
                </Box>
                <BottomContainer />
                <Box className={styles.textBottom}>
                    <Typography variant="body1" className={styles.textTwo} paragraph>
                        She&apos;d years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won&apos;t moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don&apos;t void years Gathering gathering divide fill.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className={styles.imageContainer}>
                        <img
                            src="/blog-15.jpg"
                            alt="Fashion image 1"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src="/blog-16.jpg"
                            alt="Fashion image 2"
                        />
                    </Grid>
                </Grid>
                <TextFooterSection />
                <SocialLinkSection />
                <Divider sx={{ my: 3 }} />
                <ArrowSection />
                <Divider sx={{ my: 3, marginBottom: "50px" }} />
            </Container>
        </Box>
    );
};

export default DetailPageBlog;