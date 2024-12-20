import { ArrowRight, ChevronRight, Cloud, Link, Usb } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const data = [
    {
        img:"/temp/server.svg",
        title:"Cloud Storage"
    },
    {
        img:"/temp/Messaging.svg",
        title:"Instant Messaging"
    },
    {
        img:"/temp/Folder.svg",
        title:"File Sharing"
    },
    {
        img:"/temp/backup.svg",
        title:"Backup & Restore"
    }
]

const advantages = [
    {
        img:"/temp/link.svg",
      title: "Create Links",
      description: "To Share with important people",
    },
    {
        img:"/temp/infinity.svg",
      title: "Infinite Storage",
      description: "Infinite free storage",
    },
    {
        img:"/temp/nousb.svg",
      title: "No More USB",
      description: "Sync across all your devices",
    },
  ];
  

const Homebanner = () => {
    return (
        <div >

        <div className='px-3 lg:px-6'>

            <div className="relative border border-secondary shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[30px] lg:rounded-[50px]  md:pt-20 pb-10  bannercontainer overflow-hidden bg-gradient-to-r z-0 mt-[85px] lg:mt-7 from-black text-white to-gray-900">
                
                    
                            {/* <div className="inline-block">
                                <div variant="secondary" className="rounded-full px-4 py-1 text-sm">
                                    News! <span className="ml-2 text-purple-500">Find Your Solution 👋</span>
                                </div>
                            </div> */}
                            <h1 className=" text-2xl   md:text-4xl  lg:text-5xl font-bold tracking-wide  leading-tight text-center lg:leading-[57px] mt-10 mb-0  ">
                               Say Hello to our lightning fast and Secure<br/> Cloud Storage Solution
                            </h1>
                            {/* <p className="text-lg text-muted-foreground">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
                                going to use a passage of Lorem Ipsum.
                            </p> */}

                            <div className='grid grid-cols-2 md:grid-cols-4 my-8 md:mb-10 mb:mt-12'>
                                {
                                     data.map((item, index) => (
                                        <div key={index} className=" my-4 gap-4">
                                            <Image src={item.img} width={250} height={250} className='mx-auto w-24 sm:w-32' alt={item.title} />
                                            <p className="text-sm mt-1 md:text-lg font-light text-center">{item.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex w-full md:mt-14 ">
                                <div size="lg" className="bg-gradient-to-tr justify-center flex items-center from-secondary to-primary hover:opacity-70 border border-secondary cursor-pointer hover:bg-secondary max-sm:text-sm  mx-auto md:w-[35%] text-center text-white px-6 py-2.5 rounded-full   duration-300 ">
                                    Get Started Now <ArrowRight size={16} className='ml-1.5'/>
                                </div>
                               
                                </div>
                          
                <div className="absolute top-1/4 left-4 w-4 h-4 text-purple-500">★</div>
                <div className="absolute bottom-1/4 right-4 w-4 h-4 text-purple-500">★</div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 text-yellow-400">★</div>
            </div>
        </div>


        <div className='  mx-3 lg:max-w-[950px] lg:mx-auto bg-gradient-to-r border border-secondary from-secondary py-4  via-secondary/70  rounded-3xl  mt-14 mb-10  to-black'>

        <div className="md:flex md:justify-center md:space-x-2 lg:space-x-10 max-md:mx-auto max-md:w-[350px] ">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className=" p-4 text-center  space-x-4 flex items-center   shadow-sm hover:shadow-md transition-shadow"
        >
          <Image src={advantage.img} alt={advantage.title} width={200} height={200} className=' min-w-10 w-10  sm:w-12 sm:min-w-12' /> {/* Render the respective icon */}
          <div className='text-left'>
          <h3 className="mt-2 mb-1 text-lg lg:text-2xl  text-white font-[400]">{advantage.title}</h3>
          <p className="text-gray-300 text-sm">{advantage.description}</p>
            </div>
        </div>
      ))}
    </div>
        </div>
        </div>

    )
}

export default Homebanner