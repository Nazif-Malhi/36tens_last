import { IoIosPeople } from "react-icons/io";
import { AiOutlineUserSwitch, AiFillFileText } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BsFiles } from "react-icons/bs";

export const sideNavbar = [
  {
    title: "Dashboard",
    path: "dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "WorkForce",
    path: "workforce",
    icon: <IoIosPeople />,
  },
  {
    title: "Survey's",
    path: "survey",
    icon: <BsFiles />,
  },
  {
    title: "Master",
    path: "master",
    icon: <AiOutlineUserSwitch />,
  },
  {
    title: "Questionier",
    path: "questionier",
    icon: <AiFillFileText />,
  },
];
