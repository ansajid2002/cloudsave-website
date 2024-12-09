import { Cloud, Link, Usb } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const data = [
    {
        img:"/temp/1.png",
        title:"Carbon Neutral Service"
    },
    {
        img:"/temp/1.png",
        title:"Carbon Neutral Service"
    },
    {
        img:"/temp/1.png",
        title:"Carbon Neutral Service"
    },
    {
        img:"/temp/1.png",
        title:"Carbon Neutral Service"
    }
]

const advantages = [
    {
        img:"/temp/1.png",
      title: "250 GB",
      description: "Free Storage",
    },
    {
        img:"/temp/1.png",
      title: "Create Links",
      description: "To Share with important people",
    },
    {
        img:"/temp/1.png",
      title: "No More USB",
      description: "Sync across all your devices",
    },
  ];
  
const Homebanner = () => {
    return (
        <div >

        <div className='px-4 md:px-6   '>

            <div className="relative border border-secondary shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[50px] py-20  bannercontainer overflow-hidden bg-gradient-to-r z-0 mt-4 md:mt-7 from-black text-white to-gray-900">
                
                    
                            {/* <div className="inline-block">
                                <div variant="secondary" className="rounded-full px-4 py-1 text-sm">
                                    News! <span className="ml-2 text-amber-500">Find Your Solution 👋</span>
                                </div>
                            </div> */}
                            <h1 className="text-5xl font-[500]  leading-tight text-center  md:text-6xl md:leading-[65px] my-6  ">
                               Say Hello to our lightning fast and Secure<br/> Cloud Storage Solution
                            </h1>
                            {/* <p className="text-lg text-muted-foreground">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
                                going to use a passage of Lorem Ipsum.
                            </p> */}

                            <div className='grid grid-cols-4 my-14'>
                                {
                                     data.map((item, index) => (
                                        <div key={index} className=" gap-4">
                                            <Image src={item.img} width={250} height={250} className='mx-auto w-32' alt={item.title} />
                                            <p className="text-sm font-medium text-center">{item.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex w-full">
                                <div size="lg" className="bg-black border border-secondary cursor-pointer hover:bg-secondary  mx-auto w-[40%] text-center text-white px-4 py-2.5 rounded-full   duration-300 ">
                                    Get Started Now →
                                </div>
                               
                                </div>
                          
                <div className="absolute top-1/4 left-4 w-4 h-4 text-amber-500">★</div>
                <div className="absolute bottom-1/4 right-4 w-4 h-4 text-amber-500">★</div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 text-yellow-400">★</div>
            </div>
        </div>


        <div className='max-w-[1000px] mx-auto bg-gradient-to-r border border-secondary from-secondary py-4  via-secondary/70  rounded-3xl  mt-14 mb-10  to-black'>

        <div className="flex gap-5 justify-center space-x-10">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className=" p-4 text-center  space-x-4 flex items-center  shadow-sm hover:shadow-md transition-shadow"
        >
          <Image src={advantage.img} alt={advantage.title} width={200} height={200} className='w-12' /> {/* Render the respective icon */}
          <div className='text-left'>
          <h3 className="mt-2 mb-1 text-2xl  text-white font-[400]">{advantage.title}</h3>
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