'use client'

import {  useState } from "react"

export default function about() {
    let [state,setSate]=useState("about page state")
    console.log('hi from about Client page render')
    return (<>hi from about Client</>)
}   