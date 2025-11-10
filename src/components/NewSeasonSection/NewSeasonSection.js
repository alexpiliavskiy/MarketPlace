import React from 'react';
import {Box} from "@mui/material";

import NewSeasonItem from "@/components/NewSeasonSection/NewSeasonItem";

import styles from "@/components/NewSeasonSection/NewSeasonSection.module.scss";

const NewSeasonSection = () => {
    const items = [
        {
            _id: 1,
            title: "NEW SEASON",
            description: "New Collection Release",
            buttonLabel: "SHOP NOW"
        }
    ];

    return (
        <Box className={styles.infoBanner}>
            {
                items.map( (item, i) => <NewSeasonItem key={i} item={item} /> )
            }
        </Box>
    );
};

export default NewSeasonSection;