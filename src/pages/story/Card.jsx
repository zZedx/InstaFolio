import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tool } from "./Tool";

export const Card = ({ title, content, imgs, tools, link }) => {
  const { id } = useParams();
  useEffect(() => {
    setActive(false);
  }, [id]);
  const [active, setActive] = useState(false);
  return (
    <div
      className={`p-1 bg-gradient-to-tr from-pink-500 to-red-500 card overflow-hidden bg-cover bg-center flex items-end relative ${
        active ? "cursor-pointer backdrop-blur-lg" : ""
      }`}
      style={{
        boxShadow: active
          ? "0 0 40px hsl(327, 87%, 14%), 0 0 150px hsl(327, 87%, 14%)"
          : "none",
        // backgroundImage: `url(${imgs[0]})`,
      }}
      onClick={() => setActive(false)}
    >
      <img
        className={`p-1 rounded-xl absolute top-0 left-0 object-cover object-top w-full h-full ${
          active ? "blur" : ""
        }`}
        src={imgs[0]}
        alt=""
      />
      <div
        className={`p-6 w-full transition-all duration-500 ease-in-out space-y-4 bg-black rounded-md ${
          active ? "translate-y-0" : "2xl:translate-y-[78%] translate-y-[77%]"
        }`}
        style={
          {
            // background:
            //   "linear-gradient(180deg, hsl(327, 32%, 1% , 0.3), hsl(327, 87%, 14%))",
          }
        }
      >
        <div className="flex items-center justify-between mb-6 ">
          <h1
            className={`z-10 font-bold text-xl 2xl:text-2xl relative tracking-wider text-transparent after:h-1 after:w-[140%] after:bg-gradient-to-r after:from-pink-500 after:to-pink-50 after:absolute after:bottom-[-5px] after:left-0 after:origin-left after:transition-all after:duration-500 ${
              active ? "after:scale-100" : "after:scale-0"
            }`}
            style={{
              textShadow:
                "0 0 40px rgb(236, 72, 153), 0 0 0px rgb(236, 72, 153) , 0 0 150px rgb(236, 72, 153)",
            }}
          >
            {title}
          </h1>
          {active ? (
            <a href={link}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(true);
                }}
                className={`custom-btn btn2 text-sm py-2 px-4 rounded-sm flex gap-3 items-center transition-all`}
              >
                <i className="fa-brands fa-github text-lg"></i>{" "}
                <span>CODE</span>
              </button>
            </a>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive(true);
              }}
              className={`custom-btn btn text-sm py-2 px-4 rounded-sm flex gap-3 items-center transition-all`}
            >
              <span>DETAILS</span> <i className="fa-solid fa-arrow-down"></i>
            </button>
          )}
        </div>

        <ul className="flex gap-3 ">
          {tools.map((tool, i) => (
            <li key={i}>
              <Tool>{tool}</Tool>
            </li>
          ))}
        </ul>
        <p className="border-t-2 pt-3 h-48">{content}</p>
      </div>
    </div>
  );
};
