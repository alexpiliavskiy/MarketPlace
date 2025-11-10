import React, {useContext, useMemo} from 'react';
import {Box, Chip} from "@mui/material";
import Button from "@mui/material/Button";
import BaseButton from "@/components/BaseButton/BaseButton";
import styles from "@/components/FilterDrawerSection/ResetFiltersSection.module.scss";
import {ServerOptions} from "@/context/serverOptions.context";
import {keys, Stack} from "@mui/system";

const ResetFiltersSection = ({resetFilters}) => {
    const {serverOptions, setServerOptions} = useContext(ServerOptions);

    const filterTags = useMemo(() => {
        const tags = [];
        Object.keys(serverOptions).filter((key) => key !== "page").forEach((key) => {
            if (serverOptions[key] && serverOptions[key]?.length) {
                if (Array.isArray(serverOptions[key])) {
                    serverOptions[key].forEach((val) => {
                        tags.push({id:key, value: val});
                    })
                } else {
                    tags.push({id:key, value: serverOptions[key]});
                }
            }
        })
        return tags;
    }, [serverOptions]);

    const handleDelete = (id, value) => {
        if (Array.isArray(serverOptions[id])) {
            setServerOptions(prev => ({
                ...prev,
                [id]: prev[id].filter((val) => val !== value),
            }))
        } else {
            setServerOptions(prev => ({
                ...prev,
                [id]: null,
            }))
        }
    };

    return (
        <Box component="section">
            <Box className={styles.ResetFiltersContainer}>
                <Stack direction="row" className={styles.ResetFiltersBtn}>
                {filterTags.map((tag, index) => (
                    <Chip
                        key={index}
                        label={tag.value}
                        onDelete={() => handleDelete(tag.id, tag.value)}
                    />
                ))}
                </Stack>
            </Box>
            <Box>
                <BaseButton onClick={resetFilters} variant="text" className={styles.ResetAllFiltersBtn}>RESET
                    FILTER</BaseButton>
            </Box>
        </Box>
    );
};

export default ResetFiltersSection;