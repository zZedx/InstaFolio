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
      className={`card relative flex items-end overflow-hidden bg-gradient-to-tr from-pink-500 to-red-500 bg-cover bg-center p-1 ${
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
        className={`absolute left-0 top-0 h-full w-full rounded-xl object-cover object-top p-1 ${
          active ? "blur" : ""
        }`}
        src={imgs[0]}
        alt=""
      />
      <div
        className={`w-full space-y-4 rounded-md bg-black p-6 transition-all duration-500 ease-in-out ${
          active ? "translate-y-0" : "translate-y-[77%] 2xl:translate-y-[78%]"
        }`}
        style={
          {
            // background:
            //   "linear-gradient(180deg, hsl(327, 32%, 1% , 0.3), hsl(327, 87%, 14%))",
          }
        }
      >
        <div className="mb-6 flex items-center justify-between ">
          <h1
            className={`relative z-10 text-xl font-bold tracking-wider text-transparent after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-[140%] after:origin-left after:bg-gradient-to-r after:from-pink-500 after:to-pink-50 after:transition-all after:duration-500 2xl:text-2xl ${
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
                className={`custom-btn btn2 flex items-center gap-3 rounded-sm px-4 py-2 text-sm transition-all`}
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
              className={`custom-btn btn flex items-center gap-3 rounded-sm px-4 py-2 text-sm transition-all`}
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
        <p className="h-48 border-t-2 pt-3 text-sm xl:text-base">{content}</p>
      </div>
    </div>
  );
};
