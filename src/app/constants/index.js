import { IoHomeSharp, IoSettings } from "react-icons/io5";
import { SiMarketo } from "react-icons/si";
import { IoWalletSharp } from "react-icons/io5";
import { GrHistory } from "react-icons/gr";


export const sidebarLinks = [

  {
    icon: <IoHomeSharp />,
    route: "/root",
    label: "Home",
  },
  {
    icon: <SiMarketo />,
    route: "/root",
    label: "Market Places",
  },
  {
    icon: <IoWalletSharp />,
    route: "/root",
    label: "Wallet",
  },
  {
    icon: <GrHistory />,
    route: "/root",
    label: "Hostory",
  },
  {
    icon: <IoSettings />,
    route: "/root",
    label: "Settings",
  },
];

export const artData = [
  {
    id: 1,
    art: 'Music',
    image: '/assets/Rectangle 11.png',
    artName: 'Focus purple music',
    artistImage: '/assets/Azeezjim.jpeg',
    artistName: 'John Doe',
    artPrice: "1,500.09",
  },
  {
    id: 2,
    art: 'Portrait',
    image: '/assets/Rectangle 12.png',
    artName: 'Mona Lisa Redux',
    artistImage: '/assets/Azeezjim.jpeg',
    artistName: 'Jane Smith',
    artPrice: 800.34,
  },
  {
    id: 3,
    art: 'Penting',
    image: '/assets/Rectangle 13.png',
    artName: 'Nature Harmony',
    artistImage: '/assets/Azeezjim.jpeg',
    artistName: 'Sam Johnson',
    artPrice: 745.34,
  },
];

