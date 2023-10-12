import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex justify-between lg:justify-normal lg:flex-col lg:h-screen border-b lg:border-r border-gray-700 py-8 px-10">
      <div className="hidden md:block lg:mb-10">
        <Link to={"/"} className="font-bold text-2xl">InstaFolio</Link>
      </div>
      <div className="flex justify-between w-full md:w-auto lg:flex-col gap-7">
        <Link to={"/"} className="flex gap-2 lg:gap-4 hover:text-red-300 items-center">
          <i className="fa-solid fa-house text-xl"></i>
          <span className="hidden text-lg sm:block">Home</span>
        </Link>
        <Link to={"/skills"} className="flex gap-2 lg:gap-4 hover:text-red-300 items-center">
          <i className="fa-solid fa-compass text-xl"></i>
          <span className="hidden text-lg sm:block">Skills</span>
        </Link>
        <Link to={"/contact"} className="flex gap-2 lg:gap-4 hover:text-red-300 items-center">
          <i className="fa-brands fa-facebook-messenger text-xl"></i>
          <span className="hidden text-lg sm:block">Contact</span>
        </Link>
        <Link to={"/about"} className="flex gap-2 lg:gap-4 hover:text-red-300 items-center">
          <i className="fa-solid fa-user text-xl"></i>
          <span className="hidden text-lg sm:block">About</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
