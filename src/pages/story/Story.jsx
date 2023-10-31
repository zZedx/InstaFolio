import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./story.scss";
import { recent } from "../../utils/recentProjecs";
import { Card } from "./Card";

const MAX_VISIBILITY = 3;

export default function Story() {
  return (
    <div className="app">
      <Carousel></Carousel>
    </div>
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
    <div className="flex h-screen w-screen select-none items-center justify-center overflow-hidden bg-[#24231f]">
      <Link to={"/"}>
        <i className="fa-solid fa-xmark absolute right-8 top-8 text-3xl hover:text-pink-500 lg:right-16 lg:top-10"></i>
      </Link>

      <Link
        to={"/"}
        className="absolute left-8 top-8 font-title text-3xl hover:text-pink-500 lg:left-16 lg:top-10"
      >
        InstaFolio
      </Link>

      <span className="absolute bottom-3 font-bold uppercase sm:hidden">
        Swipe <i className="fa-solid fa-arrow-right"></i>
      </span>

      <div className="carousel h-3/4 lg:h-5/6 xl:w-1/4" {...handlers}>
        {active > 0 && (
          <button
            className="nav left"
            onClick={() => {
              navigate(`/story/${Number(id) - 1}`);
              setActive(Number(id) - 1);
            }}
          >
            <i className="fa-solid fa-chevron-left text-yellow-900"></i>
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
              link={project.link}
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
            <i className="fa-solid fa-chevron-right text-yellow-900"></i>
          </button>
        )}
      </div>
    </div>
  );
};
