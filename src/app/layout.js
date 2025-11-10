"use client";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.scss";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <Provider store={store}>
                <Header/>
                    {children}
                <Footer/>
            </Provider>
        </ThemeProvider>
        </body>
        </html>
    );
}
