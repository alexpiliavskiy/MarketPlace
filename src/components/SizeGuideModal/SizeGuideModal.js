import React from 'react';
import Image from 'next/image';
import { Modal, Box, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from '@/components/SizeGuideModal/SizeGuideModal.module.scss';

export default function SizeGuideModal({ open, onClose }) {
    const jeansData = [
        { _id: 1, label: 'SIZE', values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
        { _id: 2, label: 'BUST', values: ['87', '87', '87', '87', '87', '87'] },
        { _id: 3, label: 'WAIST', values: ['67', '67', '67', '67', '67', '67'] },
        { _id: 4, label: 'HIPS', values: ['87', '87', '87', '87', '87', '87'] },
    ];

    const footwearData = [
        { _id: 1, label: 'SIZE', values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
        { _id: 2, label: 'BUST', values: ['87', '87', '87', '87', '87', '87'] },
        { _id: 3, label: 'WAIST', values: ['67', '67', '67', '67', '67', '67'] },
        { _id: 4, label: 'HIPS', values: ['87', '87', '87', '87', '87', '87'] },
    ];

    const renderGridItems = (data) => {
        return data.map((item, index) => (
            <React.Fragment key={index}>
                <Grid item xs={4} className={styles.gridItem}>
                    <Typography variant="body2" className={styles.gridLabel}>
                        {item.label}
                    </Typography>
                </Grid>
                <Grid item xs={8} className={styles.gridValues}>
                    {item.values.map((value, idx) => (
                        <Typography variant="body2" key={idx}>
                            {value}
                        </Typography>
                    ))}
                </Grid>
            </React.Fragment>
        ));
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="size-guide-modal">
            <Box className={styles.modalContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={styles.closeButton}>
                        <Typography variant="h6" component="h2">
                            SIZE GUIDE
                        </Typography>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box className={styles.imageContainer}>
                            <Image
                                src="/size-guide.jpg"
                                alt="Size Guide"
                                layout="fill"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography className={styles.sectionTitle}>JEANS</Typography>
                        <Grid container spacing={2}>
                            {renderGridItems(jeansData)}
                        </Grid>

                        <Typography className={styles.sectionTitle} sx={{ mt: 2 }}>
                            FOOTWEAR
                        </Typography>
                        <Grid container spacing={2}>
                            {renderGridItems(footwearData)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}
