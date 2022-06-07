import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const image = [
    { id: 1, src: "/assets/gallery/banner1.jpg", size: "big" },
    { id: 2, src: "/assets/gallery/banner3.jpg", size: "small" },
    { id: 3, src: "/assets/gallery/banner4.jpg", size: "small" },
    { id: 4, src: "/assets/gallery/banner2.jpg", size: "medium" },
    { id: 5, src: "/assets/gallery/Baan-Sindhorn.jpg", size: "medium" },
    { id: 6, src: "/assets/gallery/facilities-2.jpg", size: "small" },
    { id: 7, src: "/assets/gallery/facilities-2.jpg", size: "big" },
    { id: 8, src: "/assets/gallery/banner1.jpg", size: "small" },

]

const Gallery = () => {

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: false,
            Toolbar: {
                display: [
                    { id: "prev", position: "center" },
                    { id: "counter", position: "center" },
                    { id: "next", position: "center" },
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "download",
                    "thumbs",
                    "close",
                ],
            },

            Image: {
                zoom: false,
                click: false,
                wheel: "slide",
            },
        });

    }, []);

    return (
        <AnimatePresence>
            <Layout>
                <Head>
                    <title>Baan Sindhorn</title>
                    <meta name="description" content="Find 7 properties from 2 to 2 bed  units for Sale &amp; Rent available at Baan Sindhorn, Pathum Wan,  Bangkok" />
                    <meta content="22 ยูนิตสำหรับขาย และ 10 ยูนิตสำหรับเช่าที่ Baan Sindhorn (บ้านสินธร) ราคาตลาดเฉลี่ย คือ 0 บาท/ตรม. แนวโน้มราคา: คงที่" name="description" />
                    <meta content="บ้านสินธร,คอนโดมิเนียม,ปทุมวัน,กรุงเทพฯ" name="keywords" />
                    <meta content="//https://baansindhorn.com/" property="og:url" />
                    <meta content="Baan Sindhorn (บ้านสินธร) - คอนโดมิเนียม กรุงเทพฯ | Hipflat" property="og:title" />

                    <meta content="22 ยูนิตสำหรับขาย และ 10 ยูนิตสำหรับเช่าที่ Baan Sindhorn (บ้านสินธร)
ราคาตลาดเฉลี่ย คือ 0 บาท/ตรม. แนวโน้มราคา: คงที่" property="og:description" />
                    <meta name="apple-mobile-web-app-title" content="Baan Sindhorn" />
                    <meta name="application-name" content="Baan Sindhorn" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className="w-full min-h-[85vh] h-full  flex justify-center relative bg-white ">
                    <div className="max-w-7xl w-full h-full mt-28 relative px-6 md:px-10">
                        <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-10 text-center">GALLERY</h1>
                        <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-2">
                            {image.map((item, index) => (
                                <div
                                    data-caption=""
                                    href={item.src}
                                    data-fancybox="gallery"
                                    key={index} className="w-full overflow-hidden cursor-pointer relative ">
                                    <Image
                                        src={item.src}
                                        alt="gallery"
                                        layout="responsive"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Gallery;