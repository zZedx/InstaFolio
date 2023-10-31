import { Link } from "react-router-dom";

const HomeSideBar = () => {
  return (
    <div
      className="space-y-6 rounded-md border border-white/10 bg-white/10 lg:mt-10 lg:px-6 lg:pb-12 lg:pt-6"
      style={{ boxShadow: "rgba(255, 255, 255, 0.4) 2px 2px 4px 4px" }}
    >
      <Link
        to={"/about"}
        className="-ml-3 -mr-3 flex items-center gap-4 rounded-md px-3 py-3 hover:bg-white/10"
      >
        <img
          src="/images/pfp.jpg"
          className="h-14 w-14 rounded-full bg-red-50 object-cover object-top"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="font-semibold tracking-wider text-purple-50">
            Kartik Ajmera
          </h1>
          <span className="text-sm text-pink-100/70 2xl:text-sm">
            Full Stack Developer
          </span>
        </div>
      </Link>
      <div className="flex justify-between">
        <a
          className="flex items-center text-xl hover:text-pink-500"
          href="https://github.com/zZedx"
        >
          <i className="fa-brands fa-github"></i>
          <span className="ml-2 text-base">Github</span>{" "}
        </a>
        <a
          className="flex items-center text-xl hover:text-pink-500"
          href="https://www.linkedin.com/in/kartik-ajmera-54919628a/"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span className="ml-2 text-base">LinkedIn</span>{" "}
        </a>
      </div>
      <a
        href="./resume.pdf"
        className="hover:gradient-to-br inline-block w-full rounded bg-gradient-to-tl from-red-500 to-pink-500 py-2 text-center font-bold text-red-100 transition-colors duration-300 hover:from-pink-500 hover:to-red-500 hover:text-red-100"
      >
        DOWNLOAD RESUME
      </a>
      <div>
        <h1>Kartikajmera89@gmail.com</h1>
        <h1>+91 - 9799712300</h1>
        <h1>Rajasthan , India</h1>
      </div>
    </div>
  );
};

export default HomeSideBar;
