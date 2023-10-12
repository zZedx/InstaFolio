import { Link } from "react-router-dom";

const HomeSideBar = () => {
  return (
    <div className="lg:mt-10 space-y-6 lg:px-6 lg:pt-6 lg:pb-12 border bg-white/10">
      <Link
        to={"/about"}
        className="flex gap-4 items-center hover:bg-white/10 py-3 rounded-md "
      >
        <img src="" className="bg-red-50 w-12 h-12 rounded-full" alt="" />
        <div>
          <h1 className="font-semibold tracking-wider">Kartik Ajmera</h1>
          <span>Full Stack Developer</span>
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <a
          className="text-xl hover:text-red-300 flex items-center"
          href="/github/zZed"
        >
          <i className="fa-brands fa-github"></i>
          <span className="ml-2 text-base">Github</span>{" "}
        </a>
        <a
          className="text-xl hover:text-red-300 flex items-center"
          href="/github/zZed"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span className="ml-2 text-base">LinkedIn</span>{" "}
        </a>
      </div>
      <button className="bg-gradient-to-tl duration-300 from-red-300 to-pink-600 hover:gradient-to-br hover:from-pink-600 hover:to-red-300 transition-colors hover:text-red-50 text-black font-bold w-full py-2 rounded-lg">
        DOWNLOAD RESUME
      </button>
      <div>
        <h1>Kartikajmera89@gmail.com</h1>
        <h1>97997 - XXXXX</h1>
        <h1>Rajasthan , India</h1>
      </div>
    </div>
  );
};

export default HomeSideBar;
