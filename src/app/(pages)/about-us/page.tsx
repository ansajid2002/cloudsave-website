import Aboutone from '@/components/About/Aboutone'
import Aboutthree from '@/components/About/Aboutthree'
import Abouttwo from '@/components/About/Abouttwo'
import Sectionbanner from '@/components/shared/Sectionbanner'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='min-h-[100vh]'>
      <Sectionbanner title="About Us" />
        <Aboutone/>
        <Abouttwo/>
        <Aboutthree/>
    </div>
  )
}

export default Aboutus