"use client";

import { sidebarLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";



const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();


  return (
    <section className='custom-scrollbar leftsidebar shadow-l-lg'>
      <div className='flex w-full flex-1 flex-col gap-6 px-7'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "px-4 py-2.5 space-x-1  text-white rounded-md font-semibold hover:bg-dark-4 transition duration-300 "}`}
            >
              {/* <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              /> */}
              {/* <{`{link.icon`} /> */}
              {/* <div>{}</div> */}
              <span className='text-light-1 mt-[2.5px] font-bold max-lg:hidden'>{link.icon}</span>
              <p className='text-light-1  font-bold max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className='mt-10 px-6'>

        <div className='flex cursor-pointer gap-4 px-4 py-2.5  hover:bg-red-500 hover:text-white rounded-md '>
          {/* <Image
            src=''
            alt='logout'
            width={24}
            height={24}
          /> */}
          <IoIosLogOut className="text-light-1 mt-[2.5px] font-bold"/>
          <p className='text-light-2 font-bold max-lg:hidden'>Log-Out</p>
        </div>

      </div>
    </section>
  );
};

export default LeftSidebar;
