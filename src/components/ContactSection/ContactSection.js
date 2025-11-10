import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Map from "@/components/Map/Map";
import InfoContactSection from "@/components/ContactSection/InfoContactSection";
import InputControl from "@/components/ContactSection/InputControl";
import styles from "@/components/ContactSection/Contact.module.scss";

const ContactSection = () => {
    return (
        <Box component="section">
            <Container className={styles.mainContainer}>
                <Typography variant="h3" pt="100px" className={`${styles.mainTitle} textUppercase`}>
                    CONTACT US
                </Typography>
                <Map />
                <InfoContactSection />
                <InputControl />
            </Container>
        </Box>
    );
};

export default ContactSection;