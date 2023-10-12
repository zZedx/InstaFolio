import RecentStoryItem from "./RecentStoryItem";

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
];

const RecentWork = () => {
  return (
    <div className="lg:mb-12 lg:mt-6 mb-6">
      <h2 className="uppercase font-semibold tracking-wider text-center pb-1 mb-3 border-b-white/40">Recent Work</h2>
      <ul className="flex gap-6 overflow-x-auto">
        {recent.map((item , i) => (
          <RecentStoryItem key={i} project={item} />
        ))}
      </ul>
    </div>
  );
};

export default RecentWork;
