import React from 'react';
import Link from "next/link";
import {Box, Container, Typography} from "@mui/material";

import styles from "@/components/NewSeasonSection/NewSeasonSection.module.scss";

import BaseButton from "@/components/BaseButton/BaseButton";

const NewSeasonItem = ({ item }) => {
    return (
            <Box className={`${styles.cardCategoryContent} ds`}>
                <Container className={styles.infoContainer}>
                <Typography className={`${styles.title} textUppercase`} variant="h2">{item.title}</Typography>
                <Typography className={styles.description} variant="h6">{item.description}</Typography>
                <BaseButton variant="text">
                    <Link href={`/shop`} passHref>
                        {`${item.buttonLabel}`}
                    </Link>
                </BaseButton>
                </Container>
            </Box>
    );
};

export default NewSeasonItem;