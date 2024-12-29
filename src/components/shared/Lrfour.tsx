import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'



// icloud 12 TB: $59.99 usd 
//  terabox one-month membership: $3.99/month
// one drive Microsoft 365 Personal
// $69.99 /year



const data = [
    {
        img:"/home/cslogo-black.png",
        title:"CloudSave",
        price:"FREE*",
        pricedesc:"Infinite Storage",
        pricebased:"* Free with some basic features"
    },
    {
        img:"/competitors/ICloud_logo.svg",
        title:"ICloud",
        price:"$59.99*",
        pricedesc:"per 12TB per month",
        pricebased:"* Price can be vary according to apple"
    },
    {
        img:"/competitors/googledrive-icon.svg",
        title:"Drive",
        price:"$3.86*",
        pricedesc:"per TB per month",
        pricebased:"* Price based on 30TB annual payment"
    },
    {
        img:"/competitors/terabox.webp",
        title:"Terabox",
        price:"$3.99*",
        pricedesc:"per TB per month",
        pricebased:"* Price based on website"
    },
    {
        img:"/competitors/megaicon.svg",
        title:"Mega",
        price:"$1.63*",
        pricedesc:"per TB per month",
        pricebased:"* Price based on Pro III annual payment"
    },
    {
        img:"/competitors/onedrive.png",
        title:"OneDrive",
        price:"$69.99*",
        pricedesc:"per 2TB per month",
        pricebased:"* Price based on website"
    },
]




const Leftrightsectionfour = () => {
  return (
     <div className=" relative  px-4 sjcontainer   ">
            {/* Decorative elements */}

            <h1 className=" text-2xl md:text-4xl font-[500] text-center mb-8 tracking-tight md:!leading-[60px] lg:text-5xl text-white">
                            Simple comparison as our services
                        </h1>

                          {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 mb-4 object-contain"
            />
            <div className='space-y-2'>
            <h3 className="text-xl text-white font-[400] tracking-wider">{item.title}</h3>
            <p className="text-purple-400 font-bold text-4xl ">{item.price}</p>
            <p className="text-gray-200 font-bold text-sm">{item.pricedesc}</p>
            <p className="text-gray-300 text-xs font-light tracking-wider mt-2">{item.pricebased}</p>
                </div>
          </div>
        ))}
      </div>
      <p className='text-gray-400 tracking-wide mt-8 text-[15px]  '>* Logos and trademarks used on this site are for informational and educational purposes only. All trademarks and logos are the property of their respective owners, and no endorsement or affiliation is implied.</p>
            
        
        </div>
  )
}

export default Leftrightsectionfour