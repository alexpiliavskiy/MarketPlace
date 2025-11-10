"use client";

import React, {useState} from 'react';
import {Box, Container, Grid} from "@mui/material";
import BlogItem from "@/components/BlogSection/BlogItem";
import ShowMoreBtn from "@/components/ShowMoreBtn/showMoreBtn";
import BlogBannerTitleSection from "@/components/BlogSection/BlogBannerTitleSection";


const BlogSection = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [viewCount, setViewCount] = useState(4);


    const handleShowMoreCards = () => {
        setVisibleCount(prevCount => prevCount + 2);
    }

    const blogs = [
        {
            id: 1,
            subTitle: "BY ADMIN",
            title: "Woman with good shoes is never be ugly place",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-1.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 2,
            subTitle: "BY ADMIN",
            title: "5 Tips to Increase Your Online Sales",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-2.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 3,
            subTitle: "BY ADMIN",
            title: "Tree earth fowl given moveth deep lesser After",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-3.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 4,
            subTitle: "BY ADMIN",
            title: "Given Set was without from god divide rule Hath",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-4.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 5,
            subTitle: "BY ADMIN",
            title: "Woman with good shoes is never be ugly place",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-1.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 6,
            subTitle: "BY ADMIN",
            title: "5 Tips to Increase Your Online Sales",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-2.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 7,
            subTitle: "BY ADMIN",
            title: "Tree earth fowl given moveth deep lesser After",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-3.jpg",
            readingBtn: "CONTINUE READING"
        },
        {
            id: 8,
            subTitle: "BY ADMIN",
            title: "Given Set was without from god divide rule Hath",
            description: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
            data: "APRIL 05, 2024",
            imageUrl: "/blog-4.jpg",
            readingBtn: "CONTINUE READING"
        },
    ];

    const getGridColumns = () => {
        switch (viewCount) {
            case 2:
                return 6;
            default:
                return 6;
        }
    };

    return (
        <Box component="section" pt="60px">
                <BlogBannerTitleSection />
            <Container>
                <Grid container spacing={4} mt={4}>
                    {blogs.slice(0, visibleCount).map((blog, index) => (
                        <Grid item xs={12} sm={6} md={getGridColumns()}  key={index}>
                            <BlogItem blog={blog} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {visibleCount < blogs.length && (
                <Box>
                    <ShowMoreBtn onClick={handleShowMoreCards} />
                </Box>
            )}
        </Box>
    );
};

export default BlogSection;