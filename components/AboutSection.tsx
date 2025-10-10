import React from 'react'
import Image from "next/image"
import { ArrowDownRight } from 'lucide-react'
import Link from "next/link"

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white px-8 py-20 mt-10 flex flex-col">
      <div className="flex justify-between">
        <div className="flex justify-start items-start">
           <Image src="/logoipsum.svg" alt="Logo" width={60} height={60} />
        </div>
        <div className="flex justify-center items-center font-semibold text-5xl max-w-3xl">
          <p>We are a premier sports agency dedicated to empowering athletes and elevating careers. Our passion is to unlock potential and create championship opportunities — blending strategic expertise with personalized athlete development.</p>
        </div>
      </div>
      <div className="flex justify-between gap-20 mt-20">
        <div className="flex flex-col justify-between items-start max-w-md">
           <h2 className="font-light text-lg text-gray-400 mb-12">OUR APPROACH</h2>
           <div className="flex gap-4 justify-start items-center">
            <Image src="/lead-1.jpg" alt="Sports agent" width={120} height={120} className="rounded-lg object-cover" />
            <Image src="/lead-2.jpg" alt="Athlete consultation" width={120} height={120} className="rounded-lg object-cover" />
            <Image src="/lead-1.jpg" alt="Contract negotiation" width={120} height={120} className="rounded-full object-cover" />
           </div>
        </div>
        <div className="flex flex-col justify-start items-start max-w-2xl">
          <h2 className="text-lg font-semibold text-black mb-8">Where athletic excellence meets strategic representation.</h2>
          <div className="space-y-6">
            <p className="text-md text-gray-500 leading-relaxed">
              Empire Sports Agency represents elite athletes across multiple disciplines, from contract negotiations to brand partnerships. We are a comprehensive sports management firm dedicated to maximizing our clients' potential both on and off the field.
            </p>
            <p className="text-md text-gray-500 leading-relaxed">
              Our experienced team combines deep industry knowledge with personalized service to secure record-breaking contracts, lucrative endorsements, and strategic career opportunities. We're committed to building lasting legacies for the world's most talented athletes.
            </p>
            <Link href="/about" className="flex border-b pb-1 items-center w-fit">
              LEARN MORE ABOUT US
              <ArrowDownRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection