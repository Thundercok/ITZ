import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import { RxEnter } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { MdAddchart } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { PiShieldCheckeredFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="side-bar h-full bg-white w-[5rem] ring-1 flex justify-center py-5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[10px]">
          <Link to="/notifications">
            <BsBell size={"1.7rem"} className="text-gray-500 my-2" />
          </Link>
          <Link to="/enter">
            <RxEnter size={"1.7rem"} className="text-gray-500 my-2" />
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link to="/categories">
            <BiSolidCategory size={"1.7rem"} className="text-gray-500 my-2" />
          </Link>
          <Link to="/trending">
            <HiOutlineArrowTrendingUp
              size={"1.7rem"}
              className="text-gray-500 my-2"
            />
          </Link>
          <Link to="/profile">
            <LuUser size={"1.7rem"} className="text-gray-500 my-2" />
          </Link>
          <Link to="/calendar">
            <IoCalendarClearOutline
              size={"1.7rem"}
              className="text-gray-500 text-xl my-2"
            />
          </Link>
          <Link to="/charts">
            <MdAddchart size={"1.7rem"} className="text-gray-500 my-2" />
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link to="/settings">
            <IoMdSettings size={"1.7rem"} className="text-gray-500 my-2" />
          </Link>
          <Link to="/security">
            <PiShieldCheckeredFill
              size={"1.7rem"}
              className="text-gray-500 my-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
