import React from 'react'
import RecomendCard from './cards/RecomendCard'
import { artData } from '@/app/constants'

function Recomend() {
  return (
    <div className=' bg-dark-4 p-[16px] rounded-lg mt-2'>
      <div className='flex justify-between mb-3'>
        <p className='text-[16px] font-bold '>Recommended for you 🔥</p>
        <button className='text-[11px] font-bold text-light-2'>See All</button>
      </div>
      <div className='grid w-full xl:grid-cols-3 gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3 '>
        {artData.map((data, index) => (
          <div key={index} className='mb-5'>
            <RecomendCard  {...data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recomend
