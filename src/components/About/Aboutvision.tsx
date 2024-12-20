import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Aboutvision = () => {
    return (
        <div>

            <div className=" relative text-white sjcontainer py-12 md:py-24 mx-auto ">
                {/* Decorative elements */}

                <div className='md:container md:px-10'>
                    {/* Heading */}
                    <h1 className=" text-3xl md:text-4xl mb-4 font-bold tracking-tight md:!leading-[60px] lg:text-5xl">
                        Your data. Your freedom.
                    </h1>

                    {/* Description */}
                    <p className=" text-base md:text-lg mb-2 text-gray-300 font-[500] text-muted-foreground">
                        When <span className='text-white underline'>Sahil Ansari</span> and <span className='text-white underline'>Sajid Ansari</span> founded CloudSave, they wanted more than just a product—they wanted to spark a movement. Their belief in democratizing technology drives CloudSave to challenge industry norms and redefine what’s possible in the cloud.
                    </p>

                </div>
                <div className="grid mt-10 md:my-20 items-center grid-cols-1 gap-12 lg:grid-cols-[60%,40%] justify-center max-w-[1100px] mx-auto ">
                    <div className="relative order-2 lg:order-2 ">
                        {/* Analytics Graph */}

                        <div className="relative order-2 lg:order-1 ">

                            <div data-aos="zoom-in" className="absolute left-4 top-2  z-20    ">
                                <div className="flex items-end space-x-2">
                                    <img
                                        src="/logo/cloudsave.png"
                                        alt="Analytics Dashboard Preview"
                                        className="object-cover max-w-[100px] md:max-w-[120px] mx-auto w-full h-full relative z-10"
                                    />
                                </div>
                            </div>


                            {/* Main Image */}
                            <div className="relative z-10">
                                <div className="  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  relative">


                                    {/* Foreground Image */}
                                    <img data-aos="fade-left"
                                        src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7456.jpg?t=st=1734660211~exp=1734663811~hmac=1ab2b27143766699d4ed578910ef27a8feeae73b0f9b99f51e03f40ca864f0a1&w=740"
                                        alt="Analytics Dashboard Preview"
                                        className="object-cover  max-w-[400px] max-auto w-full h-full relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="order-2 lg:order-1">
                        <div className=    "  space-y-4 md:space-y-6">
                            {/* Badge */}

                            <h3 className=' text-3xl md:text-4xl text-purple-400 font-[500]'>Our Vision</h3>
                            <p className=" text-base md:text-lg mb-2 text-gray-300 font-[500] text-muted-foreground">
                                We’re here to disrupt the status quo of cloud storage with a vision that’s as audacious as it is transformative:
                            </p>

                            <p><span className='underline'>Free Cloud Storage for All:</span> Imagine a world where storage is no longer a premium service but a basic right. We’re building that world—one user at a time.</p>
                            <p><span className='underline'>Unmatched Security:</span> Your data deserves the best. That’s why we deploy military-grade encryption, cutting-edge technologies, and constant vigilance to ensure your files are safe, always.</p>
                            <p><span className='underline'>Innovation at Its Core:</span> From intuitive interfaces to seamless integrations, CloudSave combines simplicity with advanced technology to give you the best of both worlds.</p>






                        </div>
                    </div>
                </div>


                <div className="grid mt-24 items-center grid-cols-1 gap-12 lg:grid-cols-[40%,60%] justify-center max-w-[1100px] mx-auto ">
                    <div className="relative order-1 lg:order-1 ">
                        {/* Analytics Graph */}

                        <div className="relative order-2 lg:order-1 ">

                            <div data-aos="zoom-in" className="absolute left-4 top-2  z-20    ">
                                <div className="flex items-end space-x-2">
                                    <img
                                        src="/logo/cloudsave.png"
                                        alt="Analytics Dashboard Preview"
                                        className="object-cover max-w-[100px] md:max-w-[120px] mx-auto w-full h-full relative z-10"
                                    />
                                </div>
                            </div>


                            {/* Main Image */}
                            <div className="relative z-10">
                                <div className="  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  relative">


                                    {/* Foreground Image */}
                                    <img data-aos="fade-left"
                                        src="https://img.freepik.com/premium-photo/cloud-computing-technology-database-storage-security-concept-backup-transfer_1020200-3658.jpg?w=1060"
                                        className="object-cover  max-w-[500px] max-auto w-full h-full relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="order-1 lg:order-1">
                        <div className="space-y-4 md:space-y-6">
                            {/* Badge */}

                            <h3 className=' text-3xl md:text-4xl text-purple-400 font-[500]'>What Makes Us Different?</h3>

                            <p><span className='underline'>Limitless Possibilities:</span>Say goodbye to storage caps, upload limits, and hidden fees. CloudSave removes barriers so you can focus on what matters most.</p>
                            <p><span className='underline'>Earn as You Save:</span> Break the mold with our innovative rewards system—earn coins just by using CloudSave and redeem them for exclusive services.</p>
                            <p><span className='underline'>Global Accessibility:</span>No matter who you are or where you are, CloudSave is designed to empower users across the globe.</p>






                        </div>
                    </div>
                </div>
                <div className='h-[2px] w-full bg-purple-800 my-10 md:my-20'></div>
                <div className='  text-center'>

                    <h3 className=' text-3xl md:text-4xl text-purple-400 font-[500] mb-4 uppercase tracking-wider'>Join the Revolution</h3>
                    <p data-aos="fade-up" className="  text-base md:text-2xl tracking-wide mb-2 text-gray-100 font-[500] text-muted-foreground">
                        CloudSave is more than a storage platform—it’s a promise to innovate, disrupt, and empower. With every file you store, every link you share, and every coin you earn, you’re part of a future where storage is free, secure, and unlimited for all.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutvision