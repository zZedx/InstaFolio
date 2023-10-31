import TextExpander from "../../utils/TextExpander";

const Project = ({ project }) => {
  const { name, date, img, tools, description, code, live } = project;
  return (
    <div className="rounded-md border border-white/20 bg-white/10 py-4">
      <nav className="flex items-center gap-3 px-4 pb-4">
        <span className="font-medium lg:text-lg">{name}</span>
        <span className="h-1 w-1 rounded-full bg-gray-400"></span>
        <span className="text-sm text-gray-400">{date}</span>
      </nav>
      <img className="w-full overflow-hidden rounded-md" src={img} alt="" />
      <main>
        <ul className="my-4 flex gap-3 px-4">
          {tools.map((tool, i) => (
            <li key={i}>
              <Tool>{tool}</Tool>
            </li>
          ))}
        </ul>
        <TextExpander
          colapsedNumWords={10}
          buttonInline={true}
          buttonColor="pink"
          className="mb-6 px-4 text-sm md:text-base "
          title={name}
        >
          {description}
        </TextExpander>
        <div className="space-x-6 px-4">
          <a
            className="inline-block w-24 space-x-3 border border-white/40 px-2 py-1 text-center text-sm font-semibold tracking-widest transition-all hover:bg-white hover:text-black"
            href={code}
          >
            <i className="fa-brands fa-github"></i>
            <span>CODE</span>{" "}
          </a>
          <a
            className="inline-block w-24 space-x-3 border border-white/40 px-2 py-1 text-center text-sm font-semibold tracking-widest transition-all hover:bg-white hover:text-black"
            href={live}
          >
            <i className="fas fa-stream"></i>
            <span>LIVE</span>{" "}
          </a>
        </div>
        <p className="mt-2 flex-wrap px-4 text-xs text-red-500">
          Live might take time to load because of free hosting
        </p>
      </main>
    </div>
  );
};

function Tool({ children }) {
  return (
    <span className="inline-block rounded bg-[#e34b71] px-2 py-0.5 text-xs font-semibold uppercase md:text-sm">
      {children}
    </span>
  );
}

export default Project;
