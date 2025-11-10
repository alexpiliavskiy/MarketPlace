import React, {useState} from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import DOMPurify from "dompurify";

import TabPanel from "@/components/TabPanel";
import AdditionalInformation from "@/components/AdditionalInformationSection/AdditionalInformation";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import styles from "@/components/SingleTabSection/SingleTabSection.module.scss";

const SingleTabSection = ({ formData, currentUser, product, handleChange, handleRatingChange, submitComment}) => {
    const [value, setValue] = useState(0);
    const safeDescription = DOMPurify.sanitize(product.description);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box component="section" pt="110px" pb="100px">
            <Tabs className={styles.tabsLink} value={value} onChange={handleChangeTab} aria-label="DESCRIPTION PRODUCT">
                <Tab label="DESCRIPTION" />
                <Tab label="ADDITIONAL INFORMATION" />
                <Tab label="REVIEWS (2)" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box className={styles.centerContent}>
                    <Typography className={styles.title} variant="h5">{product.title}</Typography>
                    <Typography className={styles.description} variant="body1">
                        <span dangerouslySetInnerHTML={{__html: safeDescription}}/>
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AdditionalInformation />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ReviewsSection formData={formData} currentUser={currentUser} submitComment={submitComment} product={product} handleChange={handleChange} handleRatingChange={handleRatingChange}/>
            </TabPanel>
        </Box>
    );
};

export default SingleTabSection;