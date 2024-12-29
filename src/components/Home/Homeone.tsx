import { Check } from 'lucide-react'
import React from 'react'

const Homeone = () => {
    return (
        <div className=" relative  px-4 py-16 mx-auto">
            {/* Decorative elements */}


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[40%,60%]  justify-center innercontainer mx-auto ">
                <div className="relative order-2 lg:order-1 ">
                    {/* Analytics Graph */}
                    
                    <div className="absolute -left-20 -top-10  z-20  rounded-3xl  ">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/home/pattern1.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[130px] mx-auto w-full h-full relative z-10"
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
                            <div className="absolute bottom-0 bg-purple-300/40 z-0 h-[70%] w-full"></div>

                            {/* Foreground Image */}
                            <img 
                                src="/home/highest-security.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[450px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-2">
                    <div className="space-y-6">
                        {/* Badge */}
                        <span variant="secondary" className="px-4 !-mb-6 font-bold text-purple-500 block py-2  text-sm">
                            About Cloudsave🔥
                        </span>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold tracking-tight !leading-[60px] lg:text-5xl">
                            Simple Reports & Analytics Backdown As It
                        </h1>

                        {/* Description */}
                        <p className="text-base text-gray-600 font-[500] text-muted-foreground">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>With our Technological and Marketing Solutions.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>We are trusted all over the world.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>Start Your 14 Days Free Trials Today!</span>
                            </li>
                        </ul>

                       
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default Homeone