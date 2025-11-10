"use client";

import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

const theme = createTheme({
    typography: {
        fontFamily: 'Jost, sans-serif',
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                        borderWidth: '2px',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: 'black',
                    },
                },
            },
        },
    },
});

export default function ThemeProvider({ children }) {
    return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
