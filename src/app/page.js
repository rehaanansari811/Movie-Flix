import Image from 'next/image'

import React from "react";
import Herosection from "@/app/components/Herosection";

export default function Home() {
  return (
    <>
        <Herosection title={"LET\'S WATCH MOVIE TOGETHER"} imageUrl={"/about1.svg"}/>
    </>
  )
}
