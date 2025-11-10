import React from 'react';
import {Box, Button} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddIcon from '@mui/icons-material/Add';
import styles from "@/components/DetailPageBlog/SocialLinkSection.module.scss";

const SocialLinkSection = () => {
    return (
        <Box component="section">
            <Box className={styles.socialContainer}>
                <Button className={styles.socialBtnFacebook} variant="contained" startIcon={<FacebookIcon />}>Share on Facebook</Button>
                <Button className={styles.socialBtnTwitter} variant="contained" startIcon={<TwitterIcon />}>Share on Twitter</Button>
                <Button className={styles.socialBtnPinterest} variant="contained"  startIcon={<PinterestIcon />}>Share on Pinterest</Button>
                <Button className={styles.socialBtnPlus} variant="contained" startIcon={<AddIcon />}></Button>
            </Box>
        </Box>
    );
};

export default SocialLinkSection;