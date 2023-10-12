import Project from "./Project";

const projects = [
  {
    name: "Spotify",
    img: "",
    description: "awdawdawdawdawd",
    tools: ["html", "css", "Javascript"],
    date: "335",
  },
  {
    name: "Spotify",
    img: "",
    description: "efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad",
    tools: ["html", "css", "Javascript"],
    date: "3453",
  },
  {
    name: "Spotify",
    img: "",
    description: "efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad",
    tools: ["html", "css", "Javascript"],
    date: "3453",
  },
  {
    name: "Spotify",
    img: "",
    description: "efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad efadawdadwadad",
    tools: ["html", "css", "Javascript"],
    date: "3453",
  },
];

function FvrtProjects() {
  return (
    <div>
      <h1 className="uppercase font-semibold tracking-wider text-center pb-1 mb-3 border-b-white/40">
        Favorite Projects
      </h1>
      <ul className="space-y-8 xxl:px-16 mt-4 lg:mt-6 flex flex-col items-center w-full">
        {projects.map((item, i) => (
          <li className="w-full xl:w-3/4" key={i}>
            <Project project={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FvrtProjects;
