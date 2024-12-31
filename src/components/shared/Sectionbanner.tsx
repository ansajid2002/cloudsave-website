import React from 'react'

const Sectionbanner = ({title}) => {
  return (
    <div className={`border-t flex items-center justify-center rounded-[50px] mt-[80px] lg:mt-8 py-12 md:pt-28 md:pb-20 mx-3 md:mx-6   z-50  overflow-x-hidden bg-gray-950 bg-cover  bottom-0 bg-no-repeat  `}>
        <div>
            <h2 className=' text-4xl md:text-6xl font-bold text-white  tracking-wide' >
            {title}
            </h2>
           
            </div>
        
        
        </div>
  )
}

export default Sectionbanner