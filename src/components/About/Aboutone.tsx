import React from 'react'

const Aboutone = () => {
  return (
    <div>
         <div className="innercontainer relative  px-4 py-24 mx-auto ">
            {/* Decorative elements */}


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[60%,40%] justify-center max-w-[1100px] mx-auto ">
                <div className="relative order-2 lg:order-2 ">
                    {/* Analytics Graph */}
               
                    <div className="relative order-2 lg:order-1 ">
                   
                    <div data-aos="zoom-in" className="absolute -left-4 top-2  z-20  rounded-3xl  ">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/about/dashboard1.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[150px] rounded-2xl mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                  

                    {/* Main Image */}
                    <div className="relative z-10">
                        <div  className="overflow-hidden rounded-3xl relative">
                            {/* Background Element */}
                            <img 
                                src="/about/bg1.png" 
                                alt="Analytics Dashboard Preview"
                                className="object-contain absolute mx-auto   bottom-0  z-10"
                            />

                            {/* Foreground Image */}
                            <img data-aos="fade-left"
                                src="/about/men1.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[350px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-1">
                    <div className="space-y-6">
                        {/* Badge */}
                        <span variant="secondary" className="px-4 !-mb-6 font-bold text-amber-500 block py-2  text-sm">
                        Customizations & Analysis 🔥
                        </span>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold tracking-tight !leading-[60px] lg:text-5xl">
                        Manage your Traffic Growth Easily
                        </h1>

                        {/* Description */}
                        <p className="text-base text-gray-500 font-[500] text-muted-foreground">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even
                        </p>
                        <p className="text-base text-gray-500 font-[500] text-muted-foreground">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        </p>

                       
                        {/* CTA Button */}
                        <div className='!mt-10'>

                            <span size="lg" className="bg-amber-500 text-white px-5 text-sm py-2.5 rounded-full hover:bg-amber-700">
                                View All Project →
                            </span>
                        </div>
                        <div className='flex items-center w-[340px]  !mt-10 justify-between'>
                            <div>
                                <p className='font-bold text-xl'>56 k+</p>
                                <p className='text-gray-500 text-base font-[500]'>Compares</p>
                                </div>
                                <div>
                                <p className='font-bold text-xl'>12 K+</p>
                                <p className='text-gray-500 text-base font-[500]'>Use People</p>
                                </div>
                                <div>
                                <p className='font-bold text-xl'>1.2 M+</p>
                                <p className='text-gray-500 text-base font-[500]'>Downloaded it</p>
                                </div>

                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    </div>

  )
}

export default Aboutone