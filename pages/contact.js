import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

const Contact = () => {
    const [openTab, setOpenTab] = useState(1);
    const router = useRouter();

    useEffect(() => {
        Fancybox.bind('[data-fancybox="map"]', {
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
                <div className="w-full min-h-[85vh] h-full  flex justify-center items-center bg-white">
                    <div className="max-w-7xl w-full h-auto  mt-28 md:mt-14 2xl:mt-0 md:border border-[#82603f]">
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-3 p-2 md:p-4 items-center">
                            <div className=" h-full bg-[#dad8d6] flex items-center justify-center p-5">
                                <div
                                    className="text-center text-[#7b7c80] grid justify-items-center items-center">
                                    <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-5">SALES OFFICE</h1>
                                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                                    <p className="text-sm max-w-xs w-full font-light mb-5">Baan Sindhorn, 89 Soi Langsuan ,Langsuan Road, Pathumwan, Bangkok 10330</p>
                                    <a href="tel:+6626509595" className="text-sm max-w-md w-full text-[#82603f]">Tel. 02 650 9595-6</a>
                                </div>

                            </div>
                            <div className="md:col-span-2 h-full ">
                                <div className="w-full relative  h-full">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                                <div className="md:px-4 md:py-5 flex-auto overflow-hidden">
                                                    <div className="tab-content tab-space max-h-[450px] h-full">
                                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                            <div
                                                                data-caption=""
                                                                href="/assets/contact/map1.png"
                                                                data-fancybox="map"

                                                                className="w-full h-[450px]">
                                                                <Image
                                                                    src="/assets/contact/map1.png"
                                                                    alt="map"
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                            <div>
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.672342619365!2d100.54108861532923!3d13.738276601306978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1850a481df%3A0x43debc0c4c3220c7!2zQmFhbiBTaW5kaG9ybiAo4Lia4LmJ4Liy4LiZ4Liq4Li04LiZ4LiY4LijKQ!5e0!3m2!1sth!2sth!4v1654139834204!5m2!1sth!2sth" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <ul
                                                className="flex mb-0 list-none flex-wrap flex-row w-fulljustify-center"
                                                role="tablist"
                                                aria-owns="tab-1 tab-2"
                                            >
                                                <li id="tab-1" role="tab" className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                    <a
                                                        className={
                                                            "text-sm px-5 py-3  block leading-normal " +
                                                            (openTab === 1
                                                                ? "text-white bg-[#82603f]"
                                                                : "text-gray-500 hover:text-[#82603f] ")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(1);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link1"

                                                    >
                                                        Photo Map
                                                    </a>
                                                </li>
                                                <li id="tab-2" role="tab" className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                    <a
                                                        className={
                                                            "text-sm px-5 py-3  block leading-normal " +
                                                            (openTab === 2
                                                                ? "text-white bg-[#82603f]"
                                                                : "text-gray-500 hover:text-[#82603f] ")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(2);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link2"

                                                    >
                                                        Google Map
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Contact;