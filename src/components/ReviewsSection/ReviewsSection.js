import React from 'react';
import {Box, Typography, Avatar, Grid, TextField, Button, Rating} from '@mui/material';
import styles from './ReviewsSection.module.scss';

const ReviewSection = ({formData, currentUser, product, handleChange, handleRatingChange, submitComment}) => {

    return (
        <Box component="section" className={styles.commentContainer}>
            <Typography className={styles.mainTitle} variant="h5">Reviews</Typography>
            <Box className={styles.bodyContainer}>
                <Grid container alignItems="center">
                    {product.productComments.map((comment, id) => (
                        <React.Fragment key={id}>
                            <Avatar className={styles.avatar}>{currentUser.firstName.charAt(0).toUpperCase()}</Avatar>
                            <Typography className={styles.author}
                                        variant="body1">{`${currentUser.firstName} ${currentUser.secondName}`}</Typography>
                            <Typography className={styles.date} variant="body1">
                                {product.productComments.createdAt}
                            </Typography>
                            <Rating className={styles.rating} value={comment.rate} readOnly/>
                            <Grid item xs={12}>
                                <Typography key={id} className={styles.reviewText}>
                                    {comment.content}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>
            <Box className={styles.reviewForm}>
                <Typography className={styles.subTitleBottom}>
                    Be the first to review {product.title}
                </Typography>
                <Box className={styles.ratingContainer}>
                    <Typography className={styles.text} variant="body1">
                        Your rating:
                    </Typography>
                    <Rating
                        name="simple-controlled"
                        value={formData.rate}
                        onChange={handleRatingChange}
                    />
                </Box>
                <Box className={styles.formContainer}>
                    <Box className={styles.inputControl}>
                        <TextField
                            name="content"
                            type="text"
                            value={formData.content}
                            onChange={handleChange}
                            label="Your Review"
                            className={styles.formControl}
                            multiline
                            rows={8}
                            fullWidth
                        />
                    </Box>
                    <Button onClick={submitComment} variant="text" className={styles.submitButton}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ReviewSection;
