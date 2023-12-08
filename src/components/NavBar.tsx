'use client';

import Link from 'next/link';

import Image from 'next/image';


function NavBar() {
  

  return (
    <nav className='flex w-full  h-20 shadow fixed z-50 top-0 bg-white  '>
      <div className='flex container h-full bg-white items-center justify-between'>
        <Link href={'/'}>
          <div className='flex gap-4 items-center  text-2xl font-bold '>
            <Image src='/images/logo.png' alt='' width={40} height={40} />
            <p className=' max-sm:hidden'>MyMakaranka</p>
          </div>
        </Link>
        <div className=' hidden lg:flex  gap-28'>
          <ul className='flex gap-10  items-center text-base   font-semibold'>
            <li className=' cursor-pointer hover:text-sky-500 transition ease-in-out'>
              Categories
            </li>
            <li className=' cursor-pointer hover:text-sky-500 transition ease-in-out'>
              Courses
            </li>
            <li className=' cursor-pointer hover:text-sky-500 transition ease-in-out'>
              Instructors
            </li>
            <li className=' cursor-pointer hover:text-sky-500 transition ease-in-out'>
              News
            </li>
          </ul>
        
            <div className='flex gap-5 justify-center items-center text-lg'>
              <div
                className='
                border-2
                border-sky-500 
                px-4 py-2 
                rounded-sm 
                cursor-pointer 
                w-28 
                text-center'
                  onClick={() => {  }}
                >
                Login
              </div>

              <Link href={'/register'}>
                <div className='bg-sky-500 text-white px-4 py-2 rounded-sm cursor-pointer w-28 text-center'>
                  Signup
                </div>
              </Link>
            </div>
        
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
