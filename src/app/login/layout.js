"use client";
import React from "react";
import {Provider} from "react-redux";
import {Container} from "@mui/material";
import {store} from "@/store/store";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function LoginLayout({children}) {
    return (
        <>
            <Provider store={store}>
            <Header/>
                <Container sx={{ maxWidth: "650px" }}>
                    {children}
                </Container>
            <Footer/>
            </Provider>
        </>
    );
}
