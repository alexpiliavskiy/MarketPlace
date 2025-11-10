"use client";

import React, {useState} from 'react';
import {Box, Button, Drawer} from "@mui/material";
import styles from "@/components/ShopPageSection/FilterPanel.module.scss";

const FilterPanel = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(true);
    }

    return (
        <Box className={styles.filteredContainer}>
            <Button variant="contained" onClick={() => toggleDrawer(true)} className={styles.openBtn}>Open Filters</Button>
            <Drawer sx={{width: "200px"}} anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            </Drawer>
        </Box>
    );
};

export default FilterPanel;