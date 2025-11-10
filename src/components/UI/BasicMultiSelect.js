import React from 'react';
import {
    Box,
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select
} from "@mui/material";

const BasicMultiSelect = ({name, value, handleChange, options, multiple = true,  ...props}) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <>
            <FormControl sx={{width: "100%"}}>
                <InputLabel id="categories-label">{name}</InputLabel>
                <Select

                    labelId="demo-multiple-checkbox-label"
                    name={name}
                    multiple={multiple}
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag"/>}
                    renderValue={(selected) =>
                        multiple ?
                        selected.length > 0
                            ? selected
                                .map((id) => options.find((option) => option.id === id)?.name || '')
                                .join(', ')
                            : 'No items selected'
                            :  options.find((option) => option.id === selected)?.name
                    }
                    MenuProps={MenuProps}
                    {...props}
                >
                    {options.map((option) => (
                        <MenuItem key={option.id} value={option.id}>

                            {multiple && (
                                <>
                                    <Checkbox sx={{
                                        color: 'black',
                                        backgroundColor: 'transparent',
                                        '&.Mui-checked': {
                                            color: 'black',
                                            '& .MuiSvgIcon-root': {
                                                backgroundColor: 'transparent',
                                            },
                                            '&.Mui-checked': {
                                                backgroundColor: 'transparent',
                                                '&.Mui-checked:hover': {
                                                    backgroundColor: 'transparent',
                                                }
                                            }
                                        },
                                    }} checked={value.includes(option.id)}/>
                                </>
                            )}
                            <ListItemText primary={option.name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default BasicMultiSelect;