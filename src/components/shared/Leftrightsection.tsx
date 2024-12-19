import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'


const data = [
    {

    }
]




const Leftrightsection = () => {
  return (
     <div className=" relative  px-4  ">
            {/* Decorative elements */}


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[45%,52%] border py-6 md:py-14 bg-gradient-to-r from-secondary bg-secondary/50 to-black/70 rounded-3xl justify-center innercontainer mx-auto ">
                <div className="relative order-2 lg:order-1 ">
                   
                    {/* Analytics Graph */}
                    <div data-aos="fade-right" className="absolute -left-6 md:-left-8 -bottom-10 bg-white border z-20 p-2 rounded-3xl  ">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/home/smalldashboard.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[160px] md:max-w-[300px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                    <div className="absolute -left-8 md:-left-20 -top-10  z-20  rounded-3xl  ">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/home/pattern1.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[100px] md:max-w-[130px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                    <div className="absolute right-4 -bottom-16  z-20  rounded-3xl  ">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/home/pattern3.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[130px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10">
                        <div data-aos="zoom-in" className="overflow-hidden rounded-3xl relative">
                            {/* Background Element */}
                            <div className="absolute bottom-0 bg-gradient-to-tr from-primary to-secondary z-0 h-[70%] w-full"></div>

                            {/* Foreground Image */}
                            <img 
                                src="/home/women.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[350px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-2">
                    <div className="space-y-6">
                        {/* Badge */}
                        <span  className="px-4 border inline rounded-full bg-white !-mb-6 font-bold text-primary  py-2  text-sm">
                            About CloudSave 🔥
                        </span>

                        {/* Heading */} <h1 className=" text-2xl md:text-4xl font-[500] tracking-tight md:!leading-[60px] lg:text-5xl text-white">
                        CloudSave Secures Your Data with Excellence
                        </h1>

                        {/* Description */}
                        <p className="text-base text-gray-300 font-[500] text-muted-foreground">
                        At CloudSave, your data security and privacy are our highest priorities. We safeguard your cloud storage with
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4 tracking-wide text-white">
                            <li data-aos="fade-up" className="flex items-center space-x-3">
                            <MdDoubleArrow size={20} className='min-w-5'/>

                                <span className='text-[15px]'><span className='underline'>Advanced Encryption:</span> Your files are protected with state-of-the-art encryption both during transfer and at rest.</span>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="150" className="flex items-center space-x-3">
                                
                                       <MdDoubleArrow size={20} className='min-w-5'/>
                                
                                <span className='text-[15px]'><span className='underline'>Global Standards Compliance:</span> CloudSave adheres to industry-leading certifications and regulations, ensuring your data is stored safely.</span>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300" className="flex items-center space-x-3">
                            <MdDoubleArrow size={20} className='min-w-5'/>

                                <span className='text-[15px]'><span className='underline'>24/7 Monitoring:</span> Our infrastructure is monitored round the clock to prevent unauthorized access and ensure uninterrupted service.</span>
                            </li>
                        </ul>
                        <p className="text-base text-gray-300 font-[500] text-muted-foreground">
                        Trust CloudSave to keep your data secure while providing unmatched storage capacity and reliability. Your files, our responsibility.

                        </p>
                        {/* CTA Button */}
                        <div className='!mt-10'>

                            <span  className="bg-primary-300 border cursor-pointer duration-300 border-secondary text-white px-5 text-sm py-2.5 rounded-full hover:bg-purple-700">
                                Discover More →
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
  )
}

export default Leftrightsection