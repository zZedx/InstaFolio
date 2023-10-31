import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex justify-between px-6 py-8 lg:h-screen lg:flex-col lg:justify-normal">
      <div className="hidden md:block lg:mb-8">
        <Link to={"/"} className="px-4 font-title text-3xl font-bold">
          InstaFolio
        </Link>
      </div>
      <div className="flex w-full justify-between gap-2 md:w-auto lg:flex-col">
        <NavLink
          to={"/"}
          className="flex items-center gap-2 rounded-lg px-4 hover:bg-white/10 lg:gap-4 lg:py-3"
        >
          <i className="fa-solid fa-house text-xl"></i>
          <span className="hidden font-medium tracking-widest sm:block ">
            HOME
          </span>
        </NavLink>
        <p
          // to={""}
          className="flex cursor-not-allowed items-center gap-2 rounded-lg px-4 text-white/40 hover:bg-white/10 lg:gap-4 lg:py-3"
        >
          <i className="fas fa-history text-xl"></i>
          <span className="hidden font-medium tracking-widest sm:block">
            EXPERIENCE
          </span>
        </p>
        <NavLink
          to={"/contact"}
          className="flex items-center gap-2 rounded-lg px-4 hover:bg-white/10 lg:gap-4 lg:py-3"
        >
          <i className="fa-brands fa-facebook-messenger text-xl"></i>
          <span className="hidden font-medium tracking-widest sm:block">
            CONTACT
          </span>
        </NavLink>
        <NavLink
          to={"/about"}
          className="flex items-center gap-2 rounded-lg px-4 hover:bg-white/10 lg:gap-4 lg:py-3"
        >
          <i className="fa-solid fa-user text-xl"></i>
          <span className="hidden font-medium tracking-widest sm:block">
            ABOUT
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
