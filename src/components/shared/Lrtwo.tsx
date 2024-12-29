import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'



 
const Leftrightsectiontwo = () => {
  return (
     <div className=" relative  px-3  ">
            {/* Decorative elements */}


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[52%,40%] justify-between border py-6 md:py-14 bg-gradient-to-l from-secondary/60 via-secondary/50 to-black/70 rounded-3xl  innercontainer mx-auto ">
                <div className="relative order-2 lg:order-2 ">
                    {/* Analytics Graph */}
                    
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
                                src="/home/Business analytics.svg"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[450px] mx-auto w-full h-full relative -mb-6 z-10"
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-1">
                    <div className="space-y-6">
                       

                        {/* Heading */}
                        <h1 className=" text-2xl md:text-4xl font-[500] tracking-tight md:!leading-[60px] lg:text-5xl text-white">
                        Gain Deep Insights into Your Shared Files
                        </h1>

                        {/* Description */}
                        <p className="text-base text-gray-300 font-[500] text-muted-foreground">
                        With CloudSave, you can track and manage your shared files effortlessly. Our detailed analytics provide:</p>

                        {/* Feature List */}
                        <ul className="space-y-4 text-white">
                            <li data-aos="fade-up" className="flex items-center space-x-3">
                                <MdDoubleArrow size={20} className='min-w-5'/>
                                <span className='text-[15px]'><span className=''>Download Statistics:</span> Monitor how many times your files have been downloaded and by whom.</span>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="150" className="flex items-center space-x-3">
                                <MdDoubleArrow size={20} className='min-w-5'/>
                                <span className='text-[15px]'><span className=''>Access Logs:</span> View timestamps and user details for every access attempt, ensuring transparency and control.</span>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300" className="flex items-center space-x-3">
                                <MdDoubleArrow size={20} className='min-w-5'/>
                                <span className='text-[15px]'><span className=''>Engagement Insights:</span> See likes, comments, and interactions on shared files within groups or teams.
                                </span>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300" className="flex items-center space-x-3">
                                 <MdDoubleArrow size={20} className='min-w-5'/>
                                <span className='text-[15px]'><span className=''>Link Activity:</span> Track the performance of your shared links, including expiration dates and download limits
                                </span>
                            </li>
                        </ul>
 {/* Description */}
 <p className="text-base text-gray-300 font-[500] text-muted-foreground">
 Stay informed and in control with CloudSave’s comprehensive insights for shared files. Whether you’re collaborating with a team or sharing with friends, we keep you updated every step of the way.</p>
                        {/* CTA Button */}
                        
                    </div>
                </div>
            </div>

        
        </div>
  )
}

export default Leftrightsectiontwo