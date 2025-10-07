import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from 'lucide-react';

function AboutSection() {
  return (
    <div className="px-10 bg-white text-black py-20">
      <div className="flex gap-20 mt-12">
        <div className="flex items-start justify-start p-4">
            <Image src="/logoipsum.svg" alt="About Us" width={50} height={50} className=""/>
        </div>
        <div className="flex-1">
            <p className="text-5xl font-semibold font-mono leading-relaxed">
                We are a multidisciplinary design studio rooted in the 
                cultural heart of Yogyakarta. Our passion is to craft 
                visionary solutions for ambitious brands — blending 
                local insights with global perspectives.
            </p>
        </div>
      </div>
      <div className="py-20 flex gap-16 justify-between font-serif">
        <div className="flex flex-col justify-between min-h-full">
            <div className="flex items-start justify-start p-4 text-xl font-medium">Our Approach</div>
            <div className="flex gap-6 items-center justify-center">
                <Image src="/lead-1.jpg" alt="Our Approach" width={100} height={100} className="rounded-lg"/>

                <Image src="/lead-2.jpg" alt="Our Approach" width={100} height={100} className="rounded-lg"/>

                <Image src="/lead-1.jpg" alt="Our Approach" width={100} height={100} className="rounded-full "/>
            </div>
        </div>
        <div className="flex flex-col space-y-6">
            <div className="flex font-semibold text-xl font-medium">Where brand integrity meets digital possibility.</div>
            <div className="text-lg font-light max-w-2xl text-gray-400">
                A Yogyakarta-based creative agency pushing brands beyond boundaries — through design, storytelling, and strategy. We are a multidisciplinary design studio rooted in the cultural heart of Yogyakarta. Our passion is to craft visionary solutions for ambitious brands.
                <span className="mt-8 flex">We're a Yogyakarta-based creative agency helping ambitious brands break boundaries through design, storytelling, and strategy. Rooted in the cultural heart of Yogyakarta, our multidisciplinary studio is driven by a passion for crafting bold, visionary solutions that leave a lasting impact.</span>
                
            </div>

            <Link href="" className="flex gap-2 items-center text-lg font-light border-b max-w-72">
             LEARN MORE ABOUT EMPIRE
             <ArrowDownRight className="ml-1 w-5 h-5 text-sm font-light" /> 
            </Link>
        </div>
    
      </div>
        
    </div>
  )
}

export default AboutSection