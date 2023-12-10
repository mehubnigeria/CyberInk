import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IoDiamondSharp } from 'react-icons/io5'

function RecomendCard({art, image, artName, artistImage, artistName, artPrice}: any) {
  return (
    <div className='w-[245px] h-[345px] border-2 border-primary p-4 rounded-lg relative'>
      <p className="absolute inset-y-0 left-0 flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1.5 py-1.5 rounded-br-lg rounded-tl-lg items-center mr-3 pointer-events-none h-6 text-[11px]">{art}</p>
      <div className=''>
        <Image width={212} height={181} src={image} alt='' className=' rounded-t-md' />
      </div>
      <div className='mt-3'>
        <p className='text-[14px] '>{artName}</p>
        <div className='flex space-x-2 mt-1.5'>
          <Image width={18} height={16} src={artistImage} alt='' className=' rounded-full' />
          <p className='text-[12px] text-light-2'>{artistName}</p>
        </div>
        <div className='mt-5'>
          <p className='text-[12px] text-light-2 '>Highest Beader:</p>
          <div className='flex flex-row justify-between mt-2'>
            <div className='flex flex-row space-x-2 mt-1'>
              <IoDiamondSharp className='text-[12px] text-primary mt-0.5' />
              <p className='text-[12px]'>{artPrice}</p>
            </div>
            <div className='flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-1.5 rounded-bl-lg rounded-tr-lg items-center space-x-1.5 pointer'>
          <p className=" text-[10px] ">See Details</p>
            <FaLongArrowAltRight className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecomendCard
