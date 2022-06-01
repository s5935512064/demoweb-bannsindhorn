import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const listMenuItem = [
    { name: "Home", href: "/" },
    { name: "Facilities", href: "/facilities" },
    { name: "Project Details", href: "/project" },
    { name: "Unit & Floorplan", href: "/floorplan" },
    { name: "Contact", href: "/contact" },

]

const Navbar = () => {

    const [menuBar, setMenuBar] = useState(false);

    const ToggleSidebar = () => {
        setMenuBar(!menuBar);
    }

    useEffect(() => {
        setMenuBar(false);
    }, [])



    return (
        <div className="w-full overflow-hidden relative h-full">
            <div className="fixed top-0 w-28 h-20 ml-4 md:ml-10 z-20 mt-2">
                <Image
                    src="/assets/Bann-logo-01.svg"
                    alt="logo"
                    layout="fill"

                    objectFit="contain"
                    className="cursor-pointer hover:opacity-70 duration-300" />
            </div>
            <div className="fixed top-0 right-0 w-fit h-16 flex justify-end px-4 md:px-10 z-30">
                <div className="flex h-full items-center ">
                    <button id="menuBtn" type="button" onClick={ToggleSidebar} className={classNames(
                        menuBar ? "text-white border-white" : "text-black border-black border-opacity-0", "w-20 text-sm  rounded-full px-4 py-1  border hover:border-opacity-100  duration-300")}>{menuBar ? "Close" : "Menu"} </button>
                </div>
            </div>

            <div id="sideBar" className={classNames(
                menuBar ? "translate-x-0" : "translate-x-full", "h-screen max-w-[512px] w-full bg-[#83603f] fixed right-0 top-0 transform duration-500 z-20")}>

            </div>

            <div id="shadow" className={classNames(
                menuBar ? "opacity-70" : "hidden opacity-0", "w-full h-screen  bg-black fixed transform duration-500 z-10")} />

        </div>
    );
}

export default Navbar;