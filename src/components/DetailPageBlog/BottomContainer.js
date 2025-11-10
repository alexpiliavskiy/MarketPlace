import React from 'react';
import {Box, Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import styles from "@/components/DetailPageBlog/BottomContainer.module.scss";

const BottomContainer = () => {
    return (
        <Box component="section">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box className={styles.bottomContainer}>
                        <Typography variant="h5" className={styles.titleBottom}>Why choose product?</Typography>
                        <List>
                            <ListItem className={styles.textBottom}>
                                <ListItemText primary="Creat by cotton fabric with soft and smooth" />
                            </ListItem>
                            <ListItem className={styles.textBottom}>
                                <ListItemText primary="Simple, Configurable (e.g. size, color, etc.), bundled" />
                            </ListItem>
                            <ListItem className={styles.textBottom}>
                                <ListItemText primary="Downloadable/Digital Products, Virtual Products" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box>
                        <Typography variant="h5" className={styles.titleBottom}>Sample Number List</Typography>
                        <List>
                            <ListItem className={styles.textBottomRight}>
                                <ListItemText primary="Create Store-specific attributes on the fly" />
                            </ListItem>
                            <ListItem className={styles.textBottomRight}>
                                <ListItemText primary="Simple, Configurable (e.g. size, color, etc.), bundled" />
                            </ListItem>
                            <ListItem className={styles.textBottomRight}>
                                <ListItemText primary="Downloadable/Digital Products, Virtual Products" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BottomContainer;