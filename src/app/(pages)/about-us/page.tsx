import Aboutone from '@/components/About/Aboutone'
import Aboutthree from '@/components/About/Aboutthree'
import Abouttwo from '@/components/About/Abouttwo'
import Aboutvision from '@/components/About/Aboutvision'
import Sectionbanner from '@/components/shared/Sectionbanner'
import React from 'react'

const Aboutus = () => {
  return (
    <div className=''>
      <Sectionbanner title="About Us" />
        <Aboutone/>
        <Aboutvision/>
        {/* <Abouttwo/> */}
        {/* <Aboutthree/> */}
    </div>
  )
}

export default Aboutus