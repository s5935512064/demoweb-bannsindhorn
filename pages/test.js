import { getSession } from "next-auth/react"
import React, { useState, useEffect } from "react";



const test = (req, res) => {



    useEffect(() => {
        var SessionID = "<%=Session.SessionID%>";


        console.log(SessionID);

    }, [])
    return (
        <div>
            Enter
        </div>
    );
}

export default test;