import Image from 'next/image'
import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { FaAppStoreIos } from 'react-icons/fa'

const Homebanner2 = () => {
    return (
        <div className='px-2 md:px-6  '>

            <div className="relative rounded-[50px] pt-20 overflow-hidden  bannercontainer  bg-gradient-to-r z-0 mt-4 md:mt-7 from-secondary/70 text-white via-secondary/80 to-black">
                <div className="absolute  inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
                <div className=" relative">
                    <div className="grid  lg:grid-cols-2 gap-8 items-end ">
                        <div className= " space-y-3 lg:space-y-5 self-center">
                            <div className="inline-block">
                                <div variant="secondary" className="rounded-full px-4 py-1 text-base">
                                    News ! <span className="ml-2 text-amber-500">Find Your Solution 👋</span>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                                We Develop Websites, Applications, And Brands.
                            </h1>
                            <p className=" text-base md:text-lg text-muted-foreground">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
                                going to use a passage of Lorem Ipsum.
                            </p>
                                   <div className="flex flex-wrap gap-4">
                              {/* Download from Play Store */}
                              <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-8 py-2.5 rounded-full hover:bg-purple-700 flex items-center gap-4"
                              >
                                <FaAppStoreIos size={28} />
                                <div className="flex flex-col">
                                  <span className="text-[12px] ">Get it on</span>
                                  <span className="text-lg -mt-1 font-[500]">Play Store</span>
                                </div>
                              </a>
                            
                            
                               <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-8 py-2.5 rounded-full hover:bg-purple-700 flex items-center gap-4"
                              >
                                <BsGooglePlay size={28} />
                                <div className="flex flex-col">
                                  <span className="text-[12px] ">Get it on</span>
                                  <span className="text-lg -mt-1 font-[500]">App Store</span>
                                </div>
                              </a>
                            </div>

                        </div>
                        <div className="relative h-[300px] md:h-[600px] w-[300px]  md:w-[600px]">
                            {/* Main Foreground Image */}
                            <Image

                                src="/home/hands.png"
                                alt="App screenshot"
                                width={750}
                                height={1200}
                                className="absolute scale-x-[-1] transform md:translate-x-16 translate-y-8 z-10  "
                            />
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />

                            <Image

                                src="/home/bg1.png"
                                alt="App screenshot"
                                width={750}
                                height={700}
                                className=" transform w-[200px] md:w-[450px] left-6 md:left-28  absolute  bottom-2 md:bottom-8 z-0  "
                            />  <Image

                                src="/home/bg2.png"
                                alt="App screenshot"
                                width={750}
                                height={700}
                                className="absolute transform  w-[250px] md:w-[550px]  -bottom-5 md:translate-x-16 z-0  "
                            />

<div className="absolute inset-0 bg-gradient-to-r z-20 from-purple-800/10 to-green-200/30 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/4 left-4 w-4 h-4 text-amber-500">★</div>
                <div className="absolute bottom-1/4 right-4 w-4 h-4 text-amber-500">★</div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 text-yellow-400">★</div>
            </div>
        </div>

    )
}

export default Homebanner2