"use client";
import React from "react";
import {Box} from "@mui/material";

export default function ProfileLayout({children}) {
    return (
        <Box component="section" pt="98px">
            {children}
        </Box>
    );
}
