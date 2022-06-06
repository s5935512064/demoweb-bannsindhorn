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
            background: "#fff",


        }
    },
    {
        title: "section2",
        theme: {
            background: "#e5e6e7",

        }
    },
    {
        title: "section3",
        theme: {
            background: "#fff",

        }
    },
]


const Floorplan = () => {

    const GroupRef = useRef([]);
    const [openTab, setOpenTab] = useState(1);

    const onScroll = (e) => {

        if (GroupRef.current[0] == null) {
            document.body.style.backgroundColor = "white"
        }
        else {

            const styles = GroupRef.current.map((item, index) => {

                const rect = item.getBoundingClientRect();
                return { item, rect };

            })
                .find((item) => item.rect.bottom >= window.innerHeight * 0.5);

            document.body.style.backgroundColor = `${styles.item.dataset.bgcolor}`
        }

    }


    useEffect(() => {

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll, false)

    }, [])


    const ConditionContent = (contentTitle) => {

        if (contentTitle.contentTitle == "section1") {
            return (
                <section className=" w-full min-h-screen h-full relative overflow-hidden flex justify-center items-end md:items-center">
                    <div className="w-full h-full max-w-7xl  p-4 md:p-10 flex items-center mt-20 md:mt-14 2xl:mt-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full items-center justify-items-center ">
                            <div className="w-full h-[65vh] md:h-[768px]  overflow-hidden relative flex p-2 md:p-4 border border-[#83603f]">

                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 3, delay: 0 }}
                                    className="w-full h-full relative"
                                >


                                    <Image
                                        src="/assets/floorplan/box-1-left.png"
                                        alt="box-1"
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:scale-105 duration-500" />

                                </motion.div>

                            </div>

                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", duration: 3, delay: 0 }}

                                className="w-full h-full flex justify-center items-center"
                            >


                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Unit Matrix</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5">EXCELLENCE
                                        IN VERY PREFERENCE</h1>

                                    <div className="hidden md:block w-full relative h-[500px] ">

                                        <Image
                                            src="/assets/floorplan/unit-matrix.png"
                                            alt="unit-matrix"
                                            layout="fill"
                                            objectFit="contain"
                                            className="hidden md:visible"
                                        />

                                    </div>

                                    <div className="visible md:hidden w-full relative h-[500px] ">

                                        <Image
                                            src="/assets/floorplan/unit-matrix-mobile.png"
                                            alt="unit-matrix"
                                            layout="fill"
                                            objectFit="contain"
                                            className="block md:hidden"
                                        />

                                    </div>



                                </div>
                            </motion.div>


                        </div>

                    </div>
                </section>
            )

        }
        else if (contentTitle.contentTitle == "section2") {
            return (
                <section className=" w-full min-h-screen h-full relative overflow-hidden flex justify-center items-center">
                    <div className="hidden md:block w-full min-h-screen h-full relative ">
                        <Image
                            data-aos="zoom-out-up"
                            src="/assets/floorplan/masterplan.png"
                            alt="masterplan"
                            layout="fill"
                            quality={100}
                            objectFit="contain"

                        />

                    </div>

                    <div className="md:hidden w-full h-full max-w-7xl  p-4  flex items-center ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full items-center justify-items-center ">
                            <div className="w-full h-[350px] overflow-hidden relative flex p-2 md:p-4 ">

                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 3, delay: 0 }}
                                    className="w-full h-full relative"
                                >


                                    <Image
                                        data-aos="zoom-out-up"
                                        src="/assets/floorplan/mobile-master.png"
                                        alt="masterplan"
                                        layout="fill"
                                        objectFit="contain"
                                    />

                                </motion.div>

                            </div>

                            <motion.div
                                initial={{ y: "200%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, } }}
                                animate={{
                                    y: 0,
                                    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
                                }}

                                className="w-full h-full flex justify-center items-center"
                            >


                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Master Plan</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5">INNOVATIVE AND VERSATITLE LAYOUT THAT CAPTIVATES ALL FAMILIES</h1>

                                    <p className="text-sm max-w-md w-fit font-light text-left"><ul className=" list-decimal">
                                        <li> Drop off</li>
                                        <li> Main Entrance</li>
                                        <li> Residence Lobby</li>
                                        <li> Residence Lounge</li>
                                        <li> Multi-Purpose Room</li>
                                        <li> Fitness Room</li>
                                        <li> Male Locker Room</li>
                                        <li> Female Locker Room</li>
                                        <li> Sauna Room</li>
                                        <li> Steam Room</li>
                                        <li> Indoor Swimming Pool</li>
                                        <li> Onsen</li>

                                    </ul>
                                    </p>


                                </div>
                            </motion.div>


                        </div>

                    </div>
                </section>
            )
        }

        else if (contentTitle.contentTitle == "section3") {
            return (
                <section className=" w-full min-h-screen h-full relative overflow-hidden flex justify-center items-center bg-green-400">

                    <div className="w-full h-full max-w-7xl  p-4 md:p-10  flex items-center bg-blue-300 ">
                        <div className="w-full relative  h-full">
                            <div className="flex flex-wrap">
                                <div className="w-full bg-red-300 h-full">
                                    <div className="relative flex flex-col min-w-0 break-words w-full">
                                        <div className="md:px-4 md:py-5 flex-auto overflow-hidden">
                                            <div className="tab-content tab-space max-h-[728px] h-full">
                                                <div className={openTab === 1 ? "flex flex-col" : "hidden"} id="link1">

                                                    <p className="bg-black"> 2nd - 7th FLOOR PLAN</p>

                                                    <div className="w-full h-[450px] relative">


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
                                        className="flex mb-0 list-none flex-wrap flex-row"
                                        role="tablist"
                                    >
                                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                                                role="tablist"
                                            >
                                                Photo Map
                                            </a>
                                        </li>
                                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                                                role="tablist"
                                            >
                                                Google Map
                                            </a>
                                        </li>

                                    </ul>
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
                        <div key={index} ref={(e) => (GroupRef.current[index] = e)} data-bgcolor={item.theme.background}

                            className="w-full h-full relative">
                            <ConditionContent contentTitle={item.title} />
                        </div>
                    ))
                    }
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Floorplan;