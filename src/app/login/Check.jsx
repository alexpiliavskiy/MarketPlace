'use client';

import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const Check = ({ label = "Remember me" }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Remember me' }}
                />
            }
            label={label}
        />
    );
};

export default Check;
