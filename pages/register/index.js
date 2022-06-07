import Head from 'next/head'
import Image from 'next/image'
import Layout from "../../components/Layout";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from 'next/router'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



const Register = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const recaptchaRef = React.createRef();

    const handleSubmit = (event) => {

        event.preventDefault();
        // Execute the reCAPTCHA when the form is submitted
        recaptchaRef.current.execute();
        // router.push("/register/success");
    };

    const onReCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ email, captcha: captchaCode }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                // If the response is ok than show the success alert
                alert("Email registered successfully");
            } else {
                // Else throw an error with the message returned
                // from the API
                const error = await response.json();
                throw new Error(error.message)
            }
        } catch (error) {
            alert(error?.message || "Something went wrong");
        } finally {
            // Reset the reCAPTCHA when the request has failed or succeeeded
            // so that it can be executed again if user submits another email.
            recaptchaRef.current.reset();
            setEmail("");
        }
    }

    useEffect(() => {
        // onReCAPTCHAChange();
        // console.log("check", recaptchaRef);
    }, [])


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

                <div className="w-full min-h-[85vh]  h-full  flex justify-center relative bg-white">
                    <div className="max-w-7xl w-full h-full mt-28 relative px-6 md:px-10">
                        <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] text-center">REGISTER</h1>
                        <p className="text-[#7b7c80] font-serif italic text-center"> Register to receive special privileges</p>
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 py-9">
                            <div className="w-full h-[350px] md:h-[575px] relative">
                                <Image
                                    src="/assets/banner-register.webp"
                                    alt="register"
                                    layout="fill"

                                    objectFit="contain"
                                />

                            </div>

                            <div>
                                <form onSubmit={handleSubmit}>

                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        size="invisible"
                                        sitekey="6LczBE4gAAAAAIrzTyCub67ZLxQxbR_xT2pzMW5M"
                                        onChange={onReCAPTCHAChange}
                                    />

                                    <div className='md:px-4 pt-6 grid grid-cols-1 md:grid-cols-2 gap-1'>
                                        <div className="mb-2">
                                            <label className="block text-[#B6A694]  mb-2" htmlFor="name">
                                                First Name
                                            </label>
                                            <input className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="block text-[#B6A694]  mb-2" htmlFor="Lname">
                                                Last Name
                                            </label>
                                            <input className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Lname" type="text" placeholder="Lastname" required />
                                        </div>

                                        <div className="mb-2">
                                            <label className="block text-[#B6A694]  mb-2" htmlFor="email">
                                                Email
                                            </label>
                                            <input onChange={(e) => setEmail(e.target.value)} className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="block text-[#B6A694] mb-2" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone number" />
                                        </div>
                                        <div className="mb-2">
                                            <label className="block text-[#B6A694]   mb-2" htmlFor="typeUnit">
                                                Unit Type
                                            </label>
                                            <div className="relative">
                                                <select className="block font-light text-sm appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="typeUnit"
                                                    defaultValue="">
                                                    <option value="" disabled > Unit Type </option>
                                                    <option value="1 Bedroom" >1 Bedroom</option>
                                                    <option value="2 Bedroom">2 Bedroom</option>
                                                    <option value="3 Bedroom">3 Bedroom</option>
                                                    <option value="Penthouse">Penthouse</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <label className="block text-[#B6A694]  mb-2" htmlFor="price">
                                                Price
                                            </label>
                                            <div className="relative">
                                                <select className="block font-light text-sm appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price"
                                                    defaultValue="">
                                                    <option value="" disabled > Price </option>
                                                    <option value="less than 20 Million Baht" >Less than 20 Million Baht</option>
                                                    <option value="21-30 Million Baht">21-30 Million Baht</option>
                                                    <option value="31-40 Million Baht">31-40 Million Baht</option>
                                                    <option value="41-50 Million Baht">41-50 Million Baht</option>
                                                    <option value="more than 50 Million Baht">More than 50 Million Baht</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2 md:col-span-2">
                                            <label className="block text-[#B6A694]  mb-2" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Tell us what you're thinking about..." />
                                        </div>

                                    </div>

                                    <div className="md:px-4 pt-6">


                                        <button type="submit" className="w-fit px-6 py-2 bg-[#82603f] text-white hover:bg-white border border-[#82603f] hover:text-[#82603f] duration-300">REGISTER</button>


                                    </div>



                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </Layout>

        </AnimatePresence>
    );
}

export default Register;