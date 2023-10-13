import React from "react";
import { useState } from "react";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./story.scss";
import { recent } from "../../utils/recentProjecs";

const CARDS = recent.length;
const MAX_VISIBILITY = 3;

const Card = ({ title, content , imgs}) => (
  <div className="card border-4 border-pink-600 bg-cover bg-center" style={{backgroundImage : `url(${imgs[0]})`}}>
    <h2 className="z-10">{title}</h2>
    {/* <img className="absolute top-0 left-0 h-full object-cover object-center z-0 p-1 rounded-2xl" src={imgs[0]} alt="" /> */}
    <p className="z-10">{content}</p>
  </div>
);

const Carousel = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(Number(id));
  const count = recent.length;

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

      <div className="carousel h-3/4 lg:h-5/6 xl:w-1/4">
        {active > 0 && (
          <button
            className="nav left"
            onClick={() => {
              navigate(`/story/${Number(id) - 1}`);
              setActive(Number(id)-1);
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
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
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button
            className="nav right"
            onClick={() => {
              navigate(`/story/${Number(id) + 1}`);
              setActive(Number(id)+1);
            }}
          >
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    </div>
  );
};

export default function Story() {
  const { id } = useParams();
  const project = recent[id];

  return (
    <div className="app">
      <Carousel>
        {[...new Array(CARDS)].map((i) => (
          <Card key={i} imgs={project.imgs} title={project.name} content={project.description} />
        ))}
      </Carousel>
    </div>
  );
}
