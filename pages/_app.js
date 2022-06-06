import '../styles/globals.css'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  const { pathname } = useRouter();

  const router = useRouter();




  useEffect(() => {

    // router.events.on('routeChangeStart', clearEventListener)

    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);

  }, [pathname]);


  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1400,
    });
  }, []);

  return (
    <>

      <AnimatePresence
        exitBeforeEnter
        initial={false}

      >
        <Component {...pageProps} />
      </AnimatePresence>
      {/* <Cookies /> */}
    </>

  );

}

export default MyApp
