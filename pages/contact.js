import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <AnimatePresence>
            <Layout>
                <div className="w-full h-[85vh]  flex justify-center items-center">
                    <div className="max-w-7xl w-full h-auto  mt-28 md:mt-14 2xl:mt-0 border border-[#82603f]">
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:p-4 items-center">
                            <div className="h-full bg-[#dad8d6] flex items-center justify-center p-5">
                                <div
                                    className="text-center text-[#7b7c80] grid justify-items-center items-center">
                                    <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-5">SALES OFFICE</h1>
                                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                                    <p className="text-sm max-w-xs w-full font-light mb-5">Baan Sindhorn, 89 Soi Langsuan ,Langsuan Road, Pathumwan, Bangkok 10330</p>
                                    <p className="text-sm max-w-md w-full text-[#82603f]">Tel. 02 650 9595-6</p>
                                </div>

                            </div>
                            <div className="md:col-span-2 h-full ">
                                <div className="w-full relative  h-full">

                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <ul
                                                className="flex mb-0 list-none flex-wrap flex-row"
                                                role="tablist"
                                            >
                                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                    <a
                                                        className={
                                                            "text-xs md:text-base uppercase px-5 py-3  block leading-normal " +
                                                            (openTab === 1
                                                                ? "text-black border-b-2 border-[#B5A191]"
                                                                : "text-gray-500")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(1);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link1"
                                                        role="tablist"
                                                    >
                                                        Interior
                                                    </a>
                                                </li>
                                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                    <a
                                                        className={
                                                            "text-xs md:text-base font-medium uppercase px-5 py-3  block leading-normal " +
                                                            (openTab === 2
                                                                ? "text-black border-b-2 border-[#B5A191]"
                                                                : "text-gray-500")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(2);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link2"
                                                        role="tablist"
                                                    >
                                                        Exterior
                                                    </a>
                                                </li>
                                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                    <a
                                                        className={
                                                            "text-xs md:text-base font-medium uppercase px-5 py-3  block leading-normal " +
                                                            (openTab === 3
                                                                ? "text-black border-b-2 border-[#B5A191]"
                                                                : "text-gray-500")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(3);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link3"
                                                        role="tablist"
                                                    >
                                                        Video
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                                <div className="md:px-4 md:py-5 flex-auto overflow-hidden">
                                                    <div className="tab-content tab-space">
                                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                            <div>
                                                                1111
                                                            </div>
                                                        </div>
                                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                            <div>
                                                                222
                                                            </div>
                                                        </div>
                                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                                            <div>
                                                                3333
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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