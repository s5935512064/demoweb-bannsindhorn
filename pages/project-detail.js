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


const ProjectDetail = () => {

    const GroupRef = useRef([]);

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
                <section className=" w-full h-full relative overflow-hidden flex justify-center items-end md:items-center">
                    <div

                        className="max-w-7xl w-full h-full relative px-6 md:px-10  mb-16">
                        <h1 className="font-bold  text-xl md:text-4xl font-serif text-[#82603f] mb-5 text-center">PROJECT DETAILS</h1>



                        <table className="border-collapse  table-fixed md:table-auto  w-full text-sm font-light ">
                            <tbody >
                                <tr >
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f] ">Project</td>
                                    <td className="border-b p-2 text-black">Bann Sindhorn</td>

                                </tr>
                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Developer</td>
                                    <td className="border-b p-2 text-black">Siam Sindhorn Co., Ltd.</td>
                                </tr>
                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Address</td>
                                    <td className="border-b p-2 text-black">Sarasin Road, Lumpini, Bangkok</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Product Type</td>
                                    <td className="border-b p-2 text-black">Leasehold residential condominium</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Ownership Structure</td>
                                    <td className="border-b p-2 text-black">30-year leasehold, plus option to renew for another 30 years</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Total Land Area</td>
                                    <td className="border-b p-2 text-black">1-1-53 Rai</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Tower Height</td>
                                    <td className="border-b p-2 text-black">8 stories</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Unit Size</td>
                                    <td className="border-b p-2 text-black">122 sq.m. to 392 sq.m.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Total Number of Units</td>
                                    <td className="border-b p-2 text-black">32 units</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Type of Units</td>
                                    <td className="border-b p-2 text-black">2 bedroom and Penthouse</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Ceiling Height</td>
                                    <td className="border-b p-2 text-black">Up to 3.0 m. in primary spaces (living/dining/bedrooms)</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Parking</td>
                                    <td className="border-b p-2 text-black">62 car parking spaces</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f]">Facilities</td>
                                    <td className="border-b p-2"><ul className="text-black list-disc list-inside">
                                        <li>
                                            Residence lobby
                                        </li>
                                        <li>
                                            Residence lounge
                                        </li>
                                        <li>
                                            Indoor swimming pool with saltwater chlorination system
                                        </li>
                                        <li>
                                            Fully-equipped fitness room
                                        </li>
                                        <li>
                                            Changing rooms and locker rooms with sauna and steam rooms
                                        </li>
                                        <li>
                                            Rooftop garden
                                        </li>
                                    </ul></td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium p-2 text-[#82603f] ">Services</td>
                                    <td className="p-2"><ul className=" text-black list-disc list-inside">
                                        <li>
                                            Property management provided by Siam Sindhorn Co., Ltd.
                                        </li>
                                        <li>
                                            Concierge
                                        </li>
                                        <li>
                                            Doorman
                                        </li>
                                        <li>
                                            Shuttle service
                                        </li>
                                        <li>
                                            24-hour security system with direct security card access control
                                        </li>
                                        <li>
                                            Room cleaning (upon request with extra charge)
                                        </li>
                                        <li>
                                            Laundry (upon request with extra charge)
                                        </li>
                                    </ul></td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </section>
            )

        }
        else if (contentTitle.contentTitle == "section2") {
            return (
                <section className="w-full h-full relative overflow-hidden flex justify-center items-end md:items-center">
                    <div className="max-w-7xl w-full h-full relative px-6 md:px-10  mb-16">
                        <h1 className="font-bold  text-xl md:text-4xl font-serif text-[#82603f] text-center mb-5">PROJECT DEVELOPMENT TEAM</h1>



                        <table className="border-collapse  table-fixed md:table-auto  w-full text-sm font-light ">
                            <tbody >
                                <tr >
                                    <td className="italic font-serif font-medium border-b  p-2 text-[#82603f] border-b-slate-300">Developer</td>
                                    <td className="border-b p-2 border-b-slate-300">Siam Sindhorn Co., Ltd.</td>

                                </tr>
                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f] border-b-slate-300">Contractor</td>
                                    <td className="border-b p-2 border-b-slate-300">Thai Obayashi Corp., Ltd.</td>
                                </tr>
                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f] border-b-slate-300">Architect</td>
                                    <td className="border-b p-2 border-b-slate-300">The Office of Bangkok Architects Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f] border-b-slate-300">Interior Architect</td>
                                    <td className="border-b p-2 border-b-slate-300">August Design Consultant Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f] border-b-slate-300">Landscape Architect</td>
                                    <td className="border-b p-2 border-b-slate-300">P Landscape Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#82603f] border-b-slate-300">Lighting Designer</td>
                                    <td className="border-b p-2 border-b-slate-300">APLD Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b  border-b-slate-300 p-2 text-[#82603f]">Structural Engineer</td>
                                    <td className="border-b p-2 border-b-slate-300 ">PSAA Consulting Engineers Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b border-b-slate-300 p-2 text-[#82603f]">M&E Engineer</td>
                                    <td className="border-b border-b-slate-300 p-2 ">MITR Technical Consultant Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b-slate-300 border-b p-2 text-[#82603f]">Facade Design Consultant</td>
                                    <td className="border-b border-b-slate-300 p-2 ">Facade Associates Co., Ltd.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium  p-2 text-[#82603f]">LEED Environmental Design Consultant
                                    </td>
                                    <td className="p-2 ">SCG Green Building Solution</td>
                                </tr>




                            </tbody>
                        </table>



                    </div>
                </section>
            )
        }

        else if (contentTitle.contentTitle == "section3") {
            return (
                <section className="w-full h-full relative overflow-hidden flex justify-center items-end md:items-center">
                    <div className="max-w-7xl w-full h-full  relative px-6 md:px-10">
                        <h1 className="font-bold  text-xl md:text-4xl font-serif  mb-5 text-[#82603f] text-center">GENERAL SPECIFICATION</h1>

                        <div>

                            <table className="border-collapse  table-auto  w-full text-sm font-light ">
                                <tbody >
                                    <tr className="">
                                        <td className="font-medium border-b  text-black border-b-slate-300">Structure</td>
                                        <td className="border-b p-2 border-b-slate-300"> <ul className=" text-black list-disc list-inside">
                                            <li>
                                                Reinforced concrete bored piles, columns and shear walls
                                            </li>
                                            <li>
                                                Reinforced concrete flat slabs
                                            </li>

                                        </ul></td>

                                    </tr>
                                    <tr >
                                        <td className="font-medium  pt-5  text-black ">Residence Unit</td>
                                    </tr>

                                    <tr>

                                        <td className="md:pl-6 italic font-serif font-medium p-2 text-[#82603f] "> Floor Finishing</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside ">
                                            <li>
                                                Living, Dining and Kitchen: Engineered wood
                                            </li>
                                            <li>
                                                Bedrooms: Engineered wood
                                            </li>
                                            <li>
                                                Bathrooms: Marble
                                            </li>
                                            <li>
                                                Balcony: Homogenous ceramic tiles
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Walls and Doors</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                Unit partition wall: Double layered plastered wall with paint finish (200 mm. nominal thickness)
                                            </li>
                                            <li>
                                                Unit internal wall: Plastered wall with paint finish (100 mm. nominal thickness)
                                            </li>

                                            <li>
                                                Bathrooms: Marble
                                            </li>

                                            <li>
                                                Glass window: Triple layered insulated glass panel with double Low-E coating and solid aluminum frame
                                            </li>


                                            <li>
                                                Balcony door: Triple layered insulated glass panel with double Low-E coating and solid aluminum frame
                                            </li>

                                            <li>
                                                Balustrade: Clear laminated glass
                                            </li>

                                            <li>
                                                Entrance door: Fire resistant door with high-quality veneer finish and HAFELE fittings and digital door lock : KABA,YALE or equivalent
                                            </li>

                                            <li>
                                                Internal doors: Hard-wood door with high-quality laminated finish and HAFELE fittings
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Ceilings</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                Up to 3.0 m. clear height in primary spaces (living/dining/bedrooms)
                                            </li>
                                            <li>
                                                Complete flat fixed gypsum board with paint finish
                                            </li>


                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Kitchen: each unit will be
                                            equipped with high-quality
                                            hardware fittings</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                POGGENPOHL, a luxury German kitchen set with laminated finish
                                            </li>
                                            <li>
                                                HANSGROHE, kitchen faucet
                                            </li>
                                            <li>
                                                BLANCO or equivalent, stainless steel sink and faucet
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>

                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Kitchen Appliances</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                KUPPERSBUSCH or equivalent,
                                                <ul className=" pl-8">
                                                    <li>
                                                        Built-in microwave
                                                    </li>
                                                    <li>
                                                        Built-in oven
                                                    </li>
                                                    <li>
                                                        Built-in refrigerator
                                                    </li>
                                                    <li>
                                                        Ceramic induction hob
                                                    </li>
                                                    <li>
                                                        Kitchen hood
                                                    </li>
                                                    <li>
                                                        Washing machine and drying machine for all units
                                                    </li>

                                                </ul>
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Cabinet: Built-in with
                                            high-quality hardware and
                                            fittings and laminated finish</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                POLIFORM, a luxury Italian wardrobe brand
                                            </li>
                                            <li>
                                                Shoes and Utility cabinets are provided with the similar built-in quality fittings and finishing
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] border-b  border-b-slate-300">Bathrooms</td>
                                        <td className=" p-2 border-b  border-b-slate-300"><ul className=" text-black list-disc list-inside">
                                            <li>
                                                HANSGROHE, shower sets
                                            </li>
                                            <li>
                                                HANSGROHE, washbasin faucet and bathtub set
                                            </li>
                                            <li>
                                                TOTO, Neorest auto washlet in master bathroom
                                            </li>
                                            <li>
                                                High-quality sanitary fixtures and fittings
                                            </li>
                                            <li>
                                                Frameless tempered glass shower partition
                                            </li>
                                            <li>
                                                STIEBEL ELTRON, water heater or equivalent
                                            </li>

                                        </ul></td>

                                    </tr>

                                    {/* common area */}
                                    <tr >
                                        <td className="font-medium  pt-5  text-black ">Common Areas</td>
                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium p-2 text-[#82603f] "> Main Lobby</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside ">
                                            <li>
                                                Marble
                                            </li>
                                            <li>
                                                Modern designed feature wall and/or plastered wall with paint finish
                                            </li>
                                            <li>
                                                Modern designed feature ceiling and/or wood finished ceiling with paint finish
                                            </li>
                                            <li>
                                                Up to 5 m. height of ceiling in the main lobby
                                            </li>

                                            <li>
                                                Digital access control by key card to residence floor in all lifts
                                            </li>
                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6  italic font-serif font-medium  p-2 text-[#82603f] ">Fitness and Recreational
                                            Facilities: provided with
                                            landscape gardens and terrace</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                Fully equipped fitness room in well-designed features with modern high-quality fitness equipments, noise absorbing floor and gypsum ceiling with luminaire stretch ceiling
                                            </li>
                                            <li>
                                                Complete provision of changing rooms, locker rooms, sauna and steam rooms
                                            </li>

                                            <li>
                                                Indoor swimming pool and pool terrace
                                            </li>
                                        </ul></td>

                                    </tr>


                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] border-b  border-b-slate-300">Parking Spaces:
                                            for residents and visitors</td>
                                        <td className="p-2 border-b  border-b-slate-300 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                Parking spaces for Sixty-two cars are provided
                                            </li>

                                        </ul></td>

                                    </tr>


                                    {/* Property Services*/}
                                    <tr >
                                        <td className="font-medium  pt-5  text-black ">Property Services</td>
                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium p-2 text-[#82603f] "> Lifts</td>
                                        <td className=" p-2 "><ul className=" text-black list-disc list-inside ">
                                            <li>
                                                Two passenger lifts and two service/fireman lifts ; OTIS
                                            </li>
                                            <li>
                                                Security access control in all lifts
                                            </li>

                                        </ul></td>
                                    </tr>

                                    <tr>
                                        <td className="md:pl-6  italic font-serif font-medium  p-2 text-[#82603f] ">Fire Protection</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                Fully equipped with addressable fire alarm systems, fire hose stations, fire extinguishers and emergency lights
                                            </li>
                                            <li>
                                                Fully automated fire prevention and suppression with smoke/heat detectors and sprinkler system throughout the residential building
                                            </li>

                                            <li>
                                                Fire stairs and fireman lift halls with pressurization system
                                            </li>
                                        </ul></td>

                                    </tr>


                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Electrical and Security System</td>
                                        <td className="p-2  "><ul className=" text-black list-disc list-inside">
                                            <li>
                                                Advanced access control with securitized digital key card to main lobby and in all lifts
                                            </li>

                                            <li>
                                                24-hour on-site security guards, with CCTV monitoring and recording
                                            </li>

                                            <li>
                                                Energy efficient LED down lights in all residential units
                                            </li>

                                            <li>
                                                Separate electrical meter for each residence unit
                                            </li>

                                            <li>
                                                Emergency power supply for all common areas, essential systems and lifts
                                            </li>

                                            <li>
                                                Standby generator with capacity of over 8 hours emergency supply
                                            </li>

                                            <li>
                                                Emergency lighting at room entrance for each residence unit
                                            </li>
                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Air Conditioning System</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">

                                            <li>
                                                DAIKIN, energy efficient VRV System
                                            </li>

                                            <li>
                                                Concealed installation throughout the internal private and common areas
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Television, Telephone and
                                            Internet System</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">

                                            <li>
                                                TV outlet provided in living area and bedrooms with provision for future cable connection
                                            </li>

                                            <li>
                                                Telephone outlets provided in living area and in all bedrooms
                                            </li>

                                            <li>
                                                FTTX fiber optic provided in all residential units to enable high-speed internet
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Water System</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">

                                            <li>
                                                Public water supply with 2-day reserved water tank held on-site
                                            </li>

                                            <li>
                                                Separate water meter for each residence unit
                                            </li>

                                            <li>
                                                Waste water treatment system
                                            </li>

                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <td className="md:pl-6 italic font-serif font-medium  p-2 text-[#82603f] ">Lightning Protection System</td>
                                        <td className="p-2 "><ul className=" text-black list-disc list-inside">

                                            <li>
                                                Lightning protection system is installed throughout the residential areas in accordance with international standards
                                            </li>



                                        </ul></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            )
        }
    }

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
                <div className="min-h-screen w-full h-full relative flex flex-col justify-center items-center gap-5 pt-28">

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

export default ProjectDetail;