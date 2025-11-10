import React from 'react';
import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select
} from "@mui/material";

const BaseSelect = ({ name, value, handleChange, options, ...props }) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    return (
        <FormControl fullWidth>
            <InputLabel id={`${name}-label`}>{name}</InputLabel>
            <Select
                labelId={`${name}-label`}
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={handleChange}
                {...props}
            >
                {
                    options.map((option) => {
                        <MenuItem value={value}>{option.Description}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
};

export default BaseSelect;