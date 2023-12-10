// "use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";
import { FaSearch } from 'react-icons/fa'
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



// eslint-disable-next-line @next/next/no-async-client-component
const Topbar = async ({ }) => {


  return (
    <nav className='topbar '>
      <Link href='/' className='flex items-center gap-4'>
        <div className='text-lg uppercase font-bold text-white'>
          <Image src='/assets/Group 4.png' alt='' width={65} height={65} />
          {/* <p className=' max-sm:hidden text-gray-800 text-[12px] italic'>MeHub InHouse</p> */}
        </div>
      </Link>
      <div className="relative">
        <span className="absolute inset-y-0 left-2.5 flex items-center mr-3 pointer-events-none">
          <FaSearch className="text-gray-400" />
        </span>
        <Input
          type="text"
          placeholder="Search..."
          className="w-[400px] py-1 pl-8 rounded-md border bg-dark-3 border-light-2 focus:outline-none focus:border-gray-700"
        />
      </div>
      <div className='flex items-center gap-1 xs:ml-5'>
        <div>
          <div className='ml-auto'>
          </div>
        </div>
        <div className='block md:'>

          <div className='flex space-x-4'>
            <IoIosNotificationsOutline className=' cursor-pointer  hover:scale-105 transition hover:duration-300 p-1 font-bold rounded-md text-light-2 text-[30px] border-2 border-light-2 bg-dark-3' />
            <Avatar>
              <AvatarImage src="/assets/Azeezjim.jpeg" className="w-[35px] h-[35px]" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className='text-white flex justify-between space-x-4 items-center'>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;