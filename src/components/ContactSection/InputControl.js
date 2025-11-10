"use client";

import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import styles from "@/components/ContactSection/InputControl.module.scss";

const InputControl = () => {
    const [inputs, setInputs] = useState({
        reviewInput: "",
        reviewNameInput: "",
        reviewEmailInput: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return (
        <Box className={styles.formContainer} component="section">
            <Typography className={styles.titleFormContainer} variant="h4">Get In Touch</Typography>
            <Box className={styles.inputControl}>
                <TextField
                    name="reviewNameInput"
                    value={inputs.reviewNameInput}
                    onChange={handleInputChange}
                    className={styles.formName}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                    }}
                />
                <TextField
                    name="reviewEmailInput"
                    value={inputs.reviewEmailInput}
                    onChange={handleInputChange}
                    className={styles.formEmail}
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                    }}
                />
                <TextField
                    name="reviewInput"
                    value={inputs.reviewInput}
                    onChange={handleInputChange}
                    label="Your Message"
                    className={styles.formControl}
                    variant="outlined"
                    multiline
                    rows={8}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                    }}
                />
            </Box>
            <Button variant="text" className={styles.submitButton}>
                Submit
            </Button>
        </Box>
    );
};

export default InputControl;