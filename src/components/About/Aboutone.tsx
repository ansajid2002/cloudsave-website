import React from 'react'

const Aboutone = () => {
  return (
    <div>
         <div className="innercontainer relative  py-12 md:py-24 mx-auto ">
            {/* Decorative elements */}


            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[60%,40%] justify-center max-w-[1100px] mx-auto ">
                <div className="relative order-2 lg:order-2 ">
                    {/* Analytics Graph */}
               
                    <div className="relative order-2 lg:order-1 ">
                   
                    <div data-aos="zoom-in" className="absolute left-4 top-2  z-20  rounded-3xl  ">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/home/cslogo-black.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[80px] md:max-w-[100px] rounded-2xl mx-auto w-full h-full relative z-10"
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
                                className="object-cover max-w-[450px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-1">
                    <div className="space-y-6">
                        {/* Badge */}
                        <span variant="secondary" className="px-4 !-mb-6 font-bold text-gray-400 block py-2  text-sm">
                        Customizations & Analysis 🔥
                        </span>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold tracking-tight lg:!leading-[55px] text-white lg:text-5xl">
                        Welcome to CloudSave, where we are redefining the future of cloud storage
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-400 font-[500] text-muted-foreground">
                        Founded by  <span className='font-bold underline text-gray-200'>Sahil Ansari</span> and <span className='font-bold text-gray-200 underline'>Sajid Ansari</span>, our mission is to create a world where secure, reliable, and unlimited cloud storage is accessible to everyone—for free
                        </p>
                        
                       
                        {/* <div className='flex items-center w-[300px] text-white md:w-[340px]  !mt-10 justify-between'>
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

                        </div> */}
                    </div>
                </div>
            </div>

        
        </div>
    </div>

  )
}

export default Aboutone