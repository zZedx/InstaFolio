import RecentStoryItem from "./RecentStoryItem";
import { Link } from "react-router-dom";

const recent = [
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  },
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  },
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  },
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  },
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  },
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  },
  {
    name: "Spotify",
    imgs: [],
    description: "",
    tools: [],
    date: "",
  }
];

const RecentWork = () => {
  return (
    <div className="lg:mb-12 lg:mt-6 mb-6">
      <h2 className="uppercase font-semibold tracking-wider text-center pb-1 mb-3 border-b-white/40">
        Recent Work
      </h2>
      <ul className="flex gap-6 overflow-scroll lg:px-8 sm:justify-center">
        {recent.map((item, i) => (
          <li key={i}><Link to={`/story/${i}`}><RecentStoryItem project={item} /></Link></li>
        ))}
      </ul>
    </div>
  );
};

export default RecentWork;
