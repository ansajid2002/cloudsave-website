import { Check, CheckCheck } from 'lucide-react'
import React from 'react'

const Homethree = () => {
    return (
        <div className=" relative  px-3 16 mx-auto">
            {/* Decorative elements */} 


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[52%,45%] border py-6 md:py-14 bg-gradient-to-tr from-secondary via-secondary/20 to-black/80 rounded-3xl justify-center innercontainer mx-auto ">
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
                                Why CloudSave 🔥
                            </span>
                        </div>
                        {/* Heading */}
                        <h1 className=" text-2xl md:text-4xl font-[500] tracking-tight md:!leading-[60px] lg:text-5xl text-white">
                        Using CloudSave comes with a host of unbeatable benefits
                        </h1>

                       

                        {/* Feature List */}
                        <ul className="space-y-4 grid md:grid-cols-2 text-white">
                            <li className="flex items-center space-x-3">
                            <CheckCheck size={20} className='min-w-5'/>
                                <span className='  text-base md:text-lg'>No Restrictions:</span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <CheckCheck size={20} className='min-w-5'/>
                                <span className='  text-base md:text-lg'>Earn Rewards:</span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <CheckCheck size={20} className='min-w-5'/>
                                <span className='  text-base md:text-lg'>Seamless Streaming:</span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <CheckCheck size={20} className='min-w-5'/>
                                <span className='  text-base md:text-lg'>Group Sharing Made Easy</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <CheckCheck size={20} className='min-w-5'/>
                                <span className='  text-base md:text-lg'>Affordable Pricing Plans</span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <CheckCheck size={20} className='min-w-5'/>
                                <span className='  text-base md:text-lg'>Always Accessible</span>
                            </li>
                        </ul>
                        {/* Description */}
                        <p className="text-base text-gray-300 font-[400] text-muted-foreground">
                        Discover a storage platform that rewards your usage while removing all the limits. Join CloudSave today and experience a truly user-focused cloud solution!</p>

                        {/* CTA Button */}
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Homethree