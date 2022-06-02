import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    return (
        <AnimatePresence>
            <Layout>
                <div className="w-full min-h-[85vh] h-full  flex justify-center relative ">
                    <div className="max-w-7xl w-full h-full mt-28 relative px-4 md:px-10">
                        <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-10 text-center">GALLERY</h1>
                        <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-2">
                            {image.map((item, index) => (
                                <div key={index} className="w-full overflow-hidden cursor-pointer relative ">
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