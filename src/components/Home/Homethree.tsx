import { Check } from 'lucide-react'
import React from 'react'

const Homethree = () => {
    return (
        <div className=" relative  px-4 py-16 mx-auto">
            {/* Decorative elements */} 


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[52%,45%] border py-14 bg-gradient-to-tr from-secondary via-secondary/20 to-black/80 rounded-3xl justify-center innercontainer mx-auto ">
                <div className="relative order-2 lg:order-2 ">
                    {/* Analytics Graph */}



                    {/* Main Image */}
                    <div className="relative z-10">
                        <div data-aos="zoom-in" className="overflow-hidden rounded-3xl relative">
                            {/* Background Element */}

                            {/* Foreground Image */}
                            <img
                                src="/home/mockup1.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[550px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-1">
                    <div className="space-y-6">
                        {/* Badge */}
                        <div className="mb-3">

                            <span variant="secondary" className="bg-purple-100 px-3 text-sm rounded-full py-1.5 text-purple-500 ">
                                How It Work 🔥
                            </span>
                        </div>
                        {/* Heading */}
                        <h1 className="text-4xl font-bold  text-white tracking-tight !leading-[60px] lg:text-5xl">
                            Get Benefit By Using Trending Apps
                        </h1>

                        {/* Description */}
                        <p className="text-base text-gray-300 font-[400] text-muted-foreground">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4 grid grid-cols-2 text-white">
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>Friendly Design</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>Cloud Storage</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>SEO Optimized</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                                    <img src="/home/checkmarkIcon.svg" />
                                </div>
                                <span className='text-lg'>Strong Security</span>
                            </li>
                        </ul>

                        {/* CTA Button */}
                        <div className='!mt-10'>

                            <span size="lg" className="bg-primary-300 border duration-300 border-secondary text-white px-5 text-sm py-2.5 rounded-full hover:bg-purple-700">
                                Discover More →
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Homethree