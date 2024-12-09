import React from 'react'

const Sectionbanner = ({title}) => {
  return (
    <div className={`border-t flex items-center justify-center rounded-[50px] mt-8 py-44 mx-6   z-50  overflow-x-hidden bg-[url("/footer/bg2.png")] bg-cover  bottom-0 bg-no-repeat  `}>
        <div>
            <h2 className='text-5xl font-[400]' >
            {title}
            </h2>
            <p className=' mx-auto mt-1.5 text-center w-full  '>
                <span>Home</span>
                <span className='mx-1'>/</span>
                <span className='font-bold text-primary'>About Us</span>
            </p>
            </div>
        
        
        </div>
  )
}

export default Sectionbanner