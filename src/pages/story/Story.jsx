import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Link, useNavigate, useParams } from "react-router-dom";

// import {
//   TiChevronLeftOutline,
//   TiChevronRightOutline,
// } from "https://cdn.skypack.dev/react-icons/ti";

import "./story.scss";
import { recent } from "../../utils/recentProjecs";

const MAX_VISIBILITY = 3;

const Card = ({ title, content, imgs, tools , link }) => {
  const { id } = useParams();
  useEffect(() => {
    setActive(false);
  }, [id]);
  const [active, setActive] = useState(false);
  return (
    <div
      className={`card overflow-hidden bg-cover bg-center flex items-end border-2 ${
        active ? "cursor-pointer backdrop-blur-lg" : ""
      }`}
      style={{
        boxShadow: active ? "0 0 40px hsl(327, 87%, 14%), 0 0 150px hsl(327, 87%, 14%)" : "none",
        backgroundImage: `url(${imgs[0]})`,
      }}
      onClick={() => setActive(false)}
    >
      <div
        className={`p-6 w-full transition-all duration-500 ease-in-out space-y-4 ${
          active ? "translate-y-0" : "2xl:translate-y-[76%] translate-y-[75%]"
        }`}
        style={{
          background:
            "linear-gradient(180deg, hsl(327, 32%, 1% , 1), hsl(327, 87%, 14%))",
        }}
      >
        <div className="flex items-center justify-between mb-6 ">
          <h1
            className={`z-10 font-bold text-xl 2xl:text-2xl relative tracking-wider text-transparent uppercase after:h-1 after:w-[120%] after:bg-white/70 after:absolute after:bottom-[-5px] after:left-0 after:origin-left after:transition-all after:duration-1000 ${
              active ? "after:scale-100" : "after:scale-0"
            }`}
            style={{
              // WebkitTextStroke: "2px white",
              textShadow:
                "0 0 40px rgb(33, 235, 255), 0 0 0px rgb(33, 235, 255) , 0 0 150px rgb(33, 235, 255)",
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
                <i className="fa-brands fa-github text-lg"></i> <span>CODE</span>
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
      {/* <span
        className="z-10 font-bold text-6xl tracking-wider text-transparent uppercase"
        style={{
          WebkitTextStroke: "2px white",
          textShadow: "0 0 40px purple, 0 0 0px purple , 0 0 150px purple",
        }}
      >
        {title}
      </span>
      <img
        className={` transition-all absolute top-0 left-0 h-full object-cover object-center z-0 ${
          active ? "blur-lg" : ""
        }`}
        src={imgs[0]}
        alt=""
      />
      <div
        className={`transition-all z-10 flex items-center flex-col gap-6 overflow-hidden bg-purple-50/10 w-full py-10 `}
      >
        <ul className="flex px-4 gap-3 ">
          {tools.map((tool, i) => (
            <li key={i}>
              <Tool>{tool}</Tool>
            </li>
          ))}
        </ul>

        {!active && (
          // <button
          //   onClick={(e) => {
          //     e.stopPropagation();
          //     setActive(true);
          //   }}
          //   className="  px-3 py-2 text-purple-400 cursor-pointer text-xl underline hover:text-purple-200 w-full uppercase font-semibold"
          // >
          //   more Details
          // </button>
          <button onClick={(e) => {
            e.stopPropagation();
            setActive(true);
          }} className="custom-btn btn-11">MORE DETAILS</button>
        )}
        <div
          className={`transition-all duration-500 ease-out translate-y-96 absolute w-3/4 text-center space-y-3 ${
            active ? "translate-y-0 relative" : ""
          }`}
        >
          <p>{content}</p>
          <a
            className="border-2 border-purple-400/40 font-semibold hover:bg-pink-200 hover:text-black px-2 py-1 text-sm inline-block w-24 text-center"
            href=""
          >
            CODE
          </a>
        </div>
      </div> */}
    </div>
  );
};

function Tool({ children }) {
  return (
    <span className="bg-gradient-to-tr to-[#E4F9F5] border-2 border-purple-800 from-[#11999E] px-2 py-0.5 inline-block rounded uppercase font-bold text-xs md:text-sm min-w-[80px] text-center text-black">
      {children}
    </span>
  );
}

const Carousel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(Number(id));
  const count = recent.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (active === count - 1) return;
      setActive(active + 1);
      navigate(`/story/${Number(id) + 1}`);
    },
    onSwipedRight: () => {
      if (active === 0) return;
      setActive(active - 1);
      navigate(`/story/${Number(id) - 1}`);
    },
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-hidden">
      <Link to={"/"}>
        <i className="fa-solid fa-xmark absolute top-8 right-8 lg:top-10 lg:right-16 text-3xl hover:text-pink-300"></i>
      </Link>

      <Link
        to={"/"}
        className="absolute top-8 left-8 lg:top-10 lg:left-16 text-3xl hover:text-pink-300 font-title"
      >
        InstaFolio
      </Link>

      <div className="carousel h-3/4 lg:h-5/6 xl:w-1/4" {...handlers}>
        {active > 0 && (
          <button
            className="nav left"
            onClick={() => {
              navigate(`/story/${Number(id) - 1}`);
              setActive(Number(id) - 1);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        {recent.map((project, i) => (
          <div
            key={i}
            className="card-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card
              imgs={project.imgs}
              title={project.name}
              content={project.description}
              tools={project.tools}
              link = {project.link}
            />
          </div>
        ))}
        {active < count - 1 && (
          <button
            className="nav right"
            onClick={() => {
              navigate(`/story/${Number(id) + 1}`);
              setActive(Number(id) + 1);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default function Story() {
  return (
    <div className="app">
      <Carousel></Carousel>
    </div>
  );
}
