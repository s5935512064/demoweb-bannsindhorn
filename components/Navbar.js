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
    { name: "Project Details", href: "/project-detail" },
    { name: "Unit & Floorplan", href: "/floorplan" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },

]

const Navbar = () => {
    const router = useRouter();
    const [menuBar, setMenuBar] = useState(false);

    const ToggleSidebar = () => {
        setMenuBar(!menuBar);
    }

    useEffect(() => {
        setMenuBar(false);
    }, [])



    return (
        <div className="w-full overflow-hidden relative h-full ">
            <div className="fixed top-0 w-full h-24  z-10 bg-white/80 backdrop-blur " />
            <Link href={"/"}>
                <div className="fixed top-0 w-28 h-20 ml-4 md:ml-10 z-20 mt-2">
                    <Image
                        src="/assets/Bann-logo-01.svg"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        className="cursor-pointer hover:opacity-70 duration-300" />
                </div>
            </Link>
            <div className="fixed top-0 right-0 w-fit h-24 flex justify-end px-4 md:px-10 z-30">
                <div className="flex h-full items-center gap-3 ">
                    <button id="registerBtn" type="button" className={classNames(
                        menuBar ? "text-white border-white" : "text-[#83603f] border-[#83603f] hover:bg-[#83603f] hover:text-white ", "w-28 text-sm  rounded-full px-4 py-1  border  duration-300")}>Register </button>
                    <button id="menuBtn" type="button" onClick={ToggleSidebar} className={classNames(
                        menuBar ? "text-white border-white" : "text-[#83603f] border-[#83603f] border-opacity-0", "w-20 text-sm  rounded-full px-4 py-1  border hover:border-opacity-100  duration-300")}>{menuBar ? "Close" : "Menu"} </button>
                </div>
            </div>

            <div id="sideBar" className={classNames(
                menuBar ? "translate-x-0" : "translate-x-full", "h-screen max-w-[512px] w-full bg-[#83603f] fixed right-0 top-0 transform duration-500 z-20")}>

                <div className="w-full h-full flex justify-center items-center  text-white">
                    <div className="flex flex-col gap-5">
                        {listMenuItem.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <button className={
                                    router.pathname === item.href ? "w-80 px-4 py-2 font-semibold text-3xl text-left" : "w-80 px-4  text-2xl text-left"}>{item.name}</button>
                            </Link>
                        ))

                        }


                    </div>

                </div>

            </div>

            <div id="shadow" className={classNames(
                menuBar ? "opacity-70" : "hidden opacity-0", "w-full h-screen  bg-black fixed transform duration-500 z-10")} />

        </div>
    );
}

export default Navbar;