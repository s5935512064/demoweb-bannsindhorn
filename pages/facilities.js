import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const themes = [
    {
        title: "section1",
        theme: {
            background: "#e5e6e7"
        }
    },
    {
        title: "section2",
        theme: {
            background: "#fff"
        }
    },
    {
        title: "section3",
        theme: {
            background: "#e5e6e7"
        }
    },
    {
        title: "section4",
        theme: {
            background: "#fff"
        }
    }
]


const Facilities = () => {
    const GroupRef = useRef([]);

    const onScroll = (e) => {

        const content = document.querySelector("#content2");

        const styles = GroupRef.current.map((item, index) => {
            const rect = item.getBoundingClientRect();

            return { item, rect };
        })
            .find((item) => item.rect.bottom >= window.innerHeight * 0.5);

        document.body.style.backgroundColor = `${styles.item.dataset.bgcolor}`
    }


    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])


    const ConditionContent = (contentTitle) => {

        if (contentTitle.contentTitle == "section1") {
            return (
                <section className="w-full h-screen relative overflow-hidden flex justify-center items-end md:items-center">
                    <motion.div
                        className="w-full h-full absolute  right-0 bottom-0"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ type: "spring", duration: 3, delay: 0 }}
                    >

                        <div className=" w-full h-[65vh] md:h-full bg-[url('/assets/facilities/facilities-banner.jpg')] bg-cover bg-no-repeat bg-center">
                            <div className="w-full h-full bg-gradient-to-b from-white opacity-40" />
                        </div>
                    </motion.div>

                    <div data-aos="fade-up"
                        data-aos-delay="300"
                        className="max-w-md w-full h-[55vh] bg-white/80 backdrop-blur relative flex items-center p-10">
                        <div
                            className="text-center text-[#7b7c80] grid justify-items-center items-center">
                            <p className="font-serif italic">Residence Lobby</p>
                            <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-5">BOUTIQUE,
                                YET STYLISH</h1>
                            <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                            <p className="text-sm max-w-md w-full font-light">Witness the superior atmosphereas you walk through the extravagant lobby. The fabulous lobby is a welcoming place of architectural genius with uncompromising grandeur.</p>
                        </div>
                    </div>
                </section>
            )

        }
        else if (contentTitle.contentTitle == "section2") {
            return (
                <section className="w-full h-full relative overflow-hidden flex justify-center items-center">
                    <div className="max-w-7xl w-full h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-2  h-auto md:h-[85vh]">
                            <div className="h-[50vh] md:h-full  p-10 md:p-20 ">
                                <div className="h-full border border-[#83603f] p-2 md:p-4">
                                    <div className="relative h-full">
                                        <Image
                                            data-aos="zoom-in-down"
                                            src="/assets/facilities/facilities-1.jpg"
                                            alt="facilities-1"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                className="h-full flex justify-center items-center px-4 md:px-10">
                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5 max-w-md w-full">REFLECTING
                                        AN APPRECIATION OF FAMILY BOND</h1>
                                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                                    <p className="text-sm max-w-md w-full font-light">Simple but elegant,
                                        every corner is designed to be both a place for you to relax with family and sophisticated functional part of working life, while also allowing privacy when desired. BAAN SINDHORN represents an eternal family bond as much as it embodies luxury living.</p>
                                </div>
                            </div>




                        </div>
                    </div>
                </section>
            )
        }

        else if (contentTitle.contentTitle == "section3") {
            return (
                <section className="w-full  h-full flex flex-col items-center">
                    <div className="w-full h-full max-w-7xl p-4 md:p-10  mb-5">
                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="200"
                            className="text-center text-[#7b7c80] grid justify-items-center  ">
                            <p className="font-serif italic">Indoor Swimming Pool</p>
                            <h1 className="font-bold text-4xl font-serif text-[#82603f]  w-full max-w-lg">WHEN A SUN-KISSED BEACH COMES TO YOUR BACKYARD</h1>

                        </div>
                    </div>

                    <div className="w-full h-[500px] md:h-[75vh] relative">
                        <Image
                            data-aos="zoom-out-up"
                            src="/assets/facilities/facilities-3.jpg"
                            alt="facilities-3"
                            layout="fill"
                            objectFit="cover"
                        />

                    </div>
                </section>
            )
        }
        else if (contentTitle.contentTitle == "section4") {
            return (
                <section className="w-full h-full relative overflow-hidden flex justify-center items-center">
                    <div className="max-w-7xl w-full h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-2  h-auto md:h-[85vh] ">
                            <div
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                className="h-full flex justify-center items-center px-4 md:px-10">
                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Fitness Room</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5 max-w-md w-full">REJUVENATION BEYOND IMAGINATION!</h1>
                                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                                    <p className="text-sm max-w-md w-full font-light">The private residential gym offers state-of-the-art work out equipment including weights and cardio machines, allowing you to work out in style.</p>
                                </div>
                            </div>

                            <div className="h-[50vh] md:h-full  p-10 md:p-20 ">
                                <div className="h-full border border-[#83603f] p-2 md:p-4">
                                    <div className="relative h-full">
                                        <Image
                                            data-aos="zoom-in-down"
                                            src="/assets/facilities/facilities-2.jpg"
                                            alt="facilities-2"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }

    }
    return (
        <AnimatePresence>
            <Layout>
                <div className="min-h-screen w-full h-full relative flex flex-col justify-center items-center gap-5">
                    {themes.map((item, index) => (
                        <div key={index} ref={(e) => (GroupRef.current[index] = e)} data-bgcolor={item.theme.background} className="w-full h-full relative">
                            <ConditionContent contentTitle={item.title} />
                        </div>
                    ))
                    }
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Facilities;