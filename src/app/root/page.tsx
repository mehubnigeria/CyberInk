import Recomend from '@/components/Recomend'
import RecomendCard from '@/components/cards/RecomendCard'
import React from 'react'

function page() {
  return (
    <div className='flex'>
      <div className=''>
        <p className=' text-[24px] font-bold'>Welcome back, AzeezJim </p>
        <p className='text-[16px] text-light-3'>Continue discovering rare and original networks</p>
        <Recomend />
      </div>
    </div>
  )
}

export default page
