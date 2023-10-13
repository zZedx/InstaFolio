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

const Card = ({ title, content, imgs, tools }) => {
  const { id } = useParams();
  useEffect(() => {
    setActive(false);
  }, [id]);
  const [active, setActive] = useState(false);
  return (
    <div
      className={`card flex flex-col justify-between items-center overflow-hidden ${
        active ? "cursor-pointer" : ""
      }`}
      style={{
        boxShadow: active ? "0 0 40px purple, 0 0 150px purple" : "none",
      }}
      onClick={() => setActive(false)}
    >
      <span
        className="z-10 font-bold text-6xl tracking-wider text-transparent uppercase"
        style={{
          WebkitTextStroke: "2px white",
          textShadow: "0 0 40px purple, 0 0 0px purple , 0 0 150px purple",
        }}
      >
        {title}
      </span>
      <img
        className={` transition-all absolute top-0 left-0 h-full object-cover object-center z-0 p-1 rounded-2xl ${
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(true);
            }}
            className="  px-3 py-2 text-purple-400 cursor-pointer text-xl underline hover:text-purple-200 w-full uppercase font-semibold"
          >
            more Details
          </button>
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
      </div>
    </div>
  );
};

function Tool({ children }) {
  return (
    <span className="bg-gradient-to-tr to-purple-400 border-2 border-red-700 from-pink-500 px-2 py-0.5 inline-block rounded uppercase font-semibold text-xs md:text-sm min-w-[80px] text-center">
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
    },
    onSwipedRight: () => {
      if (active === 0) return;
      setActive(active - 1);
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
