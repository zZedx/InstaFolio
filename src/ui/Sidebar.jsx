import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex justify-between lg:justify-normal lg:flex-col lg:h-screen py-8 px-6">
      <div className="hidden md:block lg:mb-8">
        <Link to={"/"} className="font-bold font-title text-3xl px-4">
          InstaFolio
        </Link>
      </div>
      <div className="flex justify-between w-full md:w-auto lg:flex-col gap-2">
        <NavLink
          to={"/"}
          className="flex gap-2 lg:gap-4 hover:bg-white/10 px-4 lg:py-3 rounded-lg items-center"
        >
          <i className="fa-solid fa-house text-xl"></i>
          <span className="hidden sm:block tracking-widest font-medium ">HOME</span>
        </NavLink>
        <NavLink
          to={"/skills"}
          className="flex gap-2 lg:gap-4 hover:bg-white/10 px-4 lg:py-3 rounded-lg items-center"
        >
          <i className="fas fa-history text-xl"></i>
          <span className="hidden sm:block tracking-widest font-medium">EXPERIENCE</span>
        </NavLink>
        <NavLink
          to={"/contact"}
          className="flex gap-2 lg:gap-4 hover:bg-white/10 px-4 lg:py-3 rounded-lg items-center"
        >
          <i className="fa-brands fa-facebook-messenger text-xl"></i>
          <span className="hidden sm:block tracking-widest font-medium">CONTACT</span>
        </NavLink>
        <NavLink
          to={"/about"}
          className="flex gap-2 lg:gap-4 hover:bg-white/10 px-4 lg:py-3 rounded-lg items-center"
        >
          <i className="fa-solid fa-user text-xl"></i>
          <span className="hidden sm:block tracking-widest font-medium">ABOUT</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
