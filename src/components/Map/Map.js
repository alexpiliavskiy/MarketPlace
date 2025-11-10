import React from 'react';
import {Box} from "@mui/material";

import styles from "@/components/Map/Map.module.scss";


const Map = () => {
    return (
        <Box className={styles.mapContainer}>
            <iframe  className={styles.mapIframe}
                     allowFullScreen="true"
                     loading="lazy" src="https://www.google.com/maps/d/u/0/embed?mid=1vkuqLLMSedq5S6-BzBdJnlhMmRagdc0&ehbc=2E312F"></iframe>
        </Box>
    );
};

export default Map;