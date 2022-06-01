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
]


const ProjectDetail = () => {

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


    return (
        <AnimatePresence>
            <Layout>
                <div className="min-h-screen w-full h-full relative flex flex-col justify-center items-center gap-5">
                    {themes.map((item, index) => (
                        <div key={index} ref={(e) => (GroupRef.current[index] = e)} data-bgcolor={item.theme.background} className="w-full h-full relative">

                        </div>
                    ))
                    }
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default ProjectDetail;